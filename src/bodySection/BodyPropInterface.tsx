
export interface ComponentData {
  name: string, 
  slug: string, 
  element: JSX.Element
}

export default interface BodyInterface {
  cover: ComponentData,
  portfolio: ComponentData,
  about: ComponentData,
  contact: ComponentData,
}