import { InvalidActionRequestParams, InvalidAddressFormat } from './errors'
import Joi from 'joi'
import { ActionRequest } from './types/requests'

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
  }).min(1)

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
