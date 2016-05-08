
/**
 * Module dependencies.
 */

import element from 'virtual-element';

/**
 * Exports.
 */

export default { render };

/**
 * Render.
 */

function render({ props }) {
  const { rel, href, label, active, target, onClick } = props;
  return (
    <li class="TabsTab" data-active={active}>
      <a class="TabsTab-link" href={href} rel={rel} target={target} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}
