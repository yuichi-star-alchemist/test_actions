import { render } from "@testing-library/react"

import RootLayout from '@/app/layout'
import RootView from '@/app/page'

describe('RootView', () => {
  const rootView = render(
    <RootLayout>
      <RootView/>
    </RootLayout>
  )

  it("root-page's snapshot", () => {
    expect(rootView).toMatchSnapshot()
  })
})