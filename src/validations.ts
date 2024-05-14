import {
  InvalidActionRequestParams,
  InvalidAddressFormat,
  InvalidMarketRequestParams,
  InvalidPricesRequestParams,
  InvalidSellNowRequestParams
} from './errors'
import Joi from 'joi'
import { ActionRequest, MarketRequest, SellNowRequest } from './types/requests'

export const validateAddress = (address: string) => {
  const regex = new RegExp(/^0x[0-9A-Fa-f]{40}$/)
  if (!regex.test(address)) {
    throw new InvalidAddressFormat(address)
  }
}

export const validateBorrow = (body: ActionRequest) => {
  const schema = Joi.object({
    loanId: Joi.string().pattern(new RegExp(/^0x[0-9A-Fa-f]{64}$/)),
    nfts: Joi.array().items(
      Joi.object({
        collection: Joi.string()
          .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
          .required(),
        tokenId: Joi.string().required()
      })
    )
  })
    .min(1)
    .when('.loanId', {
      not: Joi.exist(),
      then: Joi.object({
        underlyingAsset: Joi.string()
          .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
          .required()
      }).required(),
      otherwise: Joi.object({ underlyingAsset: Joi.forbidden() })
    })

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidActionRequestParams(validate.error.message)
  }
}
export const validateRepay = (body: ActionRequest) => {
  const schema = Joi.object({
    loanId: Joi.string()
      .pattern(new RegExp(/^0x[0-9A-Fa-f]{64}$/))
      .required(),
    nfts: Joi.array().items(
      Joi.object({
        collection: Joi.string()
          .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
          .required(),
        tokenId: Joi.string().required()
      })
    )
  })

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidActionRequestParams(validate.error.message)
  }
}
export const validateSellNow = (body: SellNowRequest) => {
  const schema = Joi.object({
    loanId: Joi.string().pattern(new RegExp(/^0x[0-9A-Fa-f]{64}$/)),
    nft: Joi.object({
      collection: Joi.string()
        .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
        .required(),
      tokenId: Joi.string().required()
    }).required()
  }).required()

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidSellNowRequestParams(validate.error.message)
  }
}
export const validateBuyNow = (body: SellNowRequest) => {
  const schema = Joi.object({
    underlyingAsset: Joi.string().pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/)).required(),
    nft: Joi.object({
      collection: Joi.string()
        .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
        .required(),
      tokenId: Joi.string().required()
    }).required()
  }).required()

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidSellNowRequestParams(validate.error.message)
  }
}
export const validateMarket = (body: MarketRequest) => {
  const schema = Joi.object({
    collection: Joi.string()
      .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
      .required(),
    tokenId: Joi.string().required()
  }).required()

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidMarketRequestParams(validate.error.message)
  }
}

export const validatePrices = (body: { nfts: { collection: string; tokenId: string; underlyingAsset: string }[] }) => {
  const schema = Joi.object({
    nfts: Joi.array()
      .items(
        Joi.object({
          collection: Joi.string()
            .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
            .required(),
          tokenId: Joi.string().required(),
          underlyingAsset: Joi.string()
            .pattern(new RegExp(/^0x[0-9A-Fa-f]{40}$/))
            .required()
        }).required()
      )
      .max(100)
      .required()
  }).required()

  const validate = schema.validate(body)
  if (validate.error) {
    throw new InvalidPricesRequestParams(validate.error.message)
  }
}
