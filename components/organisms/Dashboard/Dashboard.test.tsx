import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
  it('renders user profile when provided', () => {
    render(
      <Dashboard
        user={{
          name: 'Paityn Levin',
          title: 'SR. UI DESIGNER',
        }}
      />
    )
    expect(screen.getByText('Paityn Levin')).toBeInTheDocument()
    expect(screen.getByText('SR. UI DESIGNER')).toBeInTheDocument()
  })

  it('renders todo list when provided', () => {
    render(
      <Dashboard
        todoList={{
          items: [
            { id: '1', title: 'Task 1', date: 'Mar 24th', status: 'blocking' },
          ],
        }}
      />
    )
    expect(screen.getByText('Task 1')).toBeInTheDocument()
  })

  it('renders notification card when provided', () => {
    render(
      <Dashboard
        notification={{
          sender: { name: 'Charlie Herwitz', role: 'PRODUCT DIRECTOR' },
          message: 'Test message',
        }}
      />
    )
    expect(screen.getByText('Charlie Herwitz')).toBeInTheDocument()
  })

  it('renders meeting card when provided', () => {
    render(
      <Dashboard
        meeting={{
          title: 'Meeting with Gilbert',
          description: 'Design system updates',
          time: '09:00 am - 09:30 am',
        }}
      />
    )
    expect(screen.getByText('Meeting with Gilbert')).toBeInTheDocument()
  })

  it('renders project overview when provided', () => {
    render(
      <Dashboard
        projectOverview={{
          title: 'Project overview',
          description: 'Test description',
        }}
      />
    )
    expect(screen.getByText('Project overview')).toBeInTheDocument()
  })

  it('renders AI suggestion when provided', () => {
    render(
      <Dashboard
        aiSuggestion={{
          question: 'Would you like to set this task to High Priority?',
        }}
      />
    )
    expect(screen.getByText(/Would you like to set this task/)).toBeInTheDocument()
  })

  it('renders scheduling card when provided', () => {
    render(
      <Dashboard
        scheduling={{
          event: {
            title: 'Expo world press photo Montreal',
            location: '325 Rue de la Commune E',
            time: '10:30am',
          },
        }}
      />
    )
    expect(screen.getByText('Expo world press photo Montreal')).toBeInTheDocument()
  })

  it('renders file library when provided', () => {
    render(
      <Dashboard
        fileLibrary={{
          folder: {
            name: 'Visual Vault',
            fileCount: 362,
            description: 'A curated collection',
          },
        }}
      />
    )
    expect(screen.getByText('Visual Vault')).toBeInTheDocument()
  })

  it('renders manage dashboard button when onManageDashboard is provided', async () => {
    const user = userEvent.setup()
    const onManageDashboard = vi.fn()
    render(
      <Dashboard
        onManageDashboard={onManageDashboard}
      />
    )
    
    const button = screen.getByText('Manage your dashboard')
    await user.click(button)
    
    expect(onManageDashboard).toHaveBeenCalledTimes(1)
  })

  it('calls user notification callback when bell icon is clicked', async () => {
    const user = userEvent.setup()
    const onNotificationClick = vi.fn()
    render(
      <Dashboard
        user={{
          name: 'Test User',
          title: 'TESTER',
          onNotificationClick,
        }}
      />
    )
    
    const bellButton = screen.getByLabelText('Notifications')
    await user.click(bellButton)
    
    expect(onNotificationClick).toHaveBeenCalledTimes(1)
  })
})

