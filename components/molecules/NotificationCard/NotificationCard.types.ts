import { PolymorphicComponentPropWithRef } from '@/utils'

export interface NotificationCardProps<C extends React.ElementType = 'div'> =
  PolymorphicComponentPropWithRef<
    C,
    {
      /**
       * Title of the notification section
       * @default 'Notifications'
       */
      title?: string
      /**
       * Sender information
       */
      sender: {
        name: string
        role?: string
        avatar?: string
      }
      /**
       * Notification message
       */
      message: string
      /**
       * Time ago (e.g., "5 mins")
       */
      timeAgo?: string
      /**
       * Whether notification is read
       * @default false
       */
      read?: boolean
      /**
       * Callback when send button is clicked
       */
      onSend?: () => void
      /**
       * Callback when notification is clicked
       */
      onClick?: () => void
    }
  >

