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
import { Order, OrderType } from './types/subgraph'
import { Address, isAddress } from 'viem'

const addressSchema = Joi.string().custom((value, helpers) => {
  if (!isAddress(value)) {
    return helpers.error('any.invalid', {
      message: `The address "${value}" is not a valid Ethereum address.`
    })
  }
  return value.toLowerCase()
})

const bigintSchema = Joi.alternatives().try(
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

const nftSchema = Joi.object({
  collection: addressSchema.required(),
  tokenId: bigintSchema.required()
}).unknown(true)

const bidSchema = Joi.object({
  bidAmount: Joi.string().required(),
  bidder: addressSchema.required(),
  amountOfDebt: Joi.string().required(),
  amountToPay: Joi.string().required()
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
    loanId: addressSchema.optional(),
    nfts: Joi.array().items(nftSchema).min(1).max(100).required(),
    underlyingAsset: addressSchema.when('loanId', {
      is: Joi.exist(),
      then: Joi.optional(),
      otherwise: Joi.required()
    })
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }

  return value as SafeActionRequest
}

export const validateRepay = (body: ActionRequest): SafeActionRequest => {
  const schema = Joi.object({
    loanId: addressSchema.optional(),
    nfts: Joi.array().items(nftSchema).min(1).max(100).required()
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
    loanId: addressSchema.optional(),
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

export const validateOrder = (body: any): Order => {
  const schema = Joi.object({
    id: Joi.string().required(),
    type: Joi.number()
      .valid(
        OrderType.TYPE_LIQUIDATION_AUCTION,
        OrderType.TYPE_AUCTION,
        OrderType.TYPE_FIXED_PRICE,
        OrderType.TYPE_FIXED_PRICE_AND_AUCTION
      )
      .required(),
    assetId: addressSchema.required(),
    nft: nftSchema.required(),
    loan: Joi.object({
      id: Joi.string().required(),
      underlyingAsset: addressSchema.required(),
      nfts: Joi.array()
        .items(
          nftSchema.keys({
            isOnAuction: addressSchema.optional()
          })
        )
        .max(100)
        .required()
    })
      .unknown(true)
      .required(),
    owner: addressSchema,
    bids: Joi.array().items(bidSchema).required(),
    endTime: Joi.number().required()
  })
    .unknown(true)
    .required()

  const { error, value } = schema.validate(body)
  if (error) {
    throw error
  }

  return value as Order
}
