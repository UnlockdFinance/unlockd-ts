import { InvalidAddressFormat, InvalidRequestParams } from './errors'
import Joi from 'joi'
import {
  ActionRequest,
  BuyNowRequest,
  MarketRequest,
  PricesRequest,
  SafeActionRequest,
  SafeBuyNowRequest,
  SafeMarketRequest,
  SafePricesRequest,
  SafeSellNowRequest,
  SellNowRequest
} from './types/requests'
import { Address, isAddress, isHex } from 'viem'

export const hashSchema = Joi.string().custom((value, helpers) => {
  if (!isHex(value)) {
    return helpers.error('any.invalid', {
      message: `The value "${value}" is not a valid hash.`
    })
  }
  return value.toLowerCase()
})

export const addressSchema = Joi.string().custom((value, helpers) => {
  if (!isAddress(value)) {
    return helpers.error('any.invalid', {
      message: `The value "${value}" is not a valid Ethereum address.`
    })
  }
  return value.toLowerCase()
})

export const bigintSchema = Joi.alternatives().try(
  Joi.custom((value, helpers) => {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    if (typeof value === 'string' && /^\d+$/.test(value)) {
      return value
    }
    return helpers.error('any.invalid', { value })
  })
)

export const nftSchema = Joi.object({
  collection: addressSchema.required(),
  tokenId: bigintSchema.required()
}).unknown(true)

export const validateAddress = (address: string): Address => {
  const { error, value } = addressSchema.required().validate(address)
  if (error) {
    throw new InvalidAddressFormat(address)
  }

  return value as Address
}

export const validateBorrow = (body: ActionRequest): SafeActionRequest => {
  const schema = Joi.object({
    loanId: hashSchema.optional(),
    nfts: Joi.array().items(nftSchema).min(1).max(100).optional(),
    underlyingAsset: addressSchema.when('loanId', {
      is: Joi.exist(),
      then: Joi.optional(),
      otherwise: Joi.required()
    })
  })
    .unknown(true)
    .required()
    .or('loanId', 'nfts')

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeActionRequest
}

export const validateRepay = (body: ActionRequest): SafeActionRequest => {
  const schema = Joi.object({
    loanId: hashSchema.required(),
    nfts: Joi.array().items(nftSchema).min(0).max(100).optional()
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeActionRequest
}

export const validateSellNow = (body: SellNowRequest): SafeSellNowRequest => {
  const schema = Joi.object({
    loanId: hashSchema.optional(),
    nft: nftSchema.required()
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeSellNowRequest
}

export const validateBuyNow = (body: BuyNowRequest): SafeBuyNowRequest => {
  const schema = Joi.object({
    underlyingAsset: addressSchema.required(),
    nft: nftSchema.required()
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeBuyNowRequest
}

export const validateMarket = (body: MarketRequest): SafeMarketRequest => {
  const { error, value } = nftSchema.required().validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeMarketRequest
}

export const validatePrices = (body: PricesRequest): SafePricesRequest => {
  const schema = Joi.object({
    nfts: Joi.array()
      .items(
        nftSchema.keys({
          underlyingAsset: addressSchema.required()
        })
      )
      .min(1)
      .max(100)
      .required()
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafePricesRequest
}
