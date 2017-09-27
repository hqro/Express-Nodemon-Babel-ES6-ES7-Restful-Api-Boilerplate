import { error } from 'console'

import * as demoHelper from '../helpers/demo'

const demo = async (req, res) => {
  try {
    const params = req.params
    const test = await demoHelper.demo(params)

    return res.status(200).json(test)
  } catch (e) {
    error(e)
    return res.status(500).send('Error on demo controller')
  }
}

export {
  demo,
}
