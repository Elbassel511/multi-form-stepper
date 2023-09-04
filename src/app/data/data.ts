export interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}

export interface AddOn {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  extra: string;
}

export let plans: Plan[] = [
  {
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: 'icon-arcade.svg',
  },
  {
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: 'icon-advanced.svg',
  },
  { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: 'icon-pro.svg' },
];

export let addOns: AddOn[] = [
  {
    id: 'onlineService',
    name: 'Online service',
    monthlyPrice: 1,
    yearlyPrice: 10,
    extra: 'Access to multiplayer games',
  },
  {
    id: 'largerStorage',
    name: 'Larger storage',
    monthlyPrice: 2,
    yearlyPrice: 20,
    extra: 'Extra 1TB of cloud save',
  },
  {
    id: 'customizableProfile',
    name: 'Customizable profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
    extra: 'Custom theme on your profile',
  },
];
