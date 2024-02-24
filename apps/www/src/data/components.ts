import Accordion from "@/components/neobruu/Accordion";
import Alert from "@/components/neobruu/Alert";
import Avatar from "@/components/neobruu/Avatar";
import Button from "@/components/neobruu/Button";
import Badge from "@/components/neobruu/Badge";
import Card from "@/components/neobruu/Card";
import Checkbox from "@/components/neobruu/Checkbox";
import Dropdown from "@/components/neobruu/Dropdown";
import Drawer from "@/components/neobruu/Drawer";
import Dialog from "@/components/neobruu/Dialog";
import Input from "@/components/neobruu/Input";
import Radio from "@/components/neobruu/Radio";
import Toast from "@/components/neobruu/Toast";
import Tooltip from "@/components/neobruu/Tooltip";
import Tabs from "@/components/neobruu/Tabs";
import Textarea from "@/components/neobruu/Textarea";

import ButtonExample from "@/components/example/ButtonExample";
import ToastExample from "@/components/example/ToastExample";
import AlertExample from "@/components/example/AlertExample";
import BadgeExample from "@/components/example/BadgeExample";
import CheckboxExample from "@/components/example/CheckboxExample";
import AvatarExample from "@/components/example/AvatarExample";
import TooltipExample from "@/components/example/TooltipExample";
import DropdownExample from "@/components/example/DropdownExample";
import TabsExample from "@/components/example/TabsExample";
import InputExample from "@/components/example/InputExample";
import TextareaExample from "@/components/example/TextareaExample";
import CardExample from "@/components/example/CardExample";
import AccordionExample from "@/components/example/AccordionExample";
import DrawerExample from "@/components/example/DrawerExample";
import DialogExample from "@/components/example/DialogExample";
import RadioExample from "@/components/example/RadioExample";
import Select from "@/components/neobruu/Select";
import SelectExample from "@/components/example/SelectExample";

type ComponentObj = {
  name: string;
  sub?: string;
  isNew?: boolean;
  component: any;
  exampleComponent?: any;
  prevComponent?: string;
  nextComponent?: string;
};

const components: ComponentObj[] = [
  {
    name: "Accordion",
    sub: "A collapsible content structure for organizing information efficiently.",
    component: Accordion,
    exampleComponent: AccordionExample,
  },
  {
    name: "Alert",
    sub: "Provides a mechanism for displaying important messages or notifications to users within the application interface.",
    component: Alert,
    exampleComponent: AlertExample,
  },
  {
    name: "Avatar",
    sub: "Represents a user or entity with a visual representation.",
    component: Avatar,
    exampleComponent: AvatarExample,
  },
  {
    name: "Badge",
    sub: "Small visual indicator typically used to convey status, notification count, or other contextual information within the user interface.",
    component: Badge,
    exampleComponent: BadgeExample,
  },
  {
    name: "Button",
    sub: "Clickable element for user interaction.",
    component: Button,
    exampleComponent: ButtonExample,
  },
  {
    name: "Card",
    sub: "Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.",
    component: Card,
    exampleComponent: CardExample,
  },
  {
    name: "Checkbox",
    sub: "Interactive element allowing users to select or deselect options within forms or lists.",
    component: Checkbox,
    exampleComponent: CheckboxExample,
  },
  {
    name: "Dialog",
    sub: "Overlay component used to display important information, receive user input, or confirm actions within the application interface.",
    component: Dialog,
    exampleComponent: DialogExample,
  },
  {
    name: "Drawer",
    sub: "Sliding panel or container typically used for navigation, displaying additional content, or providing contextual options within the application interface.",
    component: Drawer,
    exampleComponent: DrawerExample,
  },
  {
    name: "Dropdown",
    sub: "Interactive menu or list that expands or collapses to display a selection of options or actions for the user to choose from.",
    component: Dropdown,
    exampleComponent: DropdownExample,
  },
  {
    name: "Input",
    sub: "Interactive field for users to enter or edit text, numbers, or other data within forms or input fields.",
    component: Input,
    exampleComponent: InputExample,
  },
  {
    name: "Radio",
    sub: "Interactive element allowing users to select or deselect options within forms or lists.",
    component: Radio,
    exampleComponent: RadioExample,
    isNew: true
  },
  {
    name: "Select",
    sub: "Interactive field for users to enter or edit text, numbers, or other data within forms or Select fields.",
    component: Select,
    exampleComponent: SelectExample,
    isNew: true
  },
  {
    name: "Tabs",
    sub: "Navigation element used to organize content into separate sections or categories, allowing users to switch between them to access different sets of information or functionality.",
    component: Tabs,
    exampleComponent: TabsExample,
  },
  {
    name: "Textarea",
    sub: "Multiline input field allowing users to enter or edit longer pieces of text or content within forms or input areas.",
    component: Textarea,
    exampleComponent: TextareaExample,
  },
  {
    name: "Toast",
    sub: "Temporary notification or message displayed to users, provide feedback or alert about a specific event or action.",
    component: Toast,
    exampleComponent: ToastExample,
  },
  {
    name: "Tooltip",
    sub: "Small informational pop-up boxes that appear when users hover over an element, providing additional context or descriptions about the element or its functionality.",
    component: Tooltip,
    exampleComponent: TooltipExample,
  },
];

components.sort((a, b) => a.name.localeCompare(b.name));

for (let i = 0; i < components.length; i++) {
  const currentComponent: any = components[i];

  if (i > 0) {
    currentComponent.prevComponent = components[i - 1]?.name;
  } else {
    currentComponent.prevComponent = "";
  }

  if (i < components.length - 1) {
    currentComponent.nextComponent = components[i + 1]?.name;
  } else {
    currentComponent.nextComponent = "";
  }
}

export default components;