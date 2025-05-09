import { Button } from "antd";
export default function Home() {
  return (
    <div className="flex gap-4 mt-4 px-4">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
