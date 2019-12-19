import feathersClient, {
  makeServicePlugin,
  BaseModel
} from '../../feathers-client'
import { parseISO } from 'date-fns'

class Message extends BaseModel {
  constructor(data, options) {
    super(data, options)
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'Message'
  // Define default properties here
  static instanceDefaults() {
    return {
      text: ''
    }
  }
  static setupInstance(data) {
    if (data.createdAt) {
      data.createdAt = parseISO(data.createdAt)
    }
    return data
  }
}
const servicePath = 'messages'
const servicePlugin = makeServicePlugin({
  Model: Message,
  service: feathersClient.service(servicePath),
  servicePath
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
