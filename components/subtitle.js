const template = document.createElement('template');
template.innerHTML = `
    <style>
        span {
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            text-align: center;
            color: var(--primary);
            position: relative;
            padding: .5rem 1.875rem;
        }

        span:before, span:after {
            content: "";
            height: 1px;
            width: 1rem;
            display: block;
            position: absolute;
            background: var(--primary);
            top: 50%;
        }

        span:before {
            left: 0;
        }

        span:after {
            right: 0;
        }
    </style>
    <span>
        <slot></slot>
    </span>
`;

class SectionSubtitle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('section-subtitle', SectionSubtitle);
