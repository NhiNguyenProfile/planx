import { PolymorphicComponentPropWithRef } from '@/utils'
import type { TodoListProps } from '@/components/molecules/TodoList'
import type { NotificationCardProps } from '@/components/molecules/NotificationCard'
import type { EventCardProps } from '@/components/molecules/EventCard'
import type { ProjectOverviewProps } from '@/components/molecules/ProjectOverview'
import type { AISuggestionProps } from '@/components/molecules/AISuggestion'
import type { SchedulingCardProps } from '@/components/molecules/SchedulingCard'
import type { FileMediaLibraryProps } from '@/components/molecules/FileMediaLibrary'

export interface DashboardUser {
  name: string
  title: string
  avatar?: string
  onNotificationClick?: () => void
}

export type DashboardProps<C extends React.ElementType = 'div'> =
  PolymorphicComponentPropWithRef<
    C,
    {
      /**
       * User profile information
       */
      user?: DashboardUser
      /**
       * TodoList component props
       */
      todoList?: Omit<TodoListProps, 'as'>
      /**
       * NotificationCard component props
       */
      notification?: Omit<NotificationCardProps, 'as'>
      /**
       * EventCard component props (meeting/video call)
       */
      meeting?: Omit<EventCardProps, 'as'>
      /**
       * ProjectOverview component props
       */
      projectOverview?: Omit<ProjectOverviewProps, 'as'>
      /**
       * AISuggestion component props
       */
      aiSuggestion?: Omit<AISuggestionProps, 'as'>
      /**
       * SchedulingCard component props
       */
      scheduling?: Omit<SchedulingCardProps, 'as'>
      /**
       * FileMediaLibrary component props
       */
      fileLibrary?: Omit<FileMediaLibraryProps, 'as'>
      /**
       * Callback when "Manage your dashboard" is clicked
       */
      onManageDashboard?: () => void
    }
  >

