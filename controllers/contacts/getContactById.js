const { NotFound } = require('http-errors')

const { Contact } = require('../../models')
const { sendSeccessRes } = require('../../helpers')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const ownerId = req.user._id

  const result = await Contact.find({ $and: [{ _id: contactId }, { owner: ownerId }] })

  if (!result || result.length === 0) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }

  sendSeccessRes(res, result)
}

module.exports = getContactById