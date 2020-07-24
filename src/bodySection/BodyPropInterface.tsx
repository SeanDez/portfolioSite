export default interface BodyInterface {
  // [keyName as keyof navItemKeys]: { name: string, element: JSX.Element }
  cover: { name: string, element: JSX.Element },
  portfolio: { name: string, element: JSX.Element },
  aboutContact: { name: string, element: JSX.Element },
}