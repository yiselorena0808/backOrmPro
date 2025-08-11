import { AsyncLocalStorage } from 'async_hooks'

type TenantStore = { tenantId?: number }

export const tenantStorage = new AsyncLocalStorage<TenantStore>()

export function setTenantId(id_tenant: number) {
  const store = tenantStorage.getStore()
  if (store) {
    store.tenantId = id_tenant
  }
}

export function getTenantId(): number | undefined {
  return tenantStorage.getStore()?.tenantId
}
