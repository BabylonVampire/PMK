import { ICooperationTab } from "@/types";
import { AuditOutlined, CheckOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

export const cooperationTabs: ICooperationTab[] = [
	{
		text: 'tab 1',
		tabHeading: 'tab 1',
		icon: <CheckOutlined />,
	},
	{
		text: 'tab 2',
		tabHeading: 'tab 2',
		icon: <MessageOutlined />,
	},
	{
		text: 'tab 3',
		tabHeading: 'tab 3',
		icon: <StarOutlined />,
	},
	{
		text: 'tab 4',
		tabHeading: 'tab 4',
		icon: <AuditOutlined />,
	},
]