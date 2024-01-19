import Button from '@/components/neobruu/Button'
import Toast from '@/components/neobruu/Toast'
import Alert from '@/components/neobruu/Alert'
import Badge from '@/components/neobruu/Badge'

import ButtonExample from '@/components/example/ButtonExample'
import ToastExample from '@/components/example/ToastExample'
import AlertExample from '@/components/example/AlertExample'
import BadgeExample from '@/components/example/BadgeExample'
import Checkbox from '@/components/neobruu/Checkbox'
import CheckboxExample from '@/components/example/CheckboxExample'

type ComponentObj = {
  name: string
  component: any
  exampleComponent?: any
  prevComponent?: string
  nextComponent?: string
}

const components: ComponentObj[] = [
  {
    name: 'Button',
    component: Button,
    exampleComponent: ButtonExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Toast',
    component: Toast,
    exampleComponent: ToastExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },

  {
    name: 'Alert',
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
    component: Checkbox,
    exampleComponent: CheckboxExample,
    prevComponent: 'Badge',
    nextComponent: 'Card',
  },
]

export default components