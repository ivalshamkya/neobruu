import Accordion from '@/components/neobruu/Accordion'
import Alert from '@/components/neobruu/Alert'
import Avatar from '@/components/neobruu/Avatar'
import {Button} from '@/components/neobruu/Button'
import Badge from '@/components/neobruu/Badge'
import Card from '@/components/neobruu/Card'
import Checkbox from '@/components/neobruu/Checkbox'
import Dropdown from '@/components/neobruu/Dropdown'
import Drawer from '@/components/neobruu/Drawer'
import Dialog from '@/components/neobruu/Dialog'
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
import AccordionExample from '@/components/example/AccordionExample'
import DrawerExample from '@/components/example/DrawerExample'
import DialogExample from '@/components/example/DialogExample'

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
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Button,
    exampleComponent: ButtonExample,
  },

  {
    name: 'Toast',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Toast,
    exampleComponent: ToastExample,
  },

  {
    name: 'Alert',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Alert,
    exampleComponent: AlertExample,
  },

  {
    name: 'Badge',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Badge,
    exampleComponent: BadgeExample,
  },

  {
    name: 'Checkbox',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Checkbox,
    exampleComponent: CheckboxExample,
  },

  {
    name: 'Avatar',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Avatar,
    exampleComponent: AvatarExample,
  },

  {
    name: 'Tooltip',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Tooltip,
    exampleComponent: TooltipExample,
  },

  {
    name: 'Dropdown',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Dropdown,
    exampleComponent: DropdownExample,
  },

  {
    name: 'Tabs',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Tabs,
    exampleComponent: TabsExample,
  },

  {
    name: 'Input',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Input,
    exampleComponent: InputExample,
  },

  {
    name: 'Textarea',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Textarea,
    exampleComponent: TextareaExample,
  },

  {
    name: 'Card',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Card,
    exampleComponent: CardExample,
  },

  {
    name: 'Accordion',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    component: Accordion,
    exampleComponent: AccordionExample,
  },

  {
    name: 'Drawer',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    isNew: true,
    component: Drawer,
    exampleComponent: DrawerExample,
  },

  {
    name: 'Dialog',
    sub: 'Lorem ipsum dolor sit amet, consectetur',
    isNew: true,
    component: Dialog,
    exampleComponent: DialogExample,
  },
];

components.sort((a, b) => a.name.localeCompare(b.name));


for (let i = 0; i < components.length; i++) {
  const currentComponent = components[i];

  if (i > 0) {
    currentComponent.prevComponent = components[i - 1].name;
  } else {
    currentComponent.prevComponent = '';
  }

  if (i < components.length - 1) {
    currentComponent.nextComponent = components[i + 1].name;
  } else {
    currentComponent.nextComponent = '';
  }
}

export default components