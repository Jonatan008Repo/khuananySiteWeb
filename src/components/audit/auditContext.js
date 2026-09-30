import { createContext, useContext } from 'react'

// Abre el modal de "Solicitar auditoría" desde cualquier botón del sitio.
export const AuditContext = createContext({ openAudit: () => {} })

export const useAuditModal = () => useContext(AuditContext)
