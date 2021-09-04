export default class BaseComponent {
  state; //lưu trữ dữ liệu của component(tồn tại trong component), có thể thay đổi giá trị.
  props; //dữ liệu truyền từ bên ngoài vào component, chỉ có thể đọc, ko thay đổi giá trị

  constructor(props) {
    //phương thức khởi tạo
    this.props = props;
  }

  //dùng để hiển thị nội dung component lên màn hình
  //return HTMLElement

  // Doc Block -> comment để có thể hiển thị gợi ý
  /**
   * Hiển thị Nội dung Component lên màn hình
   *
   * @return {HTMLElement}
   */
  render() {}

  afterRender() {}

  /**
   * Thiết lập lại state của component và render lại component (khi state thay đổi, component render lại)
   */
  setState(newState) {
    this.state = newState;
    this.refresh();
  }

  /**
   * Thay đổi giao diện phù hợp với trạng thái hiện tại
   *
   */
  refresh() {
    let $element = this.render();

    if (this.$element) {
      this.$element.replaceWith($element);
    }
    this.$element = $element;
    this.afterRender();
    return this.$element;
  }
}
