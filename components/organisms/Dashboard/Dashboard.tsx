import React from 'react'
import { cn } from '@/utils'
import { Box } from '@/components/atoms/Box'
import { Button } from '@/components/atoms/Button'
import { UserProfileCard } from '@/components/molecules/UserProfileCard'
import { TodoList } from '@/components/molecules/TodoList'
import { NotificationCard } from '@/components/molecules/NotificationCard'
import { EventCard } from '@/components/molecules/EventCard'
import { ProjectOverview } from '@/components/molecules/ProjectOverview'
import { AISuggestion } from '@/components/molecules/AISuggestion'
import { SchedulingCard } from '@/components/molecules/SchedulingCard'
import { FileMediaLibrary } from '@/components/molecules/FileMediaLibrary'
import type { DashboardProps } from './Dashboard.types'

/**
 * Dashboard component - Main dashboard layout combining multiple molecules
 *
 * @example
 * ```tsx
 * <Dashboard
 *   user={{
 *     name: 'Paityn Levin',
 *     title: 'SR. UI DESIGNER',
 *     avatar: '/avatar.jpg'
 *   }}
 *   todoList={{ items: [...], onAdd: () => {} }}
 *   notification={{ sender: {...}, message: '...' }}
 *   meeting={{ title: 'Meeting with Gilbert', ... }}
 *   projectOverview={{ title: 'Project overview', ... }}
 *   aiSuggestion={{ question: '...', onYes: () => {}, onNo: () => {} }}
 *   scheduling={{ day: 'FRIDAY', date: 'Mar 28', event: {...} }}
 *   fileLibrary={{ folder: {...}, onAction: () => {} }}
 * />
 * ```
 */
// Dashboard card styling constants
const DASHBOARD_CARD_STYLE = {
  borderRadius: '3xl' as const,
  shadow: 'sm' as const,
}

export const Dashboard = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      as,
      user,
      todoList,
      notification,
      meeting,
      projectOverview,
      aiSuggestion,
      scheduling,
      fileLibrary,
      onManageDashboard,
      className,
      ...props
    }: DashboardProps<C>,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const Component = as || 'div'

    return (
      <Component ref={ref} {...props}>
        <Box
          background="transparent"
          className={cn('min-h-screen bg-neutral-50 p-6', className)}
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
              {/* User Profile Card */}
              {user && (
                <UserProfileCard
                  name={user.name}
                  title={user.title}
                  avatar={user.avatar}
                  onNotificationClick={user.onNotificationClick}
                  cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                  cardShadow={DASHBOARD_CARD_STYLE.shadow}
                />
              )}

              {/* Todo List */}
              {todoList && (
                <Box className="flex-shrink-0">
                  <TodoList
                    {...todoList}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}

              {/* Notification Card */}
              {notification && (
                <Box className="flex-shrink-0">
                  <NotificationCard
                    {...notification}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}

              {/* Manage Dashboard Button */}
              {onManageDashboard && (
                <Button
                  variant="ghost"
                  onClick={onManageDashboard}
                  className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg"
                >
                  Manage your dashboard
                </Button>
              )}
            </div>

            {/* Center Column */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
              {/* Meeting/Event Card */}
              {meeting && (
                <Box className="flex-shrink-0">
                  <EventCard
                    {...meeting}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}

              {/* Project Overview */}
              {projectOverview && (
                <Box className="flex-shrink-0">
                  <ProjectOverview
                    {...projectOverview}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
              {/* AI Suggestion */}
              {aiSuggestion && (
                <Box className="flex-shrink-0">
                  <AISuggestion
                    {...aiSuggestion}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}

              {/* Scheduling Card */}
              {scheduling && (
                <Box className="flex-shrink-0">
                  <SchedulingCard
                    {...scheduling}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}

              {/* File Media Library */}
              {fileLibrary && (
                <Box className="flex-shrink-0">
                  <FileMediaLibrary
                    {...fileLibrary}
                    cardBorderRadius={DASHBOARD_CARD_STYLE.borderRadius}
                    cardShadow={DASHBOARD_CARD_STYLE.shadow}
                  />
                </Box>
              )}
            </div>
          </div>
        </Box>
      </Component>
    )
  }
)

Dashboard.displayName = 'Dashboard'

