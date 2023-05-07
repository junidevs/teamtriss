import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react"

export type TNotificationsUIContext = {
  isNotificationsUIOpen: boolean
  setNotificationsUIOpen: Dispatch<SetStateAction<boolean>>
  onNotificationsUIToggle: () => void
}

export const NotificationsUIContext = createContext<
  TNotificationsUIContext | undefined
>(undefined)

export const NotificationsUIProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isNotificationsUIOpen, setNotificationsUIOpen] = useState(false)
  const onNotificationsUIToggle = useCallback(() => {
    setNotificationsUIOpen((isCurrentlyOpen) => !isCurrentlyOpen)
  }, [])

  const memoizedContextValue = useMemo(
    () => ({
      isNotificationsUIOpen,
      setNotificationsUIOpen,
      onNotificationsUIToggle,
    }),
    [isNotificationsUIOpen, setNotificationsUIOpen, onNotificationsUIToggle]
  )

  return (
    <NotificationsUIContext.Provider value={memoizedContextValue}>
      {children}
    </NotificationsUIContext.Provider>
  )
}
