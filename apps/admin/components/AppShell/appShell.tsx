import { CssBaseline, ICollapseView } from '@ocommerce/ui'

import Header from '@/components/Header'

const AppShell = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div>
        <ICollapseView size={100}>
          <span>AppShell</span>
          <div>123</div>
          <span>AppShell</span>
          <div>123</div>
        </ICollapseView>
      </div>
      <div>
        <p>Footer</p>
      </div>
    </>
  )
}

export default AppShell
