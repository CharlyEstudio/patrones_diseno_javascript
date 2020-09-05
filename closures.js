// Este ejemplo sería crear Schemas para mongoose

// Este ejemplo es genial para crear tablas en mongo de forma dinámica

const auditProps = {
  createdAt: { default: new Date },
  updatedAt: { default: new Date },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}

const Model = defaultProps => {
  return (name, props) => {
    const schema = mongoose.schema({
      ...defaultProps,
      ...props
    })

    return mongoose.model(name, schema)
  }
}

export const withAudit = Model(auditProps)

// En otro archivo, donde queremos crear una tabla con las propiedades de auditoria
withAudit('Product', {
  name: String,
  desc: String
})
