
import element from 'virtual-element';
import assert from 'assert';
import { tree, render } from 'deku';
import trigger from 'compat-trigger-event';
import { Tabs, Tab } from '../src';

const fixture = document.createElement('div');

describe('Tabs', function() {
  before(function() {
    document.body.appendChild(fixture);
  });

  beforeEach(function() {
    fixture.innerHTML = '';
  });

  after(function() {
    document.body.appendChild(fixture);
  });

  describe('<Tabs />', function() {
    it('should render', function() {
      const el = mount(<Tabs />);
      const tabs = el.querySelector('.Tabs');
      assert(tabs);
    });
  });

  describe('<Tab />', function() {
    it('should render', function() {
      const el = mount(<Tab />);
      const tab = el.querySelector('.TabsTab');
      assert(tab);
    });
  });
});

function mount(n) {
  const app = tree(n);
  render(app, fixture);
  return fixture;
}
