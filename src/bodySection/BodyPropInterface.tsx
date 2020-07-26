
// type keyNames = 'cover' | 'portfolio' | 'aboutContant';

// export default interface BodyInterface <keyNames extends string> {
//   [K in keyNames]: {
//      name: string,
//      element: JSX.Element
//    }
// }

export interface ComponentData {
  name: string, 
  slug: string, 
  element: JSX.Element
}

export default interface BodyInterface {
  cover: ComponentData,
  portfolio: ComponentData,
  aboutContact: ComponentData,
}