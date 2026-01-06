import type { Meta, StoryObj } from '@storybook/react'
import { Dashboard } from './Dashboard'

const meta = {
  title: 'Organisms/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    user: {
      control: 'object',
      description: 'User profile information',
    },
    todoList: {
      control: 'object',
      description: 'TodoList component props',
    },
    notification: {
      control: 'object',
      description: 'NotificationCard component props',
    },
    meeting: {
      control: 'object',
      description: 'EventCard component props',
    },
    projectOverview: {
      control: 'object',
      description: 'ProjectOverview component props',
    },
    aiSuggestion: {
      control: 'object',
      description: 'AISuggestion component props',
    },
    scheduling: {
      control: 'object',
      description: 'SchedulingCard component props',
    },
    fileLibrary: {
      control: 'object',
      description: 'FileMediaLibrary component props',
    },
    onManageDashboard: {
      action: 'manage dashboard clicked',
      description: 'Callback when manage dashboard is clicked',
    },
  },
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      name: 'Paityn Levin',
      title: 'SR. UI DESIGNER',
      avatar: 'https://i.pravatar.cc/150?img=12',
      onNotificationClick: () => console.log('Notifications clicked'),
    },
    todoList: {
      items: [
        {
          id: '1',
          title: 'Update button styles to match guidelines',
          date: 'Mar 24th',
          status: 'blocking',
        },
        {
          id: '2',
          title: 'Sync with UX team to refine user flows',
          date: 'Mar 23rd',
          status: 'essential',
          description: 'Design low-fidelity wireframes for the new landing page, ensuring a user-friendly layout and clear content hierarchy.',
          assignee: {
            name: 'Kaylynn Siphron',
            avatar: 'https://i.pravatar.cc/150?img=5',
          },
        },
        {
          id: '3',
          title: 'Create wireframes for the new landing page',
          date: 'Mar 23rd',
          status: 'urgent',
        },
        {
          id: '4',
          title: 'Use a grid system for consistency',
          date: 'Mar 22nd',
          status: 'blocking',
        },
      ],
      onAdd: () => console.log('Add task'),
    },
    notification: {
      sender: {
        name: 'Charlie Herwitz',
        role: 'PRODUCT DIRECTOR',
        avatar: 'https://i.pravatar.cc/150?img=8',
      },
      message: 'Would you like them formatted for a specific use case, like a project management tool?',
      timeAgo: '5 mins',
      read: true,
      onSend: () => console.log('Send clicked'),
    },
    meeting: {
      title: 'Meeting with Gilbert',
      description: 'Design system updates & development',
      time: '09:00 am - 09:30 am',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      showCopyLink: true,
      showShareButton: true,
      onCopyLink: () => console.log('Copy link clicked'),
      onShare: () => console.log('Share clicked'),
    },
    projectOverview: {
      title: 'Project overview',
      description: 'Design low-fidelity wireframes for the new landing page, ensuring a user-friendly layout and clear content hierarchy.',
      selectOptions: [
        { value: 'it-ticket', label: 'IT Ticket System' },
        { value: 'project-a', label: 'Project A' },
      ],
      selectedValue: 'it-ticket',
      progress: 0.65,
      steps: [
        { id: '1', label: 'INITIATED', date: 'Feb 15th', position: 0.1, status: 'completed' },
        { id: '2', label: 'IN PLANNING', date: 'Feb 21st', position: 0.3, status: 'completed' },
        { id: '3', label: 'IN DEVELOPMENT', date: 'Mar 4th', position: 0.65, status: 'current' },
        { id: '4', label: 'TESTING', date: '', position: 0.8, status: 'upcoming' },
        { id: '5', label: 'DELIVERED', date: '', position: 1, status: 'upcoming' },
      ],
      currentStepNote: 'Notes on interactions and responsiveness, and link to the file for review',
      metrics: {
        failsLabel: 'SCALE',
        failsValue: '6/10',
        dueLabel: 'DUE',
        dueValue: 'Apr 28th',
      },
    },
    aiSuggestion: {
      question: 'Would you like to set this task to High Priority and add a due date for this week?',
      onYes: () => console.log('Yes clicked'),
      onNo: () => console.log('No clicked'),
    },
    scheduling: {
      description: 'You have one scheduled event today - don\'t miss them!',
      day: 'FRIDAY',
      date: 'Mar 28',
      event: {
        title: 'Expo world press photo Montreal',
        location: '325 Rue de la Commune E',
        time: '10:30am',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      },
      onAction: () => console.log('Mark event clicked'),
    },
    fileLibrary: {
      folder: {
        name: 'Visual Vault',
        fileCount: 362,
        description: 'A curated collection of all creative essentials - images, photos, icons, and visual elements. Everything visual lives here.',
      },
      onAdd: () => console.log('Add file'),
      onShare: () => console.log('Share'),
      onAction: () => console.log('Open folder'),
      onPrevious: () => console.log('Previous'),
      onNext: () => console.log('Next'),
    },
    onManageDashboard: () => console.log('Manage dashboard clicked'),
  },
}

export const Minimal: Story = {
  args: {
    user: {
      name: 'John Doe',
      title: 'DEVELOPER',
    },
  },
}

export const WithTodoListOnly: Story = {
  args: {
    user: {
      name: 'Jane Smith',
      title: 'DESIGNER',
    },
    todoList: {
      items: [
        { id: '1', title: 'Task 1', date: 'Mar 24th', status: 'blocking' },
        { id: '2', title: 'Task 2', date: 'Mar 23rd', status: 'urgent' },
      ],
    },
  },
}

