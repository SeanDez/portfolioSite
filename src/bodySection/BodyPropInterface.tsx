
// type keyNames = 'cover' | 'portfolio' | 'aboutContant';

// export default interface BodyInterface <keyNames extends string> {
//   [K in keyNames]: {
//      name: string,
//      element: JSX.Element
//    }
// }

export default interface BodyInterface {
  cover : { name: string, element: JSX.Element },
  portfolio : { name: string, element: JSX.Element },
  aboutContact : { name: string, element: JSX.Element },
}