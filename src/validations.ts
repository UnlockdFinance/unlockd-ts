import { InvalidAddressFormat, InvalidRequestParams } from './errors'
import Joi from 'joi'
import { ActionRequest, MarketRequest, SellNowRequest } from './types/requests'
import { Order, OrderType } from './types/subgraph'

const addressSchema = Joi.string()
  .pattern(/^0x[a-fA-F0-9]{40}$/)
  .required()

const nftSchema = Joi.object({
  collection: Joi.string()
    .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
    .required(),
  tokenId: Joi.string().required()
})

const bidSchema = Joi.object({
  bidAmount: Joi.string().required(),
  bidder: addressSchema,
  amountOfDebt: Joi.string().required(),
  amountToPay: Joi.string().required()
})

export const validateAddress = (address: string) => {
  const { error } = addressSchema.validate(address)
  if (error) {
    throw new InvalidAddressFormat(address)
  }
}

export const validateBorrow = (body: ActionRequest) => {
  const schema = Joi.object({
    loanId: addressSchema,
    nfts: Joi.array().items(nftSchema)
  })
    .min(1)
    .when('.loanId', {
      not: Joi.exist(),
      then: Joi.object({
        underlyingAsset: addressSchema
      }).required(),
      otherwise: Joi.object({ underlyingAsset: Joi.forbidden() })
    })

  const { error } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
}
export const validateRepay = (body: ActionRequest) => {
  const schema = Joi.object({
    loanId: addressSchema,
    nfts: Joi.array().items(nftSchema)
  })

  const { error } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
}
export const validateSellNow = (body: SellNowRequest) => {
  const schema = Joi.object({
    loanId: addressSchema,
    nft: nftSchema
  }).required()

  const { error } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
}
export const validateBuyNow = (body: SellNowRequest) => {
  const schema = Joi.object({
    underlyingAsset: addressSchema,
    nft: nftSchema
  }).required()

  const { error } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
}
export const validateMarket = (body: MarketRequest) => {
  const { error } = nftSchema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
}

export const validatePrices = (body: { nfts: { collection: string; tokenId: string; underlyingAsset: string }[] }) => {
  const schema = Joi.object({
    nfts: Joi.array().items(nftSchema).max(100).required()
  }).required()

  const { error } = schema.validate(body)
  if (error) {
    throw new InvalidRequestParams(error.message)
  }
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
    assetId: addressSchema,
    nft: nftSchema,
    loan: Joi.object({
      id: Joi.string().required(),
      underlyingAsset: addressSchema,
      nfts: Joi.array().items(nftSchema).max(100).required()
    }).required(),
    owner: addressSchema,
    bids: Joi.array().items(bidSchema).required(),
    endTime: Joi.number().required()
  })

  const { error, value } = schema.validate(body)
  if (error) {
    throw error
  }

  return value as Order
}
