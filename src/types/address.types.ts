import { Address } from "@/redux/api/address/address.types";

export interface AddressSidebarProps {
  onClose: () => void;
}

export interface AddressesProps {
  handleClick: (step: number) => void;
  onSelect: (id: string) => void;
}

export interface AddressCardProps {
  address: Address;
  isSelected: boolean;
  handleSelect: (id: string) => void;
}

export interface AddressModalProps {
  onClose: () => void;
  id: string;
}
