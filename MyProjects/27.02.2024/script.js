function HtmlElement(tagName, isSelfClosing, textContent, attributes, styles, innerElements) {
  this.tagName = tagName;
  this.isSelfClosing = isSelfClosing;
  this.textContent = textContent;
  this.attributes = attributes || {};
  this.styles = styles || {};
  this.innerElements = innerElements || [];

  this.setAttribute = function (name, value) {
    this.attributes[name] = value;
  };

  this.setStyle = function (name, value) {
    this.styles[name] = value;
  };

  this.addInnerElement = function (element) {
    this.innerElements.push(element);
  };

  this.addInnerElementAtStart = function (element) {
    this.innerElements.unshift(element);
  };

  this.getHtml = function () {
    let html = `<${this.tagName}`;

    for (const name in this.attributes) {
      html += ` ${name}="${this.attributes[name]}"`;
    }

    if (this.styles) {
      let styleString = "";
      for (const name in this.styles) {
        styleString += `${name}: ${this.styles[name]};`;
      }
      html += ` style="${styleString}"`;
    }

    if (this.textContent || this.innerElements.length) {
      html += ">";

      if (this.textContent) {
        html += this.textContent;
      }

      for (const innerElement of this.innerElements) {
        html += innerElement.getHtml();
      }

      html += `</${this.tagName}>`;
    } else if (this.isSelfClosing) {
      html += "/>";
    } else {
      html += `</${this.tagName}>`;
    }

    return html;
  };
}
