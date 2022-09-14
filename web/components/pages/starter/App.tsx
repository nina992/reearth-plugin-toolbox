import Button from "@web/components/atoms/Button";
import Line from "@web/components/atoms/Line";
import Panel from "@web/components/molecules/Panel";
import type { Theme } from "@web/theme/common";
import ThemeProvider from "@web/theme/provider";
import type { actHandles } from "@web/types";
import { postMsg } from "@web/utils/common";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";

const App = () => {
  const isActive = useRef(false);
  const [theme, setTheme] = useState("dark");
  const [overriddenTheme, setOverriddenTheme] = useState<Theme>();

  const onClose = useCallback(() => {}, []);

  const handleActiveChange = useCallback(
    (active: boolean) => {
      isActive.current = active;
      if (!isActive.current) {
        onClose();
      }
    },
    [onClose]
  );

  const onResize = useCallback((width: number, height: number) => {
    postMsg("resize", [width, height]);
  }, []);

  const actHandles: actHandles = useMemo(() => {
    return {
      setTheme: ({
        theme,
        overriddenTheme,
      }: {
        theme: string;
        overriddenTheme: Theme;
      }) => {
        console.log(theme, overriddenTheme);
        setTheme(theme);
        setOverriddenTheme(overriddenTheme);
      },
    };
  }, []);

  useEffect(() => {
    (globalThis as any).addEventListener("message", (msg: any) => {
      if (msg.source !== (globalThis as any).parent || !msg.data.act) return;
      actHandles[msg.data.act as keyof actHandles]?.(msg.data.payload);
    });
    postMsg("getTheme");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme} overriddenTheme={overriddenTheme}>
      <Panel
        title="Starter"
        icon="sun"
        onResize={onResize}
        onFoldChange={handleActiveChange}
      >
        <Button text="Primary" />
        <Line>
          <Button text="With Icon" icon="sun" extendWidth />
          <Button text="Secondary" buttonStyle="secondary" extendWidth />
        </Line>
        <Line>
          <Button text="ON" buttonStyle="secondary" extendWidth status="on" />
          <Button text="OFF" buttonStyle="secondary" extendWidth status="off" />
        </Line>
      </Panel>
    </ThemeProvider>
  );
};

export default App;
