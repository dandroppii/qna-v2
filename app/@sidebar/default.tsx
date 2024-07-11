import Image from "next/image";
import { getMenu } from "../api/menus";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import('@/components/Menu'), { ssr: false })

export default async function SideBar() {
  const menus = await getMenu()
  const navData = menus?.data?.map(({ id, attributes: {
    name, qna_categories, icon
  } }) => ({
    id: id,
    label: name,
    icon: icon?.data?.attributes?.url ? <Image src={icon.data.attributes.url} alt='icon' width={20} height={20} /> : null,
    children: qna_categories?.data?.map((c) => ({
      key: c.id,
      icon: c.attributes.icon?.data?.attributes?.url ? <Image src={c.attributes.icon?.data?.attributes?.url} alt='icon' width={20} height={20} /> : null,
      label: c.attributes.name
    })),
  })) || []
  return (
    <Menu navData={navData} />
  );
}
