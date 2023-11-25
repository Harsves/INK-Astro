import { storyblokInit, apiPlugin } from '@storyblok/js';
/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as renderComponent, u as unescapeHTML, h as addAttribute, j as renderHead, k as renderSlot } from '../astro_a6f8f24d.mjs';
import 'clsx';
import camelcase from 'camelcase';

const { storyblokApi } = storyblokInit({
            accessToken: "VDsIqgdaKldvjOOQa18nmwtt",
            use: [apiPlugin],
            apiOptions: {"region":""},
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

var P = Object.defineProperty, _ = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t, e) => (_(r, typeof t != "symbol" ? t + "" : t, e), e);
class z {
  constructor() {
    p(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), p(this, "getOptionsPage", (t, e = 25, o = 1) => ({
      ...t,
      per_page: e,
      page: o
    })), p(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), p(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), p(this, "range", (t = 0, e = t) => {
      const o = Math.abs(e - t) || 0, s = t < e ? 1 : -1;
      return this.arrayFrom(o, (a, n) => n * s + t);
    }), p(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), p(this, "flatMap", (t = [], e) => t.map(e).reduce((o, s) => [...o, ...s], [])), p(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, o = /[&<>"']/g, s = RegExp(o.source);
      return t && s.test(t) ? t.replace(o, (a) => e[a]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, o) {
    const s = [];
    for (const a in t) {
      if (!Object.prototype.hasOwnProperty.call(t, a))
        continue;
      const n = t[a], c = o ? "" : encodeURIComponent(a);
      let l;
      typeof n == "object" ? l = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : l = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), s.push(l);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us or cn
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", o = "api-us.storyblok.com", s = "app.storyblokchina.cn";
    switch (t) {
      case "us":
        return o;
      case "cn":
        return s;
      default:
        return e;
    }
  }
}
const U = function(r, t) {
  const e = {};
  for (const o in r) {
    const s = r[o];
    t.indexOf(o) > -1 && s !== null && (e[o] = s);
  }
  return e;
}, D = (r) => r === "email", q = () => ({
  singleTag: "hr"
}), F = () => ({
  tag: "blockquote"
}), B = () => ({
  tag: "ul"
}), J = (r) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: r.attrs
    }
  ]
}), K = () => ({
  singleTag: "br"
}), V = (r) => ({
  tag: `h${r.attrs.level}`
}), H = (r) => ({
  singleTag: [
    {
      tag: "img",
      attrs: U(r.attrs, ["src", "alt", "title"])
    }
  ]
}), G = () => ({
  tag: "li"
}), W = () => ({
  tag: "ol"
}), Y = () => ({
  tag: "p"
}), Q = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": r.attrs.name,
        emoji: r.attrs.emoji
      }
    }
  ]
}), X = () => ({
  tag: "b"
}), Z = () => ({
  tag: "strike"
}), ee = () => ({
  tag: "u"
}), te = () => ({
  tag: "strong"
}), re = () => ({
  tag: "code"
}), oe = () => ({
  tag: "i"
}), se = (r) => {
  const t = new z().escapeHTML, e = { ...r.attrs }, { linktype: o = "url" } = r.attrs;
  if (e.href && (e.href = t(r.attrs.href || "")), D(o) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const s in e.custom)
      e[s] = e.custom[s];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, ae = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ne = () => ({
  tag: "sub"
}), le = () => ({
  tag: "sup"
}), ie = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ce = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${r.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${r.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ue = {
  nodes: {
    horizontal_rule: q,
    blockquote: F,
    bullet_list: B,
    code_block: J,
    hard_break: K,
    heading: V,
    image: H,
    list_item: G,
    ordered_list: W,
    paragraph: Y,
    emoji: Q
  },
  marks: {
    bold: X,
    strike: Z,
    underline: ee,
    strong: te,
    code: re,
    italic: oe,
    link: se,
    styled: ae,
    subscript: ne,
    superscript: le,
    anchor: ie,
    highlight: ce,
    textStyle: ge
  }
}, pe = function(r) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, o = RegExp(e.source);
  return r && o.test(r) ? r.replace(e, (s) => t[s]) : r;
};
class fe {
  constructor(t) {
    p(this, "marks"), p(this, "nodes"), t || (t = ue), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: !1 }) {
    if (t && t.content && Array.isArray(t.content)) {
      let o = "";
      return t.content.forEach((s) => {
        o += this.renderNode(s);
      }), e.optimizeImages ? this.optimizeImages(o, e.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let o = 0, s = 0, a = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (a += `width="${e.width}" `, o = e.width), typeof e.height == "number" && e.height > 0 && (a += `height="${e.height}" `, s = e.height), (e.loading === "lazy" || e.loading === "eager") && (a += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (a += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), a.length > 0 && (t = t.replace(/<img/g, `<img ${a.trim()}`));
    const c = o > 0 || s > 0 || n.length > 0 ? `${o}x${s}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (l) => {
      var i, g;
      const f = l.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (f && f.length > 0) {
        const d = {
          srcset: (i = e.srcset) == null ? void 0 : i.map((u) => {
            if (typeof u == "number")
              return `//${f}/m/${u}x0${n} ${u}w`;
            if (typeof u == "object" && u.length === 2) {
              let m = 0, y = 0;
              return typeof u[0] == "number" && (m = u[0]), typeof u[1] == "number" && (y = u[1]), `//${f}/m/${m}x${y}${n} ${m}w`;
            }
          }).join(", "),
          sizes: (g = e.sizes) == null ? void 0 : g.map((u) => u).join(", ")
        };
        let h = "";
        return d.srcset && (h += `srcset="${d.srcset}" `), d.sizes && (h += `sizes="${d.sizes}" `), l.replace(/<img/g, `<img ${h.trim()}`);
      }
      return l;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderOpeningTag(a.tag));
    });
    const o = this.getMatchingNode(t);
    return o && o.tag && e.push(this.renderOpeningTag(o.tag)), t.content ? t.content.forEach((s) => {
      e.push(this.renderNode(s));
    }) : t.text ? e.push(pe(t.text)) : o && o.singleTag ? e.push(this.renderTag(o.singleTag, " /")) : o && o.html ? e.push(o.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), o && o.tag && e.push(this.renderClosingTag(o.tag)), t.marks && t.marks.slice(0).reverse().forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderClosingTag(a.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((o) => {
      if (o.constructor === String)
        return `<${o}${e}>`;
      {
        let s = `<${o.tag}`;
        if (o.attrs)
          for (const a in o.attrs) {
            const n = o.attrs[a];
            n !== null && (s += ` ${a}="${n}"`);
          }
        return `${s}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
const ke = (r) => {
  if (typeof r != "object" || typeof r._editable > "u")
    return {};
  const t = JSON.parse(
    r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
  );
  return t ? {
    "data-blok-c": JSON.stringify(t),
    "data-blok-uid": t.id + "-" + t.uid
  } : {};
};
let de;
const me = (r, t) => {
  r.addNode("blok", (e) => {
    let o = "";
    return e.attrs.body.forEach((s) => {
      o += t(s.component, s);
    }), {
      html: o
    };
  });
}, be = (r) => !r || !(r != null && r.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), ye = (r, t, e) => {
  let o = e || de;
  if (!o) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return be(r) ? "" : (t && (o = new fe(t.schema), t.resolver && me(o, t.resolver)), o.render(r));
};
function ve() {
  return globalThis.storyblokApiInstance || console.error("storyblokApiInstance has not been initialized correctly"), globalThis.storyblokApiInstance;
}
function Ie(r, t) {
  const e = globalThis.storyblokApiInstance.richTextResolver;
  if (!e) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return ye(r, t, e);
}

const $$Astro$9 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(ke(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Page.astro", void 0);

const $$Astro$8 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Feature;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok))} class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"> <h3 class="text-2xl text-[#1d243d] font-bold">${blok.name}</h3> </div>`;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Feature.astro", void 0);

const $$Astro$7 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Grid;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok), void 0, { "class": "astro-csxdcibj" })} data-astro-cid-csxdcibj> <div data-astro-cid-csxdcibj> ${blok.columns?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-csxdcibj": true })}`;
  })} </div> </div> `;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Grid.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { blok } = Astro2.props;
  const renderedDescription = Ie(blok.description);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok), void 0, { "class": "astro-v7etr6zh" })} data-astro-cid-v7etr6zh> <div class="hero" data-astro-cid-v7etr6zh> <h1 data-astro-cid-v7etr6zh>${blok.headline}</h1> <div data-astro-cid-v7etr6zh>${unescapeHTML(renderedDescription)}</div> </div> <img${addAttribute(blok.background?.filename, "src")}${addAttribute(blok.image?.alt, "alt")} data-astro-cid-v7etr6zh> </div> `;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Material = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Material;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok), void 0, { "class": "astro-rptza2b7" })} data-astro-cid-rptza2b7> <div class="materials" data-astro-cid-rptza2b7> <h2 data-astro-cid-rptza2b7>${blok.title}</h2> <p data-astro-cid-rptza2b7>${blok.description}</p> <a href="{blok.button}" data-astro-cid-rptza2b7>Choose sponsoring plan</a> </div> <img${addAttribute(blok.background?.filename, "src")}${addAttribute(blok.image?.alt, "alt")} data-astro-cid-rptza2b7> </div> `;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Material.astro", void 0);

const $$Astro$4 = createAstro();
const $$Financial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Financial;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok), void 0, { "class": "astro-lmrkyxn6" })} data-astro-cid-lmrkyxn6> <div class="financial" data-astro-cid-lmrkyxn6> <h2 data-astro-cid-lmrkyxn6>${blok.title}</h2> <p data-astro-cid-lmrkyxn6>${blok.description}</p> <a href="{blok.button}" data-astro-cid-lmrkyxn6>Choose sponsoring plan</a> </div> <img${addAttribute(blok.background?.filename, "src")}${addAttribute(blok.image?.alt, "alt")} data-astro-cid-lmrkyxn6> </div> `;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Financial.astro", void 0);

const $$Astro$3 = createAstro();
const $$Clothing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Clothing;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(ke(blok), void 0, { "class": "astro-ooil6l44" })} data-astro-cid-ooil6l44> <div class="clothing" data-astro-cid-ooil6l44> <h2 data-astro-cid-ooil6l44>${blok.title}</h2> <p data-astro-cid-ooil6l44>${blok.description}</p> <a href="{blok.button}" data-astro-cid-ooil6l44>Choose sponsoring plan</a> </div> <img${addAttribute(blok.background?.filename, "src")}${addAttribute(blok.image?.alt, "alt")} data-astro-cid-ooil6l44> </div> `;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/storyblok/Clothing.astro", void 0);

const components = {page: $$Page,feature: $$Feature,grid: $$Grid,hero: $$Hero,material: $$Material,financial: $$Financial,clothing: $$Clothing};

const $$Astro$2 = createAstro();
const $$StoryblokComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/node_modules/@storyblok/astro/StoryblokComponent.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>INK</title>${renderHead()}</head> <body class="container mx-auto" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft"
  });
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content })} ` })}`;
}, "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/pages/index.astro", void 0);

const $$file = "/Users/suusharsveld/Desktop/HVA/Github/INK-Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
