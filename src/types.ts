export type Activity = {
  icon: string
  label: string
}

export type Organization = {
  id: number
  name: string
  rating: number
  guestsAge: string
  area: number
  price: number
  images: string[]
  category: string
}

export type SelectOption = {
  name: string
  state: boolean
}

export type SelectValues = SelectOption[]

export type RangeOption = {
  min: number
  max: number
  from: number
  step: number
  state: number
}

export type RangeValues = RangeOption[]

export type Filter = {
  type: 'one_select' | 'multi_select' | 'range'
  name: string
  values: SelectValues | RangeValues
}

export type AdditionalFilters = {
  [key: string]: Filter
}

export type SideBarFilters = {
  [key: string]: AdditionalFilters
}
