import Joi from 'joi'
import { Order, OrderType } from './types/subgraph'
import { addressSchema, nftSchema } from './validations'

/**
 * Subgraph responses validation
 */

const bidSchema = Joi.object({
  bidAmount: Joi.string().required(),
  bidder: addressSchema.required(),
  amountOfDebt: Joi.string().required(),
  amountToPay: Joi.string().required()
}).unknown(true)

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
