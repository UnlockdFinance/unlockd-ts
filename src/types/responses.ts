export type SignatureMessageResponse = {
  message: string
}
export type ValidateMessageResponse = {
  token: string
}

export type Signature = {
  data: object
  signature: { v: number; r: string; s: string; deadline: number }
}
