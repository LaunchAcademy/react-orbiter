import EditorRoute from 'routes/EditorIndex'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = EditorRoute.component()
  })

  it('returns a route configuration object', () => {
    expect(typeof(EditorRoute)).to.equal('object')
  })

  it('defines a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
