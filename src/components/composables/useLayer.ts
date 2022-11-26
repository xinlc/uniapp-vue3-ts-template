import type { ComponentObjectPropsOptions } from 'vue';
import { ColorProp, CustomClassProp, CustomStyleProp } from './useProps';

export const useBaseProps = (propOverrides?: Partial<ComponentObjectPropsOptions>) => {
  const props = {
    // 自定义 class prop
    cc: CustomClassProp,
    // 自定义子组件 class prop
    ccc: CustomClassProp,
    // 自定义 style prop
    cs: CustomStyleProp,
    // 自定义子组件 style prop
    ccs: CustomStyleProp,
    color: ColorProp,
  };

  // 覆盖 props
  if (propOverrides) {
    Object.assign(props, propOverrides);
  }

  return props;
};
