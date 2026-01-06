import { PolymorphicComponentPropWithRef } from '@/utils'

export type UserProfileCardProps<C extends React.ElementType = 'div'> =
  PolymorphicComponentPropWithRef<
    C,
    {
      /**
       * User name
       */
      name: string
      /**
       * User title/role
       */
      title: string
      /**
       * User avatar image URL
       */
      avatar?: string
      /**
       * Callback when notification bell is clicked
       */
      onNotificationClick?: () => void
    }
  >

