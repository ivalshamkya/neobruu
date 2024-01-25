import Alert from '@/components/neobruu/Alert'
import Avatar from '@/components/neobruu/Avatar'
import Button from '@/components/neobruu/Button'
import Badge from '@/components/neobruu/Badge'
import Card from '@/components/neobruu/Card'
import Checkbox from '@/components/neobruu/Checkbox'
import Dropdown from '@/components/neobruu/Dropdown'
import Input from '@/components/neobruu/Input'
import Toast from '@/components/neobruu/Toast'
import Tooltip from '@/components/neobruu/Tooltip'
import Tabs from '@/components/neobruu/Tabs'
import Textarea from '@/components/neobruu/Textarea'

import ButtonExample from '@/components/example/ButtonExample'
import ToastExample from '@/components/example/ToastExample'
import AlertExample from '@/components/example/AlertExample'
import BadgeExample from '@/components/example/BadgeExample'
import CheckboxExample from '@/components/example/CheckboxExample'
import AvatarExample from '@/components/example/AvatarExample'
import TooltipExample from '@/components/example/TooltipExample'
import DropdownExample from '@/components/example/DropdownExample'
import TabsExample from '@/components/example/TabsExample'
import InputExample from '@/components/example/InputExample'
import TextareaExample from '@/components/example/TextareaExample'
import CardExample from '@/components/example/CardExample'

type ComponentObj = {
  name: string
  sub?: string
  isNew?: boolean
  component: any
  exampleComponent?: any
  prevComponent?: string
  nextComponent?: string
}

const components: ComponentObj[] = [
  {
    name: 'Button',
    sub: 'button',
    component: Button,
    exampleComponent: ButtonExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Toast',
    sub: 'Toast',
    component: Toast,
    exampleComponent: ToastExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Alert',
    sub: 'alert',
    component: Alert,
    exampleComponent: AlertExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Badge',
    component: Badge,
    exampleComponent: BadgeExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Checkbox',
    sub: 'Checkbox',
    component: Checkbox,
    exampleComponent: CheckboxExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Avatar',
    sub: 'Avatar',
    component: Avatar,
    exampleComponent: AvatarExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Tooltip',
    sub: 'Tooltip',
    component: Tooltip,
    exampleComponent: TooltipExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Dropdown',
    sub: 'Dropdown',
    component: Dropdown,
    exampleComponent: DropdownExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Tabs',
    sub: 'Tabs',
    component: Tabs,
    exampleComponent: TabsExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Input',
    sub: 'Displays a form input field or a component that looks like an input field.',
    component: Input,
    exampleComponent: InputExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Textarea',
    sub: 'Displays a form textarea field or a component that looks like an textarea.',
    isNew: true,
    component: Textarea,
    exampleComponent: TextareaExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Card',
    sub: 'Displays a form Card field or a component that looks like an Card.',
    isNew: true,
    component: Card,
    exampleComponent: CardExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },
];

components.sort((a, b) => a.name.localeCompare(b.name));

export default components