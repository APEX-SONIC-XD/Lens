(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.id="__comment-widget-styles",o.appendChild(document.createTextNode("#__comment-widget-root{--cw-accent: #2f6df6;--cw-accent-hover: #2456c2;--cw-text: #1a1a1a;--cw-text-muted: #6b6b6b;--cw-bg: #ffffff;--cw-bg-subtle: #f4f5f7;--cw-border: #e3e4e8;--cw-shadow: 0 8px 24px rgba(15, 23, 42, .12), 0 2px 4px rgba(15, 23, 42, .06);--cw-radius: 8px;--cw-pin-size: 24px;--cw-z: 2147483000;position:fixed;inset:0;pointer-events:none;z-index:var(--cw-z);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:14px;line-height:1.45;color:var(--cw-text)}#__comment-widget-root *,#__comment-widget-root *:before,#__comment-widget-root *:after{box-sizing:border-box}.cw-layer{position:absolute;inset:0;pointer-events:none}.cw-mode-veil{position:absolute;inset:0;background:#2f6df60a;border:2px dashed rgba(47,109,246,.35);pointer-events:none;z-index:1}.cw-pin{position:absolute;width:var(--cw-pin-size);height:var(--cw-pin-size);margin-left:calc(var(--cw-pin-size) / -2);margin-top:calc(var(--cw-pin-size) * -1);pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--cw-accent);color:#fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px #0f172a40;border:2px solid #fff;transition:transform .12s ease,background .12s ease;font-size:11px;font-weight:600}.cw-pin>.cw-pin-label{transform:rotate(45deg)}.cw-pin:hover{background:var(--cw-accent-hover);transform:rotate(-45deg) scale(1.06)}.cw-pin.cw-pin--approximate{border-style:dashed;border-color:#f5b400;background:#f5b400}.cw-pin.cw-pin--active{background:var(--cw-accent-hover);transform:rotate(-45deg) scale(1.12)}.cw-pin.cw-pin--resolved{background:#94a3b8;border-color:#f1f5f9;opacity:.65}.cw-pin.cw-pin--resolved.cw-pin--active{background:#64748b;opacity:1}.cw-pin.cw-pin--draggable{cursor:grab}.cw-pin.cw-pin--dragging{cursor:grabbing!important;transform:rotate(-45deg) scale(1.18);z-index:2;box-shadow:0 6px 14px #0f172a52;transition:none}.cw-popover{position:absolute;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:320px;max-width:calc(100vw - 24px);max-height:60vh;overflow:hidden;display:flex;flex-direction:column}.cw-popover-header{padding:10px 12px;border-bottom:1px solid var(--cw-border);display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:var(--cw-text-muted)}.cw-popover-title{display:inline-flex;align-items:center;gap:6px}.cw-popover-header-actions{display:inline-flex;align-items:center;gap:4px}.cw-popover.cw-popover--resolved .cw-popover-header{background:var(--cw-bg-subtle)}.cw-status-pill{display:inline-flex;align-items:center;padding:2px 8px;border-radius:999px;background:#e2e8f0;color:#334155;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.cw-popover-body{overflow-y:auto;padding:6px 12px 12px}.cw-comment{padding:10px 0;border-bottom:1px solid var(--cw-border)}.cw-comment:last-child{border-bottom:none}.cw-comment-meta{display:flex;align-items:baseline;gap:8px;font-size:12px;color:var(--cw-text-muted);margin-bottom:4px}.cw-comment-meta>strong{color:var(--cw-text);font-weight:600}.cw-comment-body{white-space:pre-wrap;word-wrap:break-word}.cw-mention{display:inline-block;background:#2f6df61f;color:var(--cw-accent-hover);border-radius:4px;padding:0 4px;font-weight:600}.cw-comment-delete{margin-left:auto;opacity:0;transition:opacity .12s ease}.cw-comment:hover .cw-comment-delete,.cw-comment-delete:focus-visible{opacity:1}.cw-popover-empty{padding:16px 4px;text-align:center;color:var(--cw-text-muted);font-size:13px}.cw-popover-footer{padding:10px 12px 12px;border-top:1px solid var(--cw-border);background:var(--cw-bg-subtle);display:flex;flex-direction:column;gap:8px}.cw-popover.cw-popover--resolved .cw-popover-footer{background:#f8fafc}.cw-composer{position:absolute;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:320px;max-width:calc(100vw - 24px);padding:12px;display:flex;flex-direction:column;gap:10px}.cw-composer-textarea{width:100%;min-height:72px;resize:vertical;padding:8px 10px;border:1px solid var(--cw-border);border-radius:6px;font:inherit;color:inherit;background:var(--cw-bg);outline:none}.cw-composer-textarea:focus{border-color:var(--cw-accent);box-shadow:0 0 0 3px #2f6df626}.cw-composer-textarea--compact{min-height:56px}.cw-composer-actions{display:flex;justify-content:flex-end;gap:8px}.cw-error-banner{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:6px;padding:8px 10px;font-size:12px;line-height:1.4}.cw-error-banner--inline{margin-bottom:2px}.cw-toast{position:fixed;top:16px;left:16px;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);padding:10px 14px;max-width:360px;display:flex;flex-direction:column;gap:2px;font-size:13px}.cw-toast--error{border-color:#fecaca;background:#fef2f2;color:#991b1b}.cw-toast--error strong{color:#7f1d1d}.cw-btn{pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:6px 12px;border-radius:6px;border:1px solid var(--cw-border);background:var(--cw-bg);color:var(--cw-text);font:inherit;font-weight:500;cursor:pointer;transition:background .12s ease,border-color .12s ease}.cw-btn:hover{background:var(--cw-bg-subtle)}.cw-btn:disabled{opacity:.55;cursor:not-allowed}.cw-btn--primary{background:var(--cw-accent);border-color:var(--cw-accent);color:#fff}.cw-btn--primary:hover{background:var(--cw-accent-hover);border-color:var(--cw-accent-hover)}.cw-btn--ghost{border-color:transparent;background:transparent}.cw-btn--icon{width:28px;height:28px;padding:0}.cw-btn--small{padding:4px 10px;font-size:12px}.cw-filter-active{color:var(--cw-accent);background:#2f6df614;border-color:#2f6df64d}.cw-btn--danger{color:#b42318}.cw-btn--danger:hover{background:#fef2f2;border-color:#fecaca;color:#991b1b}.cw-btn--danger.cw-btn--small{background:#b42318;border-color:#b42318;color:#fff}.cw-btn--danger.cw-btn--small:hover{background:#991b1b;border-color:#991b1b}.cw-confirm-banner{margin:0 12px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:6px;padding:8px 10px;font-size:12px;display:flex;flex-direction:column;gap:8px}.cw-confirm-banner--inline{margin:6px 0 0}.cw-confirm-banner-actions{display:flex;justify-content:flex-end;gap:6px}.cw-toolbar-avatar{width:28px;height:28px;border-radius:999px;background:var(--cw-accent);color:#fff;border-color:var(--cw-accent);font-weight:600;font-size:12px}.cw-toolbar-avatar:hover{background:var(--cw-accent-hover);border-color:var(--cw-accent-hover)}.cw-mention-wrap{position:relative;width:100%}.cw-mention-dropdown{position:absolute;top:100%;left:0;right:0;margin:4px 0 0;padding:4px;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:6px;box-shadow:var(--cw-shadow);list-style:none;max-height:220px;overflow-y:auto;z-index:3}.cw-mention-option{padding:6px 8px;border-radius:4px;display:flex;flex-direction:column;cursor:pointer;font-size:13px}.cw-mention-option:hover,.cw-mention-option.cw-mention-option--active{background:var(--cw-bg-subtle)}.cw-mention-option-name{font-weight:600;color:var(--cw-text)}.cw-mention-option-email{font-size:11px;color:var(--cw-text-muted)}.cw-team-panel{width:420px;max-width:calc(100vw - 32px)}.cw-team-panel-header{display:flex;align-items:center;justify-content:space-between;gap:8px}.cw-team-panel-header .cw-modal-title{flex:1}.cw-team-add{display:grid;grid-template-columns:1fr 1.4fr auto;gap:8px;align-items:center}.cw-team-add .cw-input{min-width:0}.cw-team-list{list-style:none;padding:0;margin:0;max-height:280px;overflow-y:auto;border:1px solid var(--cw-border);border-radius:6px}.cw-team-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px;border-bottom:1px solid var(--cw-border)}.cw-team-row:last-child{border-bottom:none}.cw-team-row-meta{display:flex;flex-direction:column;min-width:0}.cw-team-row-meta>strong{font-size:13px}.cw-team-row-meta>span{font-size:12px;color:var(--cw-text-muted);overflow:hidden;text-overflow:ellipsis}.cw-team-empty{padding:16px;text-align:center;color:var(--cw-text-muted);font-size:13px}.cw-popover-signin-hint{display:flex;justify-content:flex-end}.cw-toolbar{position:fixed;bottom:20px;right:20px;pointer-events:auto;display:flex;align-items:center;gap:8px;padding:6px 6px 6px 14px;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:999px;box-shadow:var(--cw-shadow)}.cw-toolbar-label{font-size:13px;color:var(--cw-text-muted)}.cw-toolbar-toggle{border-radius:999px}.cw-toolbar-toggle--on{background:var(--cw-accent);color:#fff;border-color:var(--cw-accent)}.cw-toolbar-toggle--on:hover{background:var(--cw-accent-hover);border-color:var(--cw-accent-hover)}.cw-round-switcher{position:relative;display:flex;align-items:center}.cw-round-trigger{display:inline-flex;align-items:center;gap:6px;border-color:var(--cw-border);border-radius:999px}.cw-round-trigger--archived{color:#9a3412;background:#fff7ed;border-color:#fed7aa}.cw-round-trigger--archived:hover{background:#ffedd5}.cw-round-dot{width:6px;height:6px;border-radius:50%;background:#f97316}.cw-round-chevron{opacity:.55}.cw-round-backdrop{position:fixed;inset:0;pointer-events:auto;background:transparent;z-index:1}.cw-round-menu{position:absolute;bottom:calc(100% + 8px);left:0;z-index:2;margin:0;padding:4px;list-style:none;min-width:168px;max-height:280px;overflow-y:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:10px;box-shadow:var(--cw-shadow)}.cw-round-menu li{margin:0}.cw-round-option{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:7px 10px;border:none;background:transparent;border-radius:6px;font:inherit;font-size:13px;color:var(--cw-text);text-align:left;cursor:pointer}.cw-round-option:hover{background:var(--cw-bg-subtle)}.cw-round-option--current{color:var(--cw-accent);font-weight:600}.cw-round-check{color:var(--cw-accent)}.cw-round-banner{position:fixed;top:16px;left:50%;transform:translate(-50%);pointer-events:none;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:500;box-shadow:var(--cw-shadow)}.cw-modal-backdrop{position:fixed;inset:0;pointer-events:auto;background:#0f172a59;display:flex;align-items:center;justify-content:center;z-index:2}.cw-modal{background:var(--cw-bg);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:360px;max-width:calc(100vw - 32px);padding:20px;display:flex;flex-direction:column;gap:14px}.cw-modal-title{font-size:16px;font-weight:600;margin:0}.cw-modal-subtitle{margin:0;font-size:13px;color:var(--cw-text-muted)}.cw-field{display:flex;flex-direction:column;gap:4px}.cw-field-label{font-size:12px;color:var(--cw-text-muted)}.cw-input{padding:8px 10px;border:1px solid var(--cw-border);border-radius:6px;font:inherit;color:inherit;background:var(--cw-bg);outline:none}.cw-input:focus{border-color:var(--cw-accent);box-shadow:0 0 0 3px #2f6df626}.cw-input--code{font-size:20px;letter-spacing:8px;text-align:center;font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.cw-signin-actions{flex-wrap:wrap;gap:8px}.cw-signin-spacer{flex:1 1 auto}body.cw-mode-on,body.cw-mode-on *{cursor:crosshair!important}body.cw-mode-on #__comment-widget-root,body.cw-mode-on #__comment-widget-root *{cursor:auto!important}body.cw-mode-on #__comment-widget-root .cw-btn,body.cw-mode-on #__comment-widget-root .cw-pin{cursor:pointer!important}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var Ja = Object.defineProperty;
var Ga = (t, e, r) => e in t ? Ja(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var xe = (t, e, r) => Ga(t, typeof e != "symbol" ? e + "" : e, r);
/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ns(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const ge = {}, cr = [], Ft = () => {
}, To = () => !1, jn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ln = (t) => t.startsWith("onUpdate:"), Ze = Object.assign, Co = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, Ya = Object.prototype.hasOwnProperty, he = (t, e) => Ya.call(t, e), ne = Array.isArray, ur = (t) => Qr(t) === "[object Map]", Ro = (t) => Qr(t) === "[object Set]", ai = (t) => Qr(t) === "[object Date]", de = (t) => typeof t == "function", Se = (t) => typeof t == "string", ht = (t) => typeof t == "symbol", me = (t) => t !== null && typeof t == "object", Ao = (t) => (me(t) || de(t)) && de(t.then) && de(t.catch), Oo = Object.prototype.toString, Qr = (t) => Oo.call(t), Xa = (t) => Qr(t).slice(8, -1), xo = (t) => Qr(t) === "[object Object]", Ds = (t) => Se(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Pr = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((r) => e[r] || (e[r] = t(r)));
}, Qa = /-\w/g, Ye = Nn(
  (t) => t.replace(Qa, (e) => e.slice(1).toUpperCase())
), Za = /\B([A-Z])/g, zt = Nn(
  (t) => t.replace(Za, "-$1").toLowerCase()
), Po = Nn((t) => t.charAt(0).toUpperCase() + t.slice(1)), zn = Nn(
  (t) => t ? `on${Po(t)}` : ""
), ut = (t, e) => !Object.is(t, e), gn = (t, ...e) => {
  for (let r = 0; r < t.length; r++)
    t[r](...e);
}, $o = (t, e, r, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Us = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let li;
const Dn = () => li || (li = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wr(t) {
  if (ne(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const n = t[r], s = Se(n) ? nl(n) : wr(n);
      if (s)
        for (const i in s)
          e[i] = s[i];
    }
    return e;
  } else if (Se(t) || me(t))
    return t;
}
const el = /;(?![^(]*\))/g, tl = /:([^]+)/, rl = /\/\*[^]*?\*\//g;
function nl(t) {
  const e = {};
  return t.replace(rl, "").split(el).forEach((r) => {
    if (r) {
      const n = r.split(tl);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function Ge(t) {
  let e = "";
  if (Se(t))
    e = t;
  else if (ne(t))
    for (let r = 0; r < t.length; r++) {
      const n = Ge(t[r]);
      n && (e += n + " ");
    }
  else if (me(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
const sl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", il = /* @__PURE__ */ Ns(sl);
function Io(t) {
  return !!t || t === "";
}
function ol(t, e) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let n = 0; r && n < t.length; n++)
    r = Ms(t[n], e[n]);
  return r;
}
function Ms(t, e) {
  if (t === e) return !0;
  let r = ai(t), n = ai(e);
  if (r || n)
    return r && n ? t.getTime() === e.getTime() : !1;
  if (r = ht(t), n = ht(e), r || n)
    return t === e;
  if (r = ne(t), n = ne(e), r || n)
    return r && n ? ol(t, e) : !1;
  if (r = me(t), n = me(e), r || n) {
    if (!r || !n)
      return !1;
    const s = Object.keys(t).length, i = Object.keys(e).length;
    if (s !== i)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !Ms(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const jo = (t) => !!(t && t.__v_isRef === !0), te = (t) => Se(t) ? t : t == null ? "" : ne(t) || me(t) && (t.toString === Oo || !de(t.toString)) ? jo(t) ? te(t.value) : JSON.stringify(t, Lo, 2) : String(t), Lo = (t, e) => jo(e) ? Lo(t, e.value) : ur(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [n, s], i) => (r[Jn(n, i) + " =>"] = s, r),
    {}
  )
} : Ro(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => Jn(r))
} : ht(e) ? Jn(e) : me(e) && !ne(e) && !xo(e) ? String(e) : e, Jn = (t, e = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t
  );
};
/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Oe;
class al {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, r;
      if (this.scopes)
        for (e = 0, r = this.scopes.length; e < r; e++)
          this.scopes[e].pause();
      for (e = 0, r = this.effects.length; e < r; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, r;
      if (this.scopes)
        for (e = 0, r = this.scopes.length; e < r; e++)
          this.scopes[e].resume();
      for (e = 0, r = this.effects.length; e < r; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const r = Oe;
      try {
        return Oe = this, e();
      } finally {
        Oe = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Oe, Oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Oe === this)
        Oe = this.prevScope;
      else {
        let e = Oe;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ll() {
  return Oe;
}
let pe;
const Gn = /* @__PURE__ */ new WeakSet();
class No {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Gn.has(this) && (Gn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Uo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ci(this), Mo(this);
    const e = pe, r = Xe;
    pe = this, Xe = !0;
    try {
      return this.fn();
    } finally {
      Bo(this), pe = e, Xe = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        qs(e);
      this.deps = this.depsTail = void 0, ci(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Gn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fs(this) && this.run();
  }
  get dirty() {
    return fs(this);
  }
}
let Do = 0, $r, Ir;
function Uo(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Ir, Ir = t;
    return;
  }
  t.next = $r, $r = t;
}
function Bs() {
  Do++;
}
function Hs() {
  if (--Do > 0)
    return;
  if (Ir) {
    let e = Ir;
    for (Ir = void 0; e; ) {
      const r = e.next;
      e.next = void 0, e.flags &= -9, e = r;
    }
  }
  let t;
  for (; $r; ) {
    let e = $r;
    for ($r = void 0; e; ) {
      const r = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = r;
    }
  }
  if (t) throw t;
}
function Mo(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Bo(t) {
  let e, r = t.depsTail, n = r;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === r && (r = s), qs(n), cl(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = s;
  }
  t.deps = e, t.depsTail = r;
}
function fs(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ho(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ho(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Hr) || (t.globalVersion = Hr, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !fs(t))))
    return;
  t.flags |= 2;
  const e = t.dep, r = pe, n = Xe;
  pe = t, Xe = !0;
  try {
    Mo(t);
    const s = t.fn(t._value);
    (e.version === 0 || ut(s, t._value)) && (t.flags |= 128, t._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    pe = r, Xe = n, Bo(t), t.flags &= -3;
  }
}
function qs(t, e = !1) {
  const { dep: r, prevSub: n, nextSub: s } = t;
  if (n && (n.nextSub = s, t.prevSub = void 0), s && (s.prevSub = n, t.nextSub = void 0), r.subs === t && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      qs(i, !0);
  }
  !e && !--r.sc && r.map && r.map.delete(r.key);
}
function cl(t) {
  const { prevDep: e, nextDep: r } = t;
  e && (e.nextDep = r, t.prevDep = void 0), r && (r.prevDep = e, t.nextDep = void 0);
}
let Xe = !0;
const qo = [];
function At() {
  qo.push(Xe), Xe = !1;
}
function Ot() {
  const t = qo.pop();
  Xe = t === void 0 ? !0 : t;
}
function ci(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const r = pe;
    pe = void 0;
    try {
      e();
    } finally {
      pe = r;
    }
  }
}
let Hr = 0;
class ul {
  constructor(e, r) {
    this.sub = e, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!pe || !Xe || pe === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== pe)
      r = this.activeLink = new ul(pe, this), pe.deps ? (r.prevDep = pe.depsTail, pe.depsTail.nextDep = r, pe.depsTail = r) : pe.deps = pe.depsTail = r, Fo(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = pe.depsTail, r.nextDep = void 0, pe.depsTail.nextDep = r, pe.depsTail = r, pe.deps === r && (pe.deps = n);
    }
    return r;
  }
  trigger(e) {
    this.version++, Hr++, this.notify(e);
  }
  notify(e) {
    Bs();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function Fo(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        Fo(n);
    }
    const r = t.dep.subs;
    r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
  }
}
const ps = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), qr = /* @__PURE__ */ Symbol(
  ""
);
function Pe(t, e, r) {
  if (Xe && pe) {
    let n = ps.get(t);
    n || ps.set(t, n = /* @__PURE__ */ new Map());
    let s = n.get(r);
    s || (n.set(r, s = new Fs()), s.map = n, s.key = r), s.track();
  }
}
function wt(t, e, r, n, s, i) {
  const o = ps.get(t);
  if (!o) {
    Hr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Bs(), e === "clear")
    o.forEach(a);
  else {
    const l = ne(t), c = l && Ds(r);
    if (l && r === "length") {
      const u = Number(n);
      o.forEach((h, d) => {
        (d === "length" || d === qr || !ht(d) && d >= u) && a(h);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && a(o.get(r)), c && a(o.get(qr)), e) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(Wt)), ur(t) && a(o.get(gs)));
          break;
        case "delete":
          l || (a(o.get(Wt)), ur(t) && a(o.get(gs)));
          break;
        case "set":
          ur(t) && a(o.get(Wt));
          break;
      }
  }
  Hs();
}
function Yt(t) {
  const e = /* @__PURE__ */ ce(t);
  return e === t ? e : (Pe(e, "iterate", qr), /* @__PURE__ */ We(t) ? e : e.map(Qe));
}
function Un(t) {
  return Pe(t = /* @__PURE__ */ ce(t), "iterate", qr), t;
}
function at(t, e) {
  return /* @__PURE__ */ _t(t) ? gr(/* @__PURE__ */ Kt(t) ? Qe(e) : e) : Qe(e);
}
const hl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (t) => at(this, t));
  },
  concat(...t) {
    return Yt(this).concat(
      ...t.map((e) => ne(e) ? Yt(e) : e)
    );
  },
  entries() {
    return Yn(this, "entries", (t) => (t[1] = at(this, t[1]), t));
  },
  every(t, e) {
    return ft(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ft(
      this,
      "filter",
      t,
      e,
      (r) => r.map((n) => at(this, n)),
      arguments
    );
  },
  find(t, e) {
    return ft(
      this,
      "find",
      t,
      e,
      (r) => at(this, r),
      arguments
    );
  },
  findIndex(t, e) {
    return ft(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ft(
      this,
      "findLast",
      t,
      e,
      (r) => at(this, r),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ft(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ft(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Xn(this, "includes", t);
  },
  indexOf(...t) {
    return Xn(this, "indexOf", t);
  },
  join(t) {
    return Yt(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Xn(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ft(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Er(this, "pop");
  },
  push(...t) {
    return Er(this, "push", t);
  },
  reduce(t, ...e) {
    return ui(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ui(this, "reduceRight", t, e);
  },
  shift() {
    return Er(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ft(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Er(this, "splice", t);
  },
  toReversed() {
    return Yt(this).toReversed();
  },
  toSorted(t) {
    return Yt(this).toSorted(t);
  },
  toSpliced(...t) {
    return Yt(this).toSpliced(...t);
  },
  unshift(...t) {
    return Er(this, "unshift", t);
  },
  values() {
    return Yn(this, "values", (t) => at(this, t));
  }
};
function Yn(t, e, r) {
  const n = Un(t), s = n[e]();
  return n !== t && !/* @__PURE__ */ We(t) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = r(i.value)), i;
  }), s;
}
const dl = Array.prototype;
function ft(t, e, r, n, s, i) {
  const o = Un(t), a = o !== t && !/* @__PURE__ */ We(t), l = o[e];
  if (l !== dl[e]) {
    const h = l.apply(t, i);
    return a ? Qe(h) : h;
  }
  let c = r;
  o !== t && (a ? c = function(h, d) {
    return r.call(this, at(t, h), d, t);
  } : r.length > 2 && (c = function(h, d) {
    return r.call(this, h, d, t);
  }));
  const u = l.call(o, c, n);
  return a && s ? s(u) : u;
}
function ui(t, e, r, n) {
  const s = Un(t), i = s !== t && !/* @__PURE__ */ We(t);
  let o = r, a = !1;
  s !== t && (i ? (a = n.length === 0, o = function(c, u, h) {
    return a && (a = !1, c = at(t, c)), r.call(this, c, at(t, u), h, t);
  }) : r.length > 3 && (o = function(c, u, h) {
    return r.call(this, c, u, h, t);
  }));
  const l = s[e](o, ...n);
  return a ? at(t, l) : l;
}
function Xn(t, e, r) {
  const n = /* @__PURE__ */ ce(t);
  Pe(n, "iterate", qr);
  const s = n[e](...r);
  return (s === -1 || s === !1) && /* @__PURE__ */ Vs(r[0]) ? (r[0] = /* @__PURE__ */ ce(r[0]), n[e](...r)) : s;
}
function Er(t, e, r = []) {
  At(), Bs();
  const n = (/* @__PURE__ */ ce(t))[e].apply(t, r);
  return Hs(), Ot(), n;
}
const fl = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), Wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ht)
);
function pl(t) {
  ht(t) || (t = String(t));
  const e = /* @__PURE__ */ ce(this);
  return Pe(e, "has", t), e.hasOwnProperty(t);
}
class Ko {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, n) {
    if (r === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return n === (s ? i ? El : Go : i ? Jo : zo).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = ne(e);
    if (!s) {
      let l;
      if (o && (l = hl[r]))
        return l;
      if (r === "hasOwnProperty")
        return pl;
    }
    const a = Reflect.get(
      e,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ie(e) ? e : n
    );
    if ((ht(r) ? Wo.has(r) : fl(r)) || (s || Pe(e, "get", r), i))
      return a;
    if (/* @__PURE__ */ Ie(a)) {
      const l = o && Ds(r) ? a : a.value;
      return s && me(l) ? /* @__PURE__ */ vs(l) : l;
    }
    return me(a) ? s ? /* @__PURE__ */ vs(a) : /* @__PURE__ */ hr(a) : a;
  }
}
class Vo extends Ko {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, n, s) {
    let i = e[r];
    const o = ne(e) && Ds(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ _t(i);
      if (!/* @__PURE__ */ We(n) && !/* @__PURE__ */ _t(n) && (i = /* @__PURE__ */ ce(i), n = /* @__PURE__ */ ce(n)), !o && /* @__PURE__ */ Ie(i) && !/* @__PURE__ */ Ie(n))
        return c || (i.value = n), !0;
    }
    const a = o ? Number(r) < e.length : he(e, r), l = Reflect.set(
      e,
      r,
      n,
      /* @__PURE__ */ Ie(e) ? e : s
    );
    return e === /* @__PURE__ */ ce(s) && (a ? ut(n, i) && wt(e, "set", r, n) : wt(e, "add", r, n)), l;
  }
  deleteProperty(e, r) {
    const n = he(e, r);
    e[r];
    const s = Reflect.deleteProperty(e, r);
    return s && n && wt(e, "delete", r, void 0), s;
  }
  has(e, r) {
    const n = Reflect.has(e, r);
    return (!ht(r) || !Wo.has(r)) && Pe(e, "has", r), n;
  }
  ownKeys(e) {
    return Pe(
      e,
      "iterate",
      ne(e) ? "length" : Wt
    ), Reflect.ownKeys(e);
  }
}
class gl extends Ko {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, r) {
    return !0;
  }
  deleteProperty(e, r) {
    return !0;
  }
}
const ml = /* @__PURE__ */ new Vo(), vl = /* @__PURE__ */ new gl(), yl = /* @__PURE__ */ new Vo(!0);
const ms = (t) => t, nn = (t) => Reflect.getPrototypeOf(t);
function wl(t, e, r) {
  return function(...n) {
    const s = this.__v_raw, i = /* @__PURE__ */ ce(s), o = ur(i), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = s[t](...n), u = r ? ms : e ? gr : Qe;
    return !e && Pe(
      i,
      "iterate",
      l ? gs : Wt
    ), Ze(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: d } = c.next();
          return d ? { value: h, done: d } : {
            value: a ? [u(h[0]), u(h[1])] : u(h),
            done: d
          };
        }
      }
    );
  };
}
function sn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function bl(t, e) {
  const r = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), a = /* @__PURE__ */ ce(s);
      t || (ut(s, a) && Pe(o, "get", s), Pe(o, "get", a));
      const { has: l } = nn(o), c = e ? ms : t ? gr : Qe;
      if (l.call(o, s))
        return c(i.get(s));
      if (l.call(o, a))
        return c(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !t && Pe(/* @__PURE__ */ ce(s), "iterate", Wt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), a = /* @__PURE__ */ ce(s);
      return t || (ut(s, a) && Pe(o, "has", s), Pe(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a);
    },
    forEach(s, i) {
      const o = this, a = o.__v_raw, l = /* @__PURE__ */ ce(a), c = e ? ms : t ? gr : Qe;
      return !t && Pe(l, "iterate", Wt), a.forEach((u, h) => s.call(i, c(u), c(h), o));
    }
  };
  return Ze(
    r,
    t ? {
      add: sn("add"),
      set: sn("set"),
      delete: sn("delete"),
      clear: sn("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ce(this), o = nn(i), a = /* @__PURE__ */ ce(s), l = !e && !/* @__PURE__ */ We(s) && !/* @__PURE__ */ _t(s) ? a : s;
        return o.has.call(i, l) || ut(s, l) && o.has.call(i, s) || ut(a, l) && o.has.call(i, a) || (i.add(l), wt(i, "add", l, l)), this;
      },
      set(s, i) {
        !e && !/* @__PURE__ */ We(i) && !/* @__PURE__ */ _t(i) && (i = /* @__PURE__ */ ce(i));
        const o = /* @__PURE__ */ ce(this), { has: a, get: l } = nn(o);
        let c = a.call(o, s);
        c || (s = /* @__PURE__ */ ce(s), c = a.call(o, s));
        const u = l.call(o, s);
        return o.set(s, i), c ? ut(i, u) && wt(o, "set", s, i) : wt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ce(this), { has: o, get: a } = nn(i);
        let l = o.call(i, s);
        l || (s = /* @__PURE__ */ ce(s), l = o.call(i, s)), a && a.call(i, s);
        const c = i.delete(s);
        return l && wt(i, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), i = s.size !== 0, o = s.clear();
        return i && wt(
          s,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    r[s] = wl(s, t, e);
  }), r;
}
function Ws(t, e) {
  const r = bl(t, e);
  return (n, s, i) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? n : Reflect.get(
    he(r, s) && s in n ? r : n,
    s,
    i
  );
}
const _l = {
  get: /* @__PURE__ */ Ws(!1, !1)
}, Sl = {
  get: /* @__PURE__ */ Ws(!1, !0)
}, kl = {
  get: /* @__PURE__ */ Ws(!0, !1)
};
const zo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap();
function Tl(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Cl(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Tl(Xa(t));
}
// @__NO_SIDE_EFFECTS__
function hr(t) {
  return /* @__PURE__ */ _t(t) ? t : Ks(
    t,
    !1,
    ml,
    _l,
    zo
  );
}
// @__NO_SIDE_EFFECTS__
function Rl(t) {
  return Ks(
    t,
    !1,
    yl,
    Sl,
    Jo
  );
}
// @__NO_SIDE_EFFECTS__
function vs(t) {
  return Ks(
    t,
    !0,
    vl,
    kl,
    Go
  );
}
function Ks(t, e, r, n, s) {
  if (!me(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = Cl(t);
  if (i === 0)
    return t;
  const o = s.get(t);
  if (o)
    return o;
  const a = new Proxy(
    t,
    i === 2 ? n : r
  );
  return s.set(t, a), a;
}
// @__NO_SIDE_EFFECTS__
function Kt(t) {
  return /* @__PURE__ */ _t(t) ? /* @__PURE__ */ Kt(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _t(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function We(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vs(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ ce(e) : t;
}
function Al(t) {
  return !he(t, "__v_skip") && Object.isExtensible(t) && $o(t, "__v_skip", !0), t;
}
const Qe = (t) => me(t) ? /* @__PURE__ */ hr(t) : t, gr = (t) => me(t) ? /* @__PURE__ */ vs(t) : t;
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Y(t) {
  return Yo(t, !1);
}
// @__NO_SIDE_EFFECTS__
function ys(t) {
  return Yo(t, !0);
}
function Yo(t, e) {
  return /* @__PURE__ */ Ie(t) ? t : new Ol(t, e);
}
class Ol {
  constructor(e, r) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? e : /* @__PURE__ */ ce(e), this._value = r ? e : Qe(e), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ We(e) || /* @__PURE__ */ _t(e);
    e = n ? e : /* @__PURE__ */ ce(e), ut(e, r) && (this._rawValue = e, this._value = n ? e : Qe(e), this.dep.trigger());
  }
}
function ye(t) {
  return /* @__PURE__ */ Ie(t) ? t.value : t;
}
const xl = {
  get: (t, e, r) => e === "__v_raw" ? t : ye(Reflect.get(t, e, r)),
  set: (t, e, r, n) => {
    const s = t[e];
    return /* @__PURE__ */ Ie(s) && !/* @__PURE__ */ Ie(r) ? (s.value = r, !0) : Reflect.set(t, e, r, n);
  }
};
function Xo(t) {
  return /* @__PURE__ */ Kt(t) ? t : new Proxy(t, xl);
}
class Pl {
  constructor(e, r, n) {
    this.fn = e, this.setter = r, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return Uo(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ho(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function $l(t, e, r = !1) {
  let n, s;
  return de(t) ? n = t : (n = t.get, s = t.set), new Pl(n, s, r);
}
const on = {}, bn = /* @__PURE__ */ new WeakMap();
let Bt;
function Il(t, e = !1, r = Bt) {
  if (r) {
    let n = bn.get(r);
    n || bn.set(r, n = []), n.push(t);
  }
}
function jl(t, e, r = ge) {
  const { immediate: n, deep: s, once: i, scheduler: o, augmentJob: a, call: l } = r, c = (C) => s ? C : /* @__PURE__ */ We(C) || s === !1 || s === 0 ? bt(C, 1) : bt(C);
  let u, h, d, f, g = !1, v = !1;
  if (/* @__PURE__ */ Ie(t) ? (h = () => t.value, g = /* @__PURE__ */ We(t)) : /* @__PURE__ */ Kt(t) ? (h = () => c(t), g = !0) : ne(t) ? (v = !0, g = t.some((C) => /* @__PURE__ */ Kt(C) || /* @__PURE__ */ We(C)), h = () => t.map((C) => {
    if (/* @__PURE__ */ Ie(C))
      return C.value;
    if (/* @__PURE__ */ Kt(C))
      return c(C);
    if (de(C))
      return l ? l(C, 2) : C();
  })) : de(t) ? e ? h = l ? () => l(t, 2) : t : h = () => {
    if (d) {
      At();
      try {
        d();
      } finally {
        Ot();
      }
    }
    const C = Bt;
    Bt = u;
    try {
      return l ? l(t, 3, [f]) : t(f);
    } finally {
      Bt = C;
    }
  } : h = Ft, e && s) {
    const C = h, H = s === !0 ? 1 / 0 : s;
    h = () => bt(C(), H);
  }
  const y = ll(), b = () => {
    u.stop(), y && y.active && Co(y.effects, u);
  };
  if (i && e) {
    const C = e;
    e = (...H) => {
      C(...H), b();
    };
  }
  let w = v ? new Array(t.length).fill(on) : on;
  const S = (C) => {
    if (!(!(u.flags & 1) || !u.dirty && !C))
      if (e) {
        const H = u.run();
        if (s || g || (v ? H.some((j, E) => ut(j, w[E])) : ut(H, w))) {
          d && d();
          const j = Bt;
          Bt = u;
          try {
            const E = [
              H,
              // pass undefined as the old value when it's changed for the first time
              w === on ? void 0 : v && w[0] === on ? [] : w,
              f
            ];
            w = H, l ? l(e, 3, E) : (
              // @ts-expect-error
              e(...E)
            );
          } finally {
            Bt = j;
          }
        }
      } else
        u.run();
  };
  return a && a(S), u = new No(h), u.scheduler = o ? () => o(S, !1) : S, f = (C) => Il(C, !1, u), d = u.onStop = () => {
    const C = bn.get(u);
    if (C) {
      if (l)
        l(C, 4);
      else
        for (const H of C) H();
      bn.delete(u);
    }
  }, e ? n ? S(!0) : w = u.run() : o ? o(S.bind(null, !0), !0) : u.run(), b.pause = u.pause.bind(u), b.resume = u.resume.bind(u), b.stop = b, b;
}
function bt(t, e = 1 / 0, r) {
  if (e <= 0 || !me(t) || t.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(t) || 0) >= e))
    return t;
  if (r.set(t, e), e--, /* @__PURE__ */ Ie(t))
    bt(t.value, e, r);
  else if (ne(t))
    for (let n = 0; n < t.length; n++)
      bt(t[n], e, r);
  else if (Ro(t) || ur(t))
    t.forEach((n) => {
      bt(n, e, r);
    });
  else if (xo(t)) {
    for (const n in t)
      bt(t[n], e, r);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && bt(t[n], e, r);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Zr(t, e, r, n) {
  try {
    return n ? t(...n) : t();
  } catch (s) {
    Mn(s, e, r);
  }
}
function St(t, e, r, n) {
  if (de(t)) {
    const s = Zr(t, e, r, n);
    return s && Ao(s) && s.catch((i) => {
      Mn(i, e, r);
    }), s;
  }
  if (ne(t)) {
    const s = [];
    for (let i = 0; i < t.length; i++)
      s.push(St(t[i], e, r, n));
    return s;
  }
}
function Mn(t, e, r, n = !0) {
  const s = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || ge;
  if (e) {
    let a = e.parent;
    const l = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](t, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      At(), Zr(i, null, 10, [
        t,
        l,
        c
      ]), Ot();
      return;
    }
  }
  Ll(t, r, s, n, o);
}
function Ll(t, e, r, n = !0, s = !1) {
  if (s)
    throw t;
  console.error(t);
}
const $e = [];
let it = -1;
const dr = [];
let Tt = null, rr = 0;
const Qo = /* @__PURE__ */ Promise.resolve();
let _n = null;
function zs(t) {
  const e = _n || Qo;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Nl(t) {
  let e = it + 1, r = $e.length;
  for (; e < r; ) {
    const n = e + r >>> 1, s = $e[n], i = Fr(s);
    i < t || i === t && s.flags & 2 ? e = n + 1 : r = n;
  }
  return e;
}
function Js(t) {
  if (!(t.flags & 1)) {
    const e = Fr(t), r = $e[$e.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Fr(r) ? $e.push(t) : $e.splice(Nl(e), 0, t), t.flags |= 1, Zo();
  }
}
function Zo() {
  _n || (_n = Qo.then(ta));
}
function Dl(t) {
  ne(t) ? dr.push(...t) : Tt && t.id === -1 ? Tt.splice(rr + 1, 0, t) : t.flags & 1 || (dr.push(t), t.flags |= 1), Zo();
}
function hi(t, e, r = it + 1) {
  for (; r < $e.length; r++) {
    const n = $e[r];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid)
        continue;
      $e.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ea(t) {
  if (dr.length) {
    const e = [...new Set(dr)].sort(
      (r, n) => Fr(r) - Fr(n)
    );
    if (dr.length = 0, Tt) {
      Tt.push(...e);
      return;
    }
    for (Tt = e, rr = 0; rr < Tt.length; rr++) {
      const r = Tt[rr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Tt = null, rr = 0;
  }
}
const Fr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ta(t) {
  try {
    for (it = 0; it < $e.length; it++) {
      const e = $e[it];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Zr(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; it < $e.length; it++) {
      const e = $e[it];
      e && (e.flags &= -2);
    }
    it = -1, $e.length = 0, ea(), _n = null, ($e.length || dr.length) && ta();
  }
}
let Fe = null, ra = null;
function Sn(t) {
  const e = Fe;
  return Fe = t, ra = t && t.type.__scopeId || null, e;
}
function Ul(t, e = Fe, r) {
  if (!e || t._n)
    return t;
  const n = (...s) => {
    n._d && yi(-1);
    const i = Sn(e);
    let o;
    try {
      o = t(...s);
    } finally {
      Sn(i), n._d && yi(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function kn(t, e) {
  if (Fe === null)
    return t;
  const r = qn(Fe), n = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [i, o, a, l = ge] = e[s];
    i && (de(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && bt(o), n.push({
      dir: i,
      instance: r,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return t;
}
function Lt(t, e, r, n) {
  const s = t.dirs, i = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[n];
    l && (At(), St(l, r, 8, [
      t.el,
      a,
      t,
      e
    ]), Ot());
  }
}
function Ml(t, e, r = !1) {
  const n = Ec();
  if (n || fr) {
    let s = fr ? fr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (s && t in s)
      return s[t];
    if (arguments.length > 1)
      return r && de(e) ? e.call(n && n.proxy) : e;
  }
}
const Bl = /* @__PURE__ */ Symbol.for("v-scx"), Hl = () => Ml(Bl);
function kt(t, e, r) {
  return ql(t, e, r);
}
function ql(t, e, r = ge) {
  const { immediate: n, deep: s, flush: i, once: o } = r, a = Ze({}, r), l = e && n || !e && i !== "post";
  let c;
  if (Kr) {
    if (i === "sync") {
      const f = Hl();
      c = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {
      };
      return f.stop = Ft, f.resume = Ft, f.pause = Ft, f;
    }
  }
  const u = Pt;
  a.call = (f, g, v) => St(f, u, g, v);
  let h = !1;
  i === "post" ? a.scheduler = (f) => {
    Ne(f, u && u.suspense);
  } : i !== "sync" && (h = !0, a.scheduler = (f, g) => {
    g ? f() : Js(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), h && (f.flags |= 2, u && (f.id = u.uid, f.i = u));
  };
  const d = jl(t, e, a);
  return Kr && (c ? c.push(d) : l && d()), d;
}
const Fl = /* @__PURE__ */ Symbol("_vte"), Wl = (t) => t.__isTeleport, Kl = /* @__PURE__ */ Symbol("_leaveCb");
function Gs(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Gs(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Jt(t, e) {
  return de(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ze({ name: t.name }, e, { setup: t })
  ) : t;
}
function Vl(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function di(t, e) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(t, e)) && !r.configurable);
}
const En = /* @__PURE__ */ new WeakMap();
function jr(t, e, r, n, s = !1) {
  if (ne(t)) {
    t.forEach(
      (v, y) => jr(
        v,
        e && (ne(e) ? e[y] : e),
        r,
        n,
        s
      )
    );
    return;
  }
  if (Lr(n) && !s) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && jr(t, e, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? qn(n.component) : n.el, o = s ? null : i, { i: a, r: l } = t, c = e && e.r, u = a.refs === ge ? a.refs = {} : a.refs, h = a.setupState, d = /* @__PURE__ */ ce(h), f = h === ge ? To : (v) => di(u, v) ? !1 : he(d, v), g = (v, y) => !(y && di(u, y));
  if (c != null && c !== l) {
    if (fi(e), Se(c))
      u[c] = null, f(c) && (h[c] = null);
    else if (/* @__PURE__ */ Ie(c)) {
      const v = e;
      g(c, v.k) && (c.value = null), v.k && (u[v.k] = null);
    }
  }
  if (de(l))
    Zr(l, a, 12, [o, u]);
  else {
    const v = Se(l), y = /* @__PURE__ */ Ie(l);
    if (v || y) {
      const b = () => {
        if (t.f) {
          const w = v ? f(l) ? h[l] : u[l] : g() || !t.k ? l.value : u[t.k];
          if (s)
            ne(w) && Co(w, i);
          else if (ne(w))
            w.includes(i) || w.push(i);
          else if (v)
            u[l] = [i], f(l) && (h[l] = u[l]);
          else {
            const S = [i];
            g(l, t.k) && (l.value = S), t.k && (u[t.k] = S);
          }
        } else v ? (u[l] = o, f(l) && (h[l] = o)) : y && (g(l, t.k) && (l.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const w = () => {
          b(), En.delete(t);
        };
        w.id = -1, En.set(t, w), Ne(w, r);
      } else
        fi(t), b();
    }
  }
}
function fi(t) {
  const e = En.get(t);
  e && (e.flags |= 8, En.delete(t));
}
Dn().requestIdleCallback;
Dn().cancelIdleCallback;
const Lr = (t) => !!t.type.__asyncLoader, zl = (t) => t.type.__isKeepAlive;
function Jl(t, e, r = Pt, n = !1) {
  if (r) {
    const s = r[t] || (r[t] = []), i = e.__weh || (e.__weh = (...o) => {
      At();
      const a = ei(r), l = St(e, r, t, o);
      return a(), Ot(), l;
    });
    return n ? s.unshift(i) : s.push(i), i;
  }
}
const na = (t) => (e, r = Pt) => {
  (!Kr || t === "sp") && Jl(t, (...n) => e(...n), r);
}, Ys = na("m"), br = na(
  "bum"
), Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function mr(t, e, r, n) {
  let s;
  const i = r, o = ne(t);
  if (o || Se(t)) {
    const a = o && /* @__PURE__ */ Kt(t);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ We(t), c = /* @__PURE__ */ _t(t), t = Un(t)), s = new Array(t.length);
    for (let u = 0, h = t.length; u < h; u++)
      s[u] = e(
        l ? c ? gr(Qe(t[u])) : Qe(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let a = 0; a < t; a++)
      s[a] = e(a + 1, a, void 0, i);
  } else if (me(t))
    if (t[Symbol.iterator])
      s = Array.from(
        t,
        (a, l) => e(a, l, void 0, i)
      );
    else {
      const a = Object.keys(t);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = e(t[u], u, l, i);
      }
    }
  else
    s = [];
  return s;
}
const ws = (t) => t ? _a(t) ? qn(t) : ws(t.parent) : null, Nr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => ws(t.parent),
    $root: (t) => ws(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => t.type,
    $forceUpdate: (t) => t.f || (t.f = () => {
      Js(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = zs.bind(t.proxy)),
    $watch: (t) => Ft
  })
), Qn = (t, e) => t !== ge && !t.__isScriptSetup && he(t, e), Yl = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: s, props: i, accessCache: o, type: a, appContext: l } = t;
    if (e[0] !== "$") {
      const d = o[e];
      if (d !== void 0)
        switch (d) {
          case 1:
            return n[e];
          case 2:
            return s[e];
          case 4:
            return r[e];
          case 3:
            return i[e];
        }
      else {
        if (Qn(n, e))
          return o[e] = 1, n[e];
        if (he(i, e))
          return o[e] = 3, i[e];
        if (r !== ge && he(r, e))
          return o[e] = 4, r[e];
        o[e] = 0;
      }
    }
    const c = Nr[e];
    let u, h;
    if (c)
      return e === "$attrs" && Pe(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[e])
    )
      return u;
    if (r !== ge && he(r, e))
      return o[e] = 4, r[e];
    if (
      // global properties
      h = l.config.globalProperties, he(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, r) {
    const { data: n, setupState: s, ctx: i } = t;
    return Qn(s, e) ? (s[e] = r, !0) : he(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = r, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: r, ctx: n, appContext: s, props: i, type: o }
  }, a) {
    let l;
    return !!(r[a] || Qn(e, a) || he(i, a) || he(n, a) || he(Nr, a) || he(s.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : he(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
function sa() {
  return {
    app: null,
    config: {
      isNativeTag: To,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Xl = 0;
function Ql(t, e) {
  return function(n, s = null) {
    de(n) || (n = Ze({}, n)), s != null && !me(s) && (s = null);
    const i = sa(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = i.app = {
      _uid: Xl++,
      _component: n,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: xc,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && de(u.install) ? (o.add(u), u.install(c, ...h)) : de(u) && (o.add(u), u(c, ...h))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, h) {
        return h ? (i.components[u] = h, c) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, c) : i.directives[u];
      },
      mount(u, h, d) {
        if (!l) {
          const f = c._ceVNode || He(n, s);
          return f.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), t(f, u, d), l = !0, c._container = u, u.__vue_app__ = c, qn(f.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (St(
          a,
          c._instance,
          16
        ), t(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, c;
      },
      runWithContext(u) {
        const h = fr;
        fr = c;
        try {
          return u();
        } finally {
          fr = h;
        }
      }
    };
    return c;
  };
}
let fr = null;
const Zl = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Ye(e)}Modifiers`] || t[`${zt(e)}Modifiers`];
function ec(t, e, ...r) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || ge;
  let s = r;
  const i = e.startsWith("update:"), o = i && Zl(n, e.slice(7));
  o && (o.trim && (s = r.map((u) => Se(u) ? u.trim() : u)), o.number && (s = r.map(Us)));
  let a, l = n[a = zn(e)] || // also try camelCase event handler (#2249)
  n[a = zn(Ye(e))];
  !l && i && (l = n[a = zn(zt(e))]), l && St(
    l,
    t,
    6,
    s
  );
  const c = n[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, St(
      c,
      t,
      6,
      s
    );
  }
}
function tc(t, e, r = !1) {
  const n = e.emitsCache, s = n.get(t);
  if (s !== void 0)
    return s;
  const i = t.emits;
  let o = {};
  return i ? (ne(i) ? i.forEach((a) => o[a] = null) : Ze(o, i), me(t) && n.set(t, o), o) : (me(t) && n.set(t, null), null);
}
function Bn(t, e) {
  return !t || !jn(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), he(t, e[0].toLowerCase() + e.slice(1)) || he(t, zt(e)) || he(t, e));
}
function pi(t) {
  const {
    type: e,
    vnode: r,
    proxy: n,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: h,
    data: d,
    setupState: f,
    ctx: g,
    inheritAttrs: v
  } = t, y = Sn(t);
  let b, w;
  try {
    if (r.shapeFlag & 4) {
      const C = s || n, H = C;
      b = lt(
        c.call(
          H,
          C,
          u,
          h,
          f,
          d,
          g
        )
      ), w = a;
    } else {
      const C = e;
      b = lt(
        C.length > 1 ? C(
          h,
          { attrs: a, slots: o, emit: l }
        ) : C(
          h,
          null
        )
      ), w = e.props ? a : rc(a);
    }
  } catch (C) {
    Dr.length = 0, Mn(C, t, 1), b = He(xt);
  }
  let S = b;
  if (w && v !== !1) {
    const C = Object.keys(w), { shapeFlag: H } = S;
    C.length && H & 7 && (i && C.some(Ln) && (w = nc(
      w,
      i
    )), S = vr(S, w, !1, !0));
  }
  return r.dirs && (S = vr(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(r.dirs) : r.dirs), r.transition && Gs(S, r.transition), b = S, Sn(y), b;
}
const rc = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || jn(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, nc = (t, e) => {
  const r = {};
  for (const n in t)
    (!Ln(n) || !(n.slice(9) in e)) && (r[n] = t[n]);
  return r;
};
function sc(t, e, r) {
  const { props: n, children: s, component: i } = t, { props: o, children: a, patchFlag: l } = e, c = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? gi(n, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const d = u[h];
        if (ia(o, n, d) && !Bn(c, d))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : n === o ? !1 : n ? o ? gi(n, o, c) : !0 : !!o;
  return !1;
}
function gi(t, e, r) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const i = n[s];
    if (ia(e, t, i) && !Bn(r, i))
      return !0;
  }
  return !1;
}
function ia(t, e, r) {
  const n = t[r], s = e[r];
  return r === "style" && me(n) && me(s) ? !Ms(n, s) : n !== s;
}
function ic({ vnode: t, parent: e, suspense: r }, n) {
  for (; e; ) {
    const s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.suspense.vnode.el = s.el = n, t = s), s === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  r && r.activeBranch === t && (r.vnode.el = n);
}
const oa = {}, aa = () => Object.create(oa), la = (t) => Object.getPrototypeOf(t) === oa;
function oc(t, e, r, n = !1) {
  const s = {}, i = aa();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), ca(t, e, s, i);
  for (const o in t.propsOptions[0])
    o in s || (s[o] = void 0);
  r ? t.props = n ? s : /* @__PURE__ */ Rl(s) : t.type.props ? t.props = s : t.props = i, t.attrs = i;
}
function ac(t, e, r, n) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, a = /* @__PURE__ */ ce(s), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let d = u[h];
        if (Bn(t.emitsOptions, d))
          continue;
        const f = e[d];
        if (l)
          if (he(i, d))
            f !== i[d] && (i[d] = f, c = !0);
          else {
            const g = Ye(d);
            s[g] = bs(
              l,
              a,
              g,
              f,
              t,
              !1
            );
          }
        else
          f !== i[d] && (i[d] = f, c = !0);
      }
    }
  } else {
    ca(t, e, s, i) && (c = !0);
    let u;
    for (const h in a)
      (!e || // for camelCase
      !he(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = zt(h)) === h || !he(e, u))) && (l ? r && // for camelCase
      (r[h] !== void 0 || // for kebab-case
      r[u] !== void 0) && (s[h] = bs(
        l,
        a,
        h,
        void 0,
        t,
        !0
      )) : delete s[h]);
    if (i !== a)
      for (const h in i)
        (!e || !he(e, h)) && (delete i[h], c = !0);
  }
  c && wt(t.attrs, "set", "");
}
function ca(t, e, r, n) {
  const [s, i] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (Pr(l))
        continue;
      const c = e[l];
      let u;
      s && he(s, u = Ye(l)) ? !i || !i.includes(u) ? r[u] = c : (a || (a = {}))[u] = c : Bn(t.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, o = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ ce(r), c = a || ge;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      r[h] = bs(
        s,
        l,
        h,
        c[h],
        t,
        !he(c, h)
      );
    }
  }
  return o;
}
function bs(t, e, r, n, s, i) {
  const o = t[r];
  if (o != null) {
    const a = he(o, "default");
    if (a && n === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && de(l)) {
        const { propsDefaults: c } = s;
        if (r in c)
          n = c[r];
        else {
          const u = ei(s);
          n = c[r] = l.call(
            null,
            e
          ), u();
        }
      } else
        n = l;
      s.ce && s.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !a ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === zt(r)) && (n = !0));
  }
  return n;
}
function lc(t, e, r = !1) {
  const n = e.propsCache, s = n.get(t);
  if (s)
    return s;
  const i = t.props, o = {}, a = [];
  if (!i)
    return me(t) && n.set(t, cr), cr;
  if (ne(i))
    for (let c = 0; c < i.length; c++) {
      const u = Ye(i[c]);
      mi(u) && (o[u] = ge);
    }
  else if (i)
    for (const c in i) {
      const u = Ye(c);
      if (mi(u)) {
        const h = i[c], d = o[u] = ne(h) || de(h) ? { type: h } : Ze({}, h), f = d.type;
        let g = !1, v = !0;
        if (ne(f))
          for (let y = 0; y < f.length; ++y) {
            const b = f[y], w = de(b) && b.name;
            if (w === "Boolean") {
              g = !0;
              break;
            } else w === "String" && (v = !1);
          }
        else
          g = de(f) && f.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = v, (g || he(d, "default")) && a.push(u);
      }
    }
  const l = [o, a];
  return me(t) && n.set(t, l), l;
}
function mi(t) {
  return t[0] !== "$" && !Pr(t);
}
const Xs = (t) => t === "_" || t === "_ctx" || t === "$stable", Qs = (t) => ne(t) ? t.map(lt) : [lt(t)], cc = (t, e, r) => {
  if (e._n)
    return e;
  const n = Ul((...s) => Qs(e(...s)), r);
  return n._c = !1, n;
}, ua = (t, e, r) => {
  const n = t._ctx;
  for (const s in t) {
    if (Xs(s)) continue;
    const i = t[s];
    if (de(i))
      e[s] = cc(s, i, n);
    else if (i != null) {
      const o = Qs(i);
      e[s] = () => o;
    }
  }
}, ha = (t, e) => {
  const r = Qs(e);
  t.slots.default = () => r;
}, da = (t, e, r) => {
  for (const n in e)
    (r || !Xs(n)) && (t[n] = e[n]);
}, uc = (t, e, r) => {
  const n = t.slots = aa();
  if (t.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (da(n, e, r), r && $o(n, "_", s, !0)) : ua(e, n);
  } else e && ha(t, e);
}, hc = (t, e, r) => {
  const { vnode: n, slots: s } = t;
  let i = !0, o = ge;
  if (n.shapeFlag & 32) {
    const a = e._;
    a ? r && a === 1 ? i = !1 : da(s, e, r) : (i = !e.$stable, ua(e, s)), o = e;
  } else e && (ha(t, e), o = { default: 1 });
  if (i)
    for (const a in s)
      !Xs(a) && o[a] == null && delete s[a];
}, Ne = mc;
function dc(t) {
  return fc(t);
}
function fc(t, e) {
  const r = Dn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: h,
    nextSibling: d,
    setScopeId: f = Ft,
    insertStaticContent: g
  } = t, v = (p, m, _, x = null, A = null, R = null, U = void 0, N = null, L = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !Tr(p, m) && (x = Gt(p), Ee(p, A, R, !0), p = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: O, ref: z, shapeFlag: B } = m;
    switch (O) {
      case Hn:
        y(p, m, _, x);
        break;
      case xt:
        b(p, m, _, x);
        break;
      case mn:
        p == null && w(m, _, x, U);
        break;
      case _e:
        se(
          p,
          m,
          _,
          x,
          A,
          R,
          U,
          N,
          L
        );
        break;
      default:
        B & 1 ? H(
          p,
          m,
          _,
          x,
          A,
          R,
          U,
          N,
          L
        ) : B & 6 ? re(
          p,
          m,
          _,
          x,
          A,
          R,
          U,
          N,
          L
        ) : (B & 64 || B & 128) && O.process(
          p,
          m,
          _,
          x,
          A,
          R,
          U,
          N,
          L,
          It
        );
    }
    z != null && A ? jr(z, p && p.ref, R, m || p, !m) : z == null && p && p.ref != null && jr(p.ref, null, R, p, !0);
  }, y = (p, m, _, x) => {
    if (p == null)
      n(
        m.el = a(m.children),
        _,
        x
      );
    else {
      const A = m.el = p.el;
      m.children !== p.children && c(A, m.children);
    }
  }, b = (p, m, _, x) => {
    p == null ? n(
      m.el = l(m.children || ""),
      _,
      x
    ) : m.el = p.el;
  }, w = (p, m, _, x) => {
    [p.el, p.anchor] = g(
      p.children,
      m,
      _,
      x,
      p.el,
      p.anchor
    );
  }, S = ({ el: p, anchor: m }, _, x) => {
    let A;
    for (; p && p !== m; )
      A = d(p), n(p, _, x), p = A;
    n(m, _, x);
  }, C = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = d(p), s(p), p = _;
    s(m);
  }, H = (p, m, _, x, A, R, U, N, L) => {
    if (m.type === "svg" ? U = "svg" : m.type === "math" && (U = "mathml"), p == null)
      j(
        m,
        _,
        x,
        A,
        R,
        U,
        N,
        L
      );
    else {
      const O = p.el && p.el._isVueCE ? p.el : null;
      try {
        O && O._beginPatch(), k(
          p,
          m,
          A,
          R,
          U,
          N,
          L
        );
      } finally {
        O && O._endPatch();
      }
    }
  }, j = (p, m, _, x, A, R, U, N) => {
    let L, O;
    const { props: z, shapeFlag: B, transition: V, dirs: G } = p;
    if (L = p.el = o(
      p.type,
      R,
      z && z.is,
      z
    ), B & 8 ? u(L, p.children) : B & 16 && T(
      p.children,
      L,
      null,
      x,
      A,
      Zn(p, R),
      U,
      N
    ), G && Lt(p, null, x, "created"), E(L, p, p.scopeId, U, x), z) {
      for (const le in z)
        le !== "value" && !Pr(le) && i(L, le, null, z[le], R, x);
      "value" in z && i(L, "value", null, z.value, R), (O = z.onVnodeBeforeMount) && nt(O, x, p);
    }
    G && Lt(p, null, x, "beforeMount");
    const ie = pc(A, V);
    ie && V.beforeEnter(L), n(L, m, _), ((O = z && z.onVnodeMounted) || ie || G) && Ne(() => {
      try {
        O && nt(O, x, p), ie && V.enter(L), G && Lt(p, null, x, "mounted");
      } finally {
      }
    }, A);
  }, E = (p, m, _, x, A) => {
    if (_ && f(p, _), x)
      for (let R = 0; R < x.length; R++)
        f(p, x[R]);
    if (A) {
      let R = A.subTree;
      if (m === R || ma(R.type) && (R.ssContent === m || R.ssFallback === m)) {
        const U = A.vnode;
        E(
          p,
          U,
          U.scopeId,
          U.slotScopeIds,
          A.parent
        );
      }
    }
  }, T = (p, m, _, x, A, R, U, N, L = 0) => {
    for (let O = L; O < p.length; O++) {
      const z = p[O] = N ? yt(p[O]) : lt(p[O]);
      v(
        null,
        z,
        m,
        _,
        x,
        A,
        R,
        U,
        N
      );
    }
  }, k = (p, m, _, x, A, R, U) => {
    const N = m.el = p.el;
    let { patchFlag: L, dynamicChildren: O, dirs: z } = m;
    L |= p.patchFlag & 16;
    const B = p.props || ge, V = m.props || ge;
    let G;
    if (_ && Nt(_, !1), (G = V.onVnodeBeforeUpdate) && nt(G, _, m, p), z && Lt(m, p, _, "beforeUpdate"), _ && Nt(_, !0), (B.innerHTML && V.innerHTML == null || B.textContent && V.textContent == null) && u(N, ""), O ? D(
      p.dynamicChildren,
      O,
      N,
      _,
      x,
      Zn(m, A),
      R
    ) : U || ee(
      p,
      m,
      N,
      null,
      _,
      x,
      Zn(m, A),
      R,
      !1
    ), L > 0) {
      if (L & 16)
        K(N, B, V, _, A);
      else if (L & 2 && B.class !== V.class && i(N, "class", null, V.class, A), L & 4 && i(N, "style", B.style, V.style, A), L & 8) {
        const ie = m.dynamicProps;
        for (let le = 0; le < ie.length; le++) {
          const ue = ie[le], ve = B[ue], Te = V[ue];
          (Te !== ve || ue === "value") && i(N, ue, ve, Te, A, _);
        }
      }
      L & 1 && p.children !== m.children && u(N, m.children);
    } else !U && O == null && K(N, B, V, _, A);
    ((G = V.onVnodeUpdated) || z) && Ne(() => {
      G && nt(G, _, m, p), z && Lt(m, p, _, "updated");
    }, x);
  }, D = (p, m, _, x, A, R, U) => {
    for (let N = 0; N < m.length; N++) {
      const L = p[N], O = m[N], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tr(L, O) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? h(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      v(
        L,
        O,
        z,
        null,
        x,
        A,
        R,
        U,
        !0
      );
    }
  }, K = (p, m, _, x, A) => {
    if (m !== _) {
      if (m !== ge)
        for (const R in m)
          !Pr(R) && !(R in _) && i(
            p,
            R,
            m[R],
            null,
            A,
            x
          );
      for (const R in _) {
        if (Pr(R)) continue;
        const U = _[R], N = m[R];
        U !== N && R !== "value" && i(p, R, N, U, A, x);
      }
      "value" in _ && i(p, "value", m.value, _.value, A);
    }
  }, se = (p, m, _, x, A, R, U, N, L) => {
    const O = m.el = p ? p.el : a(""), z = m.anchor = p ? p.anchor : a("");
    let { patchFlag: B, dynamicChildren: V, slotScopeIds: G } = m;
    G && (N = N ? N.concat(G) : G), p == null ? (n(O, _, x), n(z, _, x), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      z,
      A,
      R,
      U,
      N,
      L
    )) : B > 0 && B & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === V.length ? (D(
      p.dynamicChildren,
      V,
      _,
      A,
      R,
      U,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || A && m === A.subTree) && fa(
      p,
      m,
      !0
      /* shallow */
    )) : ee(
      p,
      m,
      _,
      z,
      A,
      R,
      U,
      N,
      L
    );
  }, re = (p, m, _, x, A, R, U, N, L) => {
    m.slotScopeIds = N, p == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      _,
      x,
      U,
      L
    ) : Q(
      m,
      _,
      x,
      A,
      R,
      U,
      L
    ) : Z(p, m, L);
  }, Q = (p, m, _, x, A, R, U) => {
    const N = p.component = kc(
      p,
      x,
      A
    );
    if (zl(p) && (N.ctx.renderer = It), Tc(N, !1, U), N.asyncDep) {
      if (A && A.registerDep(N, et, U), !p.el) {
        const L = N.subTree = He(xt);
        b(null, L, m, _), p.placeholder = L.el;
      }
    } else
      et(
        N,
        p,
        m,
        _,
        A,
        R,
        U
      );
  }, Z = (p, m, _) => {
    const x = m.component = p.component;
    if (sc(p, m, _))
      if (x.asyncDep && !x.asyncResolved) {
        dt(x, m, _);
        return;
      } else
        x.next = m, x.update();
    else
      m.el = p.el, x.vnode = m;
  }, et = (p, m, _, x, A, R, U) => {
    const N = () => {
      if (p.isMounted) {
        let { next: B, bu: V, u: G, parent: ie, vnode: le } = p;
        {
          const $ = pa(p);
          if ($) {
            B && (B.el = le.el, dt(p, B, U)), $.asyncDep.then(() => {
              Ne(() => {
                p.isUnmounted || O();
              }, A);
            });
            return;
          }
        }
        let ue = B, ve;
        Nt(p, !1), B ? (B.el = le.el, dt(p, B, U)) : B = le, V && gn(V), (ve = B.props && B.props.onVnodeBeforeUpdate) && nt(ve, ie, B, le), Nt(p, !0);
        const Te = pi(p), I = p.subTree;
        p.subTree = Te, v(
          I,
          Te,
          // parent may have changed if it's in a teleport
          h(I.el),
          // anchor may have changed if it's in a fragment
          Gt(I),
          p,
          A,
          R
        ), B.el = Te.el, ue === null && ic(p, Te.el), G && Ne(G, A), (ve = B.props && B.props.onVnodeUpdated) && Ne(
          () => nt(ve, ie, B, le),
          A
        );
      } else {
        let B;
        const { el: V, props: G } = m, { bm: ie, m: le, parent: ue, root: ve, type: Te } = p, I = Lr(m);
        Nt(p, !1), ie && gn(ie), !I && (B = G && G.onVnodeBeforeMount) && nt(B, ue, m), Nt(p, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            Te,
            p.parent ? p.parent.type : void 0
          );
          const $ = p.subTree = pi(p);
          v(
            null,
            $,
            _,
            x,
            p,
            A,
            R
          ), m.el = $.el;
        }
        if (le && Ne(le, A), !I && (B = G && G.onVnodeMounted)) {
          const $ = m;
          Ne(
            () => nt(B, ue, $),
            A
          );
        }
        (m.shapeFlag & 256 || ue && Lr(ue.vnode) && ue.vnode.shapeFlag & 256) && p.a && Ne(p.a, A), p.isMounted = !0, m = _ = x = null;
      }
    };
    p.scope.on();
    const L = p.effect = new No(N);
    p.scope.off();
    const O = p.update = L.run.bind(L), z = p.job = L.runIfDirty.bind(L);
    z.i = p, z.id = p.uid, L.scheduler = () => Js(z), Nt(p, !0), O();
  }, dt = (p, m, _) => {
    m.component = p;
    const x = p.vnode.props;
    p.vnode = m, p.next = null, ac(p, m.props, x, _), hc(p, m.children, _), At(), hi(p), Ot();
  }, ee = (p, m, _, x, A, R, U, N, L = !1) => {
    const O = p && p.children, z = p ? p.shapeFlag : 0, B = m.children, { patchFlag: V, shapeFlag: G } = m;
    if (V > 0) {
      if (V & 128) {
        De(
          O,
          B,
          _,
          x,
          A,
          R,
          U,
          N,
          L
        );
        return;
      } else if (V & 256) {
        je(
          O,
          B,
          _,
          x,
          A,
          R,
          U,
          N,
          L
        );
        return;
      }
    }
    G & 8 ? (z & 16 && $t(O, A, R), B !== O && u(_, B)) : z & 16 ? G & 16 ? De(
      O,
      B,
      _,
      x,
      A,
      R,
      U,
      N,
      L
    ) : $t(O, A, R, !0) : (z & 8 && u(_, ""), G & 16 && T(
      B,
      _,
      x,
      A,
      R,
      U,
      N,
      L
    ));
  }, je = (p, m, _, x, A, R, U, N, L) => {
    p = p || cr, m = m || cr;
    const O = p.length, z = m.length, B = Math.min(O, z);
    let V;
    for (V = 0; V < B; V++) {
      const G = m[V] = L ? yt(m[V]) : lt(m[V]);
      v(
        p[V],
        G,
        _,
        null,
        A,
        R,
        U,
        N,
        L
      );
    }
    O > z ? $t(
      p,
      A,
      R,
      !0,
      !1,
      B
    ) : T(
      m,
      _,
      x,
      A,
      R,
      U,
      N,
      L,
      B
    );
  }, De = (p, m, _, x, A, R, U, N, L) => {
    let O = 0;
    const z = m.length;
    let B = p.length - 1, V = z - 1;
    for (; O <= B && O <= V; ) {
      const G = p[O], ie = m[O] = L ? yt(m[O]) : lt(m[O]);
      if (Tr(G, ie))
        v(
          G,
          ie,
          _,
          null,
          A,
          R,
          U,
          N,
          L
        );
      else
        break;
      O++;
    }
    for (; O <= B && O <= V; ) {
      const G = p[B], ie = m[V] = L ? yt(m[V]) : lt(m[V]);
      if (Tr(G, ie))
        v(
          G,
          ie,
          _,
          null,
          A,
          R,
          U,
          N,
          L
        );
      else
        break;
      B--, V--;
    }
    if (O > B) {
      if (O <= V) {
        const G = V + 1, ie = G < z ? m[G].el : x;
        for (; O <= V; )
          v(
            null,
            m[O] = L ? yt(m[O]) : lt(m[O]),
            _,
            ie,
            A,
            R,
            U,
            N,
            L
          ), O++;
      }
    } else if (O > V)
      for (; O <= B; )
        Ee(p[O], A, R, !0), O++;
    else {
      const G = O, ie = O, le = /* @__PURE__ */ new Map();
      for (O = ie; O <= V; O++) {
        const Ue = m[O] = L ? yt(m[O]) : lt(m[O]);
        Ue.key != null && le.set(Ue.key, O);
      }
      let ue, ve = 0;
      const Te = V - ie + 1;
      let I = !1, $ = 0;
      const X = new Array(Te);
      for (O = 0; O < Te; O++) X[O] = 0;
      for (O = G; O <= B; O++) {
        const Ue = p[O];
        if (ve >= Te) {
          Ee(Ue, A, R, !0);
          continue;
        }
        let rt;
        if (Ue.key != null)
          rt = le.get(Ue.key);
        else
          for (ue = ie; ue <= V; ue++)
            if (X[ue - ie] === 0 && Tr(Ue, m[ue])) {
              rt = ue;
              break;
            }
        rt === void 0 ? Ee(Ue, A, R, !0) : (X[rt - ie] = O + 1, rt >= $ ? $ = rt : I = !0, v(
          Ue,
          m[rt],
          _,
          null,
          A,
          R,
          U,
          N,
          L
        ), ve++);
      }
      const jt = I ? gc(X) : cr;
      for (ue = jt.length - 1, O = Te - 1; O >= 0; O--) {
        const Ue = ie + O, rt = m[Ue], ii = m[Ue + 1], oi = Ue + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ii.el || ga(ii)
        ) : x;
        X[O] === 0 ? v(
          null,
          rt,
          _,
          oi,
          A,
          R,
          U,
          N,
          L
        ) : I && (ue < 0 || O !== jt[ue] ? ke(rt, _, oi, 2) : ue--);
      }
    }
  }, ke = (p, m, _, x, A = null) => {
    const { el: R, type: U, transition: N, children: L, shapeFlag: O } = p;
    if (O & 6) {
      ke(p.component.subTree, m, _, x);
      return;
    }
    if (O & 128) {
      p.suspense.move(m, _, x);
      return;
    }
    if (O & 64) {
      U.move(p, m, _, It);
      return;
    }
    if (U === _e) {
      n(R, m, _);
      for (let B = 0; B < L.length; B++)
        ke(L[B], m, _, x);
      n(p.anchor, m, _);
      return;
    }
    if (U === mn) {
      S(p, m, _);
      return;
    }
    if (x !== 2 && O & 1 && N)
      if (x === 0)
        N.beforeEnter(R), n(R, m, _), Ne(() => N.enter(R), A);
      else {
        const { leave: B, delayLeave: V, afterLeave: G } = N, ie = () => {
          p.ctx.isUnmounted ? s(R) : n(R, m, _);
        }, le = () => {
          R._isLeaving && R[Kl](
            !0
            /* cancelled */
          ), B(R, () => {
            ie(), G && G();
          });
        };
        V ? V(R, ie, le) : le();
      }
    else
      n(R, m, _);
  }, Ee = (p, m, _, x = !1, A = !1) => {
    const {
      type: R,
      props: U,
      ref: N,
      children: L,
      dynamicChildren: O,
      shapeFlag: z,
      patchFlag: B,
      dirs: V,
      cacheIndex: G,
      memo: ie
    } = p;
    if (B === -2 && (A = !1), N != null && (At(), jr(N, null, _, p, !0), Ot()), G != null && (m.renderCache[G] = void 0), z & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const le = z & 1 && V, ue = !Lr(p);
    let ve;
    if (ue && (ve = U && U.onVnodeBeforeUnmount) && nt(ve, m, p), z & 6)
      Sr(p.component, _, x);
    else {
      if (z & 128) {
        p.suspense.unmount(_, x);
        return;
      }
      le && Lt(p, null, m, "beforeUnmount"), z & 64 ? p.type.remove(
        p,
        m,
        _,
        It,
        x
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== _e || B > 0 && B & 64) ? $t(
        O,
        m,
        _,
        !1,
        !0
      ) : (R === _e && B & 384 || !A && z & 16) && $t(L, m, _), x && tn(p);
    }
    const Te = ie != null && G == null;
    (ue && (ve = U && U.onVnodeUnmounted) || le || Te) && Ne(() => {
      ve && nt(ve, m, p), le && Lt(p, null, m, "unmounted"), Te && (p.el = null);
    }, _);
  }, tn = (p) => {
    const { type: m, el: _, anchor: x, transition: A } = p;
    if (m === _e) {
      rn(_, x);
      return;
    }
    if (m === mn) {
      C(p);
      return;
    }
    const R = () => {
      s(_), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: U, delayLeave: N } = A, L = () => U(_, R);
      N ? N(p.el, R, L) : L();
    } else
      R();
  }, rn = (p, m) => {
    let _;
    for (; p !== m; )
      _ = d(p), s(p), p = _;
    s(m);
  }, Sr = (p, m, _) => {
    const { bum: x, scope: A, job: R, subTree: U, um: N, m: L, a: O } = p;
    vi(L), vi(O), x && gn(x), A.stop(), R && (R.flags |= 8, Ee(U, p, m, _)), N && Ne(N, m), Ne(() => {
      p.isUnmounted = !0;
    }, m);
  }, $t = (p, m, _, x = !1, A = !1, R = 0) => {
    for (let U = R; U < p.length; U++)
      Ee(p[U], m, _, x, A);
  }, Gt = (p) => {
    if (p.shapeFlag & 6)
      return Gt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = d(p.anchor || p.el), _ = m && m[Fl];
    return _ ? d(_) : m;
  };
  let tt = !1;
  const kr = (p, m, _) => {
    let x;
    p == null ? m._vnode && (Ee(m._vnode, null, null, !0), x = m._vnode.component) : v(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, tt || (tt = !0, hi(x), ea(), tt = !1);
  }, It = {
    p: v,
    um: Ee,
    m: ke,
    r: tn,
    mt: Q,
    mc: T,
    pc: ee,
    pbc: D,
    n: Gt,
    o: t
  };
  return {
    render: kr,
    hydrate: void 0,
    createApp: Ql(kr)
  };
}
function Zn({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function Nt({ effect: t, job: e }, r) {
  r ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function pc(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function fa(t, e, r = !1) {
  const n = t.children, s = e.children;
  if (ne(n) && ne(s))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let a = s[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = yt(s[i]), a.el = o.el), !r && a.patchFlag !== -2 && fa(o, a)), a.type === Hn && (a.patchFlag === -1 && (a = s[i] = yt(a)), a.el = o.el), a.type === xt && !a.el && (a.el = o.el);
    }
}
function gc(t) {
  const e = t.slice(), r = [0];
  let n, s, i, o, a;
  const l = t.length;
  for (n = 0; n < l; n++) {
    const c = t[n];
    if (c !== 0) {
      if (s = r[r.length - 1], t[s] < c) {
        e[n] = s, r.push(n);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        a = i + o >> 1, t[r[a]] < c ? i = a + 1 : o = a;
      c < t[r[i]] && (i > 0 && (e[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, o = r[i - 1]; i-- > 0; )
    r[i] = o, o = e[o];
  return r;
}
function pa(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : pa(e);
}
function vi(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function ga(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? ga(e.subTree) : null;
}
const ma = (t) => t.__isSuspense;
function mc(t, e) {
  e && e.pendingBranch ? ne(t) ? e.effects.push(...t) : e.effects.push(t) : Dl(t);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Hn = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), mn = /* @__PURE__ */ Symbol.for("v-stc"), Dr = [];
let Be = null;
function q(t = !1) {
  Dr.push(Be = t ? null : []);
}
function vc() {
  Dr.pop(), Be = Dr[Dr.length - 1] || null;
}
let Wr = 1;
function yi(t, e = !1) {
  Wr += t, t < 0 && Be && e && (Be.hasOnce = !0);
}
function va(t) {
  return t.dynamicChildren = Wr > 0 ? Be || cr : null, vc(), Wr > 0 && Be && Be.push(t), t;
}
function W(t, e, r, n, s, i) {
  return va(
    P(
      t,
      e,
      r,
      n,
      s,
      i,
      !0
    )
  );
}
function Rr(t, e, r, n, s) {
  return va(
    He(
      t,
      e,
      r,
      n,
      s,
      !0
    )
  );
}
function ya(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Tr(t, e) {
  return t.type === e.type && t.key === e.key;
}
const wa = ({ key: t }) => t ?? null, vn = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? Se(t) || /* @__PURE__ */ Ie(t) || de(t) ? { i: Fe, r: t, k: e, f: !!r } : t : null);
function P(t, e = null, r = null, n = 0, s = null, i = t === _e ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && wa(e),
    ref: e && vn(e),
    scopeId: ra,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe
  };
  return a ? (Zs(l, r), i & 128 && t.normalize(l)) : r && (l.shapeFlag |= Se(r) ? 8 : 16), Wr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Be.push(l), l;
}
const He = yc;
function yc(t, e = null, r = null, n = 0, s = null, i = !1) {
  if ((!t || t === Gl) && (t = xt), ya(t)) {
    const a = vr(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return r && Zs(a, r), Wr > 0 && !i && Be && (a.shapeFlag & 6 ? Be[Be.indexOf(t)] = a : Be.push(a)), a.patchFlag = -2, a;
  }
  if (Oc(t) && (t = t.__vccOpts), e) {
    e = wc(e);
    let { class: a, style: l } = e;
    a && !Se(a) && (e.class = Ge(a)), me(l) && (/* @__PURE__ */ Vs(l) && !ne(l) && (l = Ze({}, l)), e.style = wr(l));
  }
  const o = Se(t) ? 1 : ma(t) ? 128 : Wl(t) ? 64 : me(t) ? 4 : de(t) ? 2 : 0;
  return P(
    t,
    e,
    r,
    n,
    s,
    o,
    i,
    !0
  );
}
function wc(t) {
  return t ? /* @__PURE__ */ Vs(t) || la(t) ? Ze({}, t) : t : null;
}
function vr(t, e, r = !1, n = !1) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = t, c = e ? bc(s || {}, e) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && wa(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(vn(e)) : [i, vn(e)] : vn(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== _e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && vr(t.ssContent),
    ssFallback: t.ssFallback && vr(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && n && Gs(
    u,
    l.clone(u)
  ), u;
}
function Tn(t = " ", e = 0) {
  return He(Hn, null, t, e);
}
function ba(t, e) {
  const r = He(mn, null, t);
  return r.staticCount = e, r;
}
function ae(t = "", e = !1) {
  return e ? (q(), Rr(xt, null, t)) : He(xt, null, t);
}
function lt(t) {
  return t == null || typeof t == "boolean" ? He(xt) : ne(t) ? He(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : ya(t) ? yt(t) : He(Hn, null, String(t));
}
function yt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : vr(t);
}
function Zs(t, e) {
  let r = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (ne(e))
    r = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), Zs(t, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = e._;
      !s && !la(e) ? e._ctx = Fe : s === 3 && Fe && (Fe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else de(e) ? (e = { default: e, _ctx: Fe }, r = 32) : (e = String(e), n & 64 ? (r = 16, e = [Tn(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function bc(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    for (const s in n)
      if (s === "class")
        e.class !== n.class && (e.class = Ge([e.class, n.class]));
      else if (s === "style")
        e.style = wr([e.style, n.style]);
      else if (jn(s)) {
        const i = e[s], o = n[s];
        o && i !== o && !(ne(i) && i.includes(o)) ? e[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ln(s) && (e[s] = o);
      } else s !== "" && (e[s] = n[s]);
  }
  return e;
}
function nt(t, e, r, n = null) {
  St(t, e, 7, [
    r,
    n
  ]);
}
const _c = sa();
let Sc = 0;
function kc(t, e, r) {
  const n = t.type, s = (e ? e.appContext : t.appContext) || _c, i = {
    uid: Sc++,
    vnode: t,
    type: n,
    parent: e,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new al(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lc(n, s),
    emitsOptions: tc(n, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ge,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ge,
    data: ge,
    props: ge,
    attrs: ge,
    slots: ge,
    refs: ge,
    setupState: ge,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = ec.bind(null, i), t.ce && t.ce(i), i;
}
let Pt = null;
const Ec = () => Pt || Fe;
let Cn, _s;
{
  const t = Dn(), e = (r, n) => {
    let s;
    return (s = t[r]) || (s = t[r] = []), s.push(n), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Cn = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Pt = r
  ), _s = e(
    "__VUE_SSR_SETTERS__",
    (r) => Kr = r
  );
}
const ei = (t) => {
  const e = Pt;
  return Cn(t), t.scope.on(), () => {
    t.scope.off(), Cn(e);
  };
}, wi = () => {
  Pt && Pt.scope.off(), Cn(null);
};
function _a(t) {
  return t.vnode.shapeFlag & 4;
}
let Kr = !1;
function Tc(t, e = !1, r = !1) {
  e && _s(e);
  const { props: n, children: s } = t.vnode, i = _a(t);
  oc(t, n, i, e), uc(t, s, r || e);
  const o = i ? Cc(t, e) : void 0;
  return e && _s(!1), o;
}
function Cc(t, e) {
  const r = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    At();
    const s = t.setupContext = n.length > 1 ? Ac(t) : null, i = ei(t), o = Zr(
      n,
      t,
      0,
      [
        t.props,
        s
      ]
    ), a = Ao(o);
    if (Ot(), i(), (a || t.sp) && !Lr(t) && Vl(t), a) {
      if (o.then(wi, wi), e)
        return o.then((l) => {
          bi(t, l);
        }).catch((l) => {
          Mn(l, t, 0);
        });
      t.asyncDep = o;
    } else
      bi(t, o);
  } else
    Sa(t);
}
function bi(t, e, r) {
  de(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : me(e) && (t.setupState = Xo(e)), Sa(t);
}
function Sa(t, e, r) {
  const n = t.type;
  t.render || (t.render = n.render || Ft);
}
const Rc = {
  get(t, e) {
    return Pe(t, "get", ""), t[e];
  }
};
function Ac(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  return {
    attrs: new Proxy(t.attrs, Rc),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function qn(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Xo(Al(t.exposed)), {
    get(e, r) {
      if (r in e)
        return e[r];
      if (r in Nr)
        return Nr[r](t);
    },
    has(e, r) {
      return r in e || r in Nr;
    }
  })) : t.proxy;
}
function Oc(t) {
  return de(t) && "__vccOpts" in t;
}
const oe = (t, e) => /* @__PURE__ */ $l(t, e, Kr), xc = "3.5.34";
/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ss;
const _i = typeof window < "u" && window.trustedTypes;
if (_i)
  try {
    Ss = /* @__PURE__ */ _i.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ka = Ss ? (t) => Ss.createHTML(t) : (t) => t, Pc = "http://www.w3.org/2000/svg", $c = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null, Si = gt && /* @__PURE__ */ gt.createElement("template"), Ic = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, n) => {
    const s = e === "svg" ? gt.createElementNS(Pc, t) : e === "mathml" ? gt.createElementNS($c, t) : r ? gt.createElement(t, { is: r }) : gt.createElement(t);
    return t === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (t) => gt.createTextNode(t),
  createComment: (t) => gt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => gt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, r, n, s, i) {
    const o = r ? r.previousSibling : e.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), r), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Si.innerHTML = ka(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const a = Si.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      e.insertBefore(a, r);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      r ? r.previousSibling : e.lastChild
    ];
  }
}, jc = /* @__PURE__ */ Symbol("_vtc");
function Lc(t, e, r) {
  const n = t[jc];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const ki = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Uc = /(?:^|;)\s*display\s*:/;
function Mc(t, e, r) {
  const n = t.style, s = Se(r);
  let i = !1;
  if (r && !s) {
    if (e)
      if (Se(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          r[a] == null && Ar(n, a, "");
        }
      else
        for (const o in e)
          r[o] == null && Ar(n, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const a = r[o];
      a != null ? Hc(
        t,
        o,
        !Se(e) && e ? e[o] : void 0,
        a
      ) || Ar(n, o, a) : Ar(n, o, "");
    }
  } else if (s) {
    if (e !== r) {
      const o = n[Dc];
      o && (r += ";" + o), n.cssText = r, i = Uc.test(r);
    }
  } else e && t.removeAttribute("style");
  ki in t && (t[ki] = i ? n.display : "", t[Nc] && (n.display = "none"));
}
const Ei = /\s*!important$/;
function Ar(t, e, r) {
  if (ne(r))
    r.forEach((n) => Ar(t, e, n));
  else if (r == null && (r = ""), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const n = Bc(t, e);
    Ei.test(r) ? t.setProperty(
      zt(n),
      r.replace(Ei, ""),
      "important"
    ) : t[n] = r;
  }
}
const Ti = ["Webkit", "Moz", "ms"], es = {};
function Bc(t, e) {
  const r = es[e];
  if (r)
    return r;
  let n = Ye(e);
  if (n !== "filter" && n in t)
    return es[e] = n;
  n = Po(n);
  for (let s = 0; s < Ti.length; s++) {
    const i = Ti[s] + n;
    if (i in t)
      return es[e] = i;
  }
  return e;
}
function Hc(t, e, r, n) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && Se(n) && r === n;
}
const Ci = "http://www.w3.org/1999/xlink";
function Ri(t, e, r, n, s, i = il(e)) {
  n && e.startsWith("xlink:") ? r == null ? t.removeAttributeNS(Ci, e.slice(6, e.length)) : t.setAttributeNS(Ci, e, r) : r == null || i && !Io(r) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : ht(r) ? String(r) : r
  );
}
function Ai(t, e, r, n, s) {
  if (e === "innerHTML" || e === "textContent") {
    r != null && (t[e] = e === "innerHTML" ? ka(r) : r);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? t.getAttribute("value") || "" : t.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in t)) && (t.value = l), r == null && t.removeAttribute(e), t._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const a = typeof t[e];
    a === "boolean" ? r = Io(r) : r == null && a === "string" ? (r = "", o = !0) : a === "number" && (r = 0, o = !0);
  }
  try {
    t[e] = r;
  } catch {
  }
  o && t.removeAttribute(s || e);
}
function nr(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function qc(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
const Oi = /* @__PURE__ */ Symbol("_vei");
function Fc(t, e, r, n, s = null) {
  const i = t[Oi] || (t[Oi] = {}), o = i[e];
  if (n && o)
    o.value = n;
  else {
    const [a, l] = Wc(e);
    if (n) {
      const c = i[e] = zc(
        n,
        s
      );
      nr(t, a, c, l);
    } else o && (qc(t, a, o, l), i[e] = void 0);
  }
}
const xi = /(?:Once|Passive|Capture)$/;
function Wc(t) {
  let e;
  if (xi.test(t)) {
    e = {};
    let n;
    for (; n = t.match(xi); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : zt(t.slice(2)), e];
}
let ts = 0;
const Kc = /* @__PURE__ */ Promise.resolve(), Vc = () => ts || (Kc.then(() => ts = 0), ts = Date.now());
function zc(t, e) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    St(
      Jc(n, r.value),
      e,
      5,
      [n]
    );
  };
  return r.value = t, r.attached = Vc(), r;
}
function Jc(t, e) {
  if (ne(e)) {
    const r = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      r.call(t), t._stopped = !0;
    }, e.map(
      (n) => (s) => !s._stopped && n && n(s)
    );
  } else
    return e;
}
const Pi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Gc = (t, e, r, n, s, i) => {
  const o = s === "svg";
  e === "class" ? Lc(t, n, o) : e === "style" ? Mc(t, r, n) : jn(e) ? Ln(e) || Fc(t, e, r, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Yc(t, e, n, o)) ? (Ai(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Ri(t, e, n, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xc(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Se(n))) ? Ai(t, Ye(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), Ri(t, e, n, o));
};
function Yc(t, e, r, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Pi(e) && de(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Pi(e) && Se(r) ? !1 : e in t;
}
function Xc(t, e) {
  const r = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!r)
    return !1;
  const n = Ye(e);
  return Array.isArray(r) ? r.some((s) => Ye(s) === n) : Object.keys(r).some((s) => Ye(s) === n);
}
const $i = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ne(e) ? (r) => gn(e, r) : e;
};
function Qc(t) {
  t.target.composing = !0;
}
function Ii(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const rs = /* @__PURE__ */ Symbol("_assign");
function ji(t, e, r) {
  return e && (t = t.trim()), r && (t = Us(t)), t;
}
const Rn = {
  created(t, { modifiers: { lazy: e, trim: r, number: n } }, s) {
    t[rs] = $i(s);
    const i = n || s.props && s.props.type === "number";
    nr(t, e ? "change" : "input", (o) => {
      o.target.composing || t[rs](ji(t.value, r, i));
    }), (r || i) && nr(t, "change", () => {
      t.value = ji(t.value, r, i);
    }), e || (nr(t, "compositionstart", Qc), nr(t, "compositionend", Ii), nr(t, "change", Ii));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: r, modifiers: { lazy: n, trim: s, number: i } }, o) {
    if (t[rs] = $i(o), t.composing) return;
    const a = (i || t.type === "number") && !/^0\d/.test(t.value) ? Us(t.value) : t.value, l = e ?? "";
    if (a === l)
      return;
    const c = t.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === t && t.type !== "range" && (n && e === r || s && t.value.trim() === l) || (t.value = l);
  }
}, Zc = ["ctrl", "shift", "alt", "meta"], eu = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => Zc.some((r) => t[`${r}Key`] && !e.includes(r))
}, ze = (t, e) => {
  if (!t) return t;
  const r = t._withMods || (t._withMods = {}), n = e.join(".");
  return r[n] || (r[n] = ((s, ...i) => {
    for (let o = 0; o < e.length; o++) {
      const a = eu[e[o]];
      if (a && a(s, e)) return;
    }
    return t(s, ...i);
  }));
}, tu = /* @__PURE__ */ Ze({ patchProp: Gc }, Ic);
let Li;
function ru() {
  return Li || (Li = dc(tu));
}
const nu = ((...t) => {
  const e = ru().createApp(...t), { mount: r } = e;
  return e.mount = (n) => {
    const s = iu(n);
    if (!s) return;
    const i = e._component;
    !de(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = r(s, !1, su(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, e;
});
function su(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function iu(t) {
  return Se(t) ? document.querySelector(t) : t;
}
function Fn(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function ou(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? i(u.value) : s(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
const au = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e);
class ti extends Error {
  constructor(e, r = "FunctionsError", n) {
    super(e), this.name = r, this.context = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class lu extends ti {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class Ni extends ti {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Di extends ti {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var ks;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(ks || (ks = {}));
class cu {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.functions.invoke('hello-world')
   * ```
   *
   * @category Edge Functions
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'your-publishable-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(e, { headers: r = {}, customFetch: n, region: s = ks.Any } = {}) {
    this.url = e, this.headers = r, this.region = s, this.fetch = au(n);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   *
   * @category Edge Functions
   *
   * @example Setting the authorization header
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   *
   * @category Edge Functions
   *
   * @remarks
   * - Requires an Authorization header.
   * - Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.
   * - When you pass in a body to your function, we automatically attach the Content-Type header for `Blob`, `ArrayBuffer`, `File`, `FormData` and `String`. If it doesn't match any of these types we assume the payload is `json`, serialize it and attach the `Content-Type` header as `application/json`. You can override this behavior by passing in a `Content-Type` header of your own.
   * - Responses are automatically parsed as `json`, `blob` and `form-data` depending on the `Content-Type` header sent by your function. Responses are parsed as `text` by default.
   *
   * @example Basic invocation
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Error handling
   * A `FunctionsHttpError` error is returned if your function throws an error, `FunctionsRelayError` if the Supabase Relay has an error processing your function and `FunctionsFetchError` if there is a network error in calling your function.
   *
   * @example Error handling
   * ```js
   * import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js";
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   *
   * if (error instanceof FunctionsHttpError) {
   *   const errorMessage = await error.context.json()
   *   console.log('Function returned an error', errorMessage)
   * } else if (error instanceof FunctionsRelayError) {
   *   console.log('Relay error:', error.message)
   * } else if (error instanceof FunctionsFetchError) {
   *   console.log('Fetch error:', error.message)
   * }
   * ```
   *
   * @exampleDescription Passing custom headers
   * You can pass custom headers to your function. Note: supabase-js automatically passes the `Authorization` header with the signed in user's JWT.
   *
   * @example Passing custom headers
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Calling with DELETE HTTP verb
   * You can also set the HTTP verb to `DELETE` when calling your Edge Function.
   *
   * @example Calling with DELETE HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' },
   *   method: 'DELETE'
   * })
   * ```
   *
   * @exampleDescription Invoking a Function in the UsEast1 region
   * Here are the available regions:
   * - `FunctionRegion.Any`
   * - `FunctionRegion.ApNortheast1`
   * - `FunctionRegion.ApNortheast2`
   * - `FunctionRegion.ApSouth1`
   * - `FunctionRegion.ApSoutheast1`
   * - `FunctionRegion.ApSoutheast2`
   * - `FunctionRegion.CaCentral1`
   * - `FunctionRegion.EuCentral1`
   * - `FunctionRegion.EuWest1`
   * - `FunctionRegion.EuWest2`
   * - `FunctionRegion.EuWest3`
   * - `FunctionRegion.SaEast1`
   * - `FunctionRegion.UsEast1`
   * - `FunctionRegion.UsWest1`
   * - `FunctionRegion.UsWest2`
   *
   * @example Invoking a Function in the UsEast1 region
   * ```js
   * import { createClient, FunctionRegion } from '@supabase/supabase-js'
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' },
   *   region: FunctionRegion.UsEast1
   * })
   * ```
   *
   * @exampleDescription Calling with GET HTTP verb
   * You can also set the HTTP verb to `GET` when calling your Edge Function.
   *
   * @example Calling with GET HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   method: 'GET'
   * })
   * ```
   *
   * @example Standalone client invoke
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(e) {
    return ou(this, arguments, void 0, function* (r, n = {}) {
      var s;
      let i, o;
      try {
        const { headers: a, method: l, body: c, signal: u, timeout: h } = n;
        let d = {}, { region: f } = n;
        f || (f = this.region);
        const g = new URL(`${this.url}/${r}`);
        f && f !== "any" && (d["x-region"] = f, g.searchParams.set("forceFunctionRegion", f));
        let v;
        c && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (d["Content-Type"] = "application/octet-stream", v = c) : typeof c == "string" ? (d["Content-Type"] = "text/plain", v = c) : typeof FormData < "u" && c instanceof FormData ? v = c : (d["Content-Type"] = "application/json", v = JSON.stringify(c)) : c && typeof c != "string" && !(typeof Blob < "u" && c instanceof Blob) && !(c instanceof ArrayBuffer) && !(typeof FormData < "u" && c instanceof FormData) ? v = JSON.stringify(c) : v = c;
        let y = u;
        h && (o = new AbortController(), i = setTimeout(() => o.abort(), h), u ? (y = o.signal, u.addEventListener("abort", () => o.abort())) : y = o.signal);
        const b = yield this.fetch(g.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, d), this.headers), a),
          body: v,
          signal: y
        }).catch((H) => {
          throw new lu(H);
        }), w = b.headers.get("x-relay-error");
        if (w && w === "true")
          throw new Ni(b);
        if (!b.ok)
          throw new Di(b);
        let S = ((s = b.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), C;
        return S === "application/json" ? C = yield b.json() : S === "application/octet-stream" || S === "application/pdf" ? C = yield b.blob() : S === "text/event-stream" ? C = b : S === "multipart/form-data" ? C = yield b.formData() : C = yield b.text(), { data: C, error: null, response: b };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Di || a instanceof Ni ? a.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const Ea = 3, Ui = (t) => Math.min(1e3 * 2 ** t, 3e4), uu = [520, 503], Ta = [
  "GET",
  "HEAD",
  "OPTIONS"
];
var hu = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(t) {
    super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
function Mi(t, e) {
  return new Promise((r) => {
    if (e?.aborted) {
      r();
      return;
    }
    const n = setTimeout(() => {
      e?.removeEventListener("abort", s), r();
    }, t);
    function s() {
      clearTimeout(n), r();
    }
    e?.addEventListener("abort", s);
  });
}
function du(t, e, r, n) {
  return !(!n || r >= Ea || !Ta.includes(t) || !uu.includes(e));
}
var fu = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  constructor(t) {
    var e, r, n, s, i;
    this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = t.method, this.url = t.url, this.headers = new Headers(t.headers), this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1, this.signal = t.signal, this.isMaybeSingle = (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.shouldStripNulls = (n = t.shouldStripNulls) !== null && n !== void 0 ? n : !1, this.urlLengthLimit = (s = t.urlLengthLimit) !== null && s !== void 0 ? s : 8e3, this.retryEnabled = (i = t.retry) !== null && i !== void 0 ? i : !0, t.fetch ? this.fetch = t.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Strip null values from the response data. Properties with `null` values
  * will be omitted from the returned JSON objects.
  *
  * Requires PostgREST 11.2.0+.
  *
  * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .stripNulls()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text, bio text);
  *
  * insert into
  *   characters (id, name, bio)
  * values
  *   (1, 'Luke', null),
  *   (2, 'Leia', 'Princess of Alderaan');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia",
  *       "bio": "Princess of Alderaan"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
    return this.shouldStripNulls = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  *
  * @category Database
  */
  setHeader(t, e) {
    return this.headers = new Headers(this.headers), this.headers.set(t, e), this;
  }
  /**
  * @category Database
  *
  * Configure retry behavior for this request.
  *
  * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
  * that fail with network errors or specific HTTP status codes (503, 520).
  * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
  *
  * @param enabled - Whether to enable retries for this request
  *
  * @example
  * ```ts
  * // Disable retries for a specific query
  * const { data, error } = await supabase
  *   .from('users')
  *   .select()
  *   .retry(false)
  * ```
  */
  retry(t) {
    return this.retryEnabled = t, this;
  }
  then(t, e) {
    var r = this;
    if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
      const o = this.headers.get("Accept");
      o === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!o || o === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
    }
    const n = this.fetch;
    let i = (async () => {
      let o = 0;
      for (; ; ) {
        const c = new Headers(r.headers);
        o > 0 && c.set("X-Retry-Count", String(o));
        let u;
        try {
          u = await n(r.url.toString(), {
            method: r.method,
            headers: c,
            body: JSON.stringify(r.body, (h, d) => typeof d == "bigint" ? d.toString() : d),
            signal: r.signal
          });
        } catch (h) {
          if (h?.name === "AbortError" || h?.code === "ABORT_ERR" || !Ta.includes(r.method)) throw h;
          if (r.retryEnabled && o < Ea) {
            const d = Ui(o);
            o++, await Mi(d, r.signal);
            continue;
          }
          throw h;
        }
        if (du(r.method, u.status, o, r.retryEnabled)) {
          var a, l;
          const h = (a = (l = u.headers) === null || l === void 0 ? void 0 : l.get("Retry-After")) !== null && a !== void 0 ? a : null, d = h !== null ? Math.max(0, parseInt(h, 10) || 0) * 1e3 : Ui(o);
          await u.text(), o++, await Mi(d, r.signal);
          continue;
        }
        return await r.processResponse(u);
      }
    })();
    return this.shouldThrowOnError || (i = i.catch((o) => {
      var a;
      let l = "", c = "", u = "";
      const h = o?.cause;
      if (h) {
        var d, f, g, v;
        const w = (d = h?.message) !== null && d !== void 0 ? d : "", S = (f = h?.code) !== null && f !== void 0 ? f : "";
        l = `${(g = o?.name) !== null && g !== void 0 ? g : "FetchError"}: ${o?.message}`, l += `

Caused by: ${(v = h?.name) !== null && v !== void 0 ? v : "Error"}: ${w}`, S && (l += ` (${S})`), h?.stack && (l += `
${h.stack}`);
      } else {
        var y;
        l = (y = o?.stack) !== null && y !== void 0 ? y : "";
      }
      const b = this.url.toString().length;
      return o?.name === "AbortError" || o?.code === "ABORT_ERR" ? (u = "", c = "Request was aborted (timeout or manual cancellation)", b > this.urlLengthLimit && (c += `. Note: Your request URL is ${b} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (h?.name === "HeadersOverflowError" || h?.code === "UND_ERR_HEADERS_OVERFLOW") && (u = "", c = "HTTP headers exceeded server limits (typically 16KB)", b > this.urlLengthLimit && (c += `. Your request URL is ${b} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        success: !1,
        error: {
          message: `${(a = o?.name) !== null && a !== void 0 ? a : "FetchError"}: ${o?.message}`,
          details: l,
          hint: c,
          code: u
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(t, e);
  }
  /**
  * Process a fetch response and return the standardized postgrest response.
  */
  async processResponse(t) {
    var e = this;
    let r = null, n = null, s = null, i = t.status, o = t.statusText;
    if (t.ok) {
      var a, l;
      if (e.method !== "HEAD") {
        var c;
        const d = await t.text();
        d === "" || (e.headers.get("Accept") === "text/csv" || e.headers.get("Accept") && (!((c = e.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? n = d : n = JSON.parse(d));
      }
      const u = (a = e.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), h = (l = t.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
      u && h && h.length > 1 && (s = parseInt(h[1])), e.isMaybeSingle && Array.isArray(n) && (n.length > 1 ? (r = {
        code: "PGRST116",
        details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
        hint: null,
        message: "JSON object requested, multiple (or no) rows returned"
      }, n = null, s = null, i = 406, o = "Not Acceptable") : n.length === 1 ? n = n[0] : n = null);
    } else {
      const u = await t.text();
      try {
        r = JSON.parse(u), Array.isArray(r) && t.status === 404 && (n = [], r = null, i = 200, o = "OK");
      } catch {
        t.status === 404 && u === "" ? (i = 204, o = "No Content") : r = { message: u };
      }
      if (r && e.shouldThrowOnError) throw new hu(r);
    }
    return {
      success: r === null,
      error: r,
      data: n,
      count: s,
      status: i,
      statusText: o
    };
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Complete Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<MyType>, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of successful response
  * ```ts
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Complete Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<MyType, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of object response
  * ```ts
  * let x: typeof data // MyType | null
  * ```
  *
  * @example Partial Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<{ status: "A" | "B" }>>()
  * ```
  *
  * @exampleResponse Partial Override type of successful response
  * ```ts
  * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
  * ```
  *
  * @example Partial Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<{ status: "A" | "B" }>()
  * ```
  *
  * @exampleResponse Partial Override type of object response
  * ```ts
  * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
  * ```
  *
  * @example Merge vs replace existing types
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  */
  overrideTypes() {
    return this;
  }
}, pu = class extends fu {
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `upsert()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .upsert({ id: 1, name: 'Han Solo' })
  *   .select()
  * ```
  *
  * @exampleSql With `upsert()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Han');
  * ```
  *
  * @exampleResponse With `upsert()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Han Solo"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  */
  select(t) {
    let e = !1;
    const r = (t ?? "*").split("").map((n) => /\s/.test(n) && !e ? "" : (n === '"' && (e = !e), n)).join("");
    return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('id, name')
  *   .order('id', { ascending: false })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On a referenced table
  * Ordering with `referencedTable` doesn't affect the ordering of the
  * parent table.
  *
  * @example On a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('orchestral_sections')
  *     .select(`
  *       name,
  *       instruments (
  *         name
  *       )
  *     `)
  *     .order('name', { referencedTable: 'instruments', ascending: false })
  *
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         },
  *         {
  *           "name": "harp"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": []
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Order parent table by a referenced table
  * Ordering with `referenced_table(col)` affects the ordering of the
  * parent table.
  *
  * @example Order parent table by a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('instruments')
  *     .select(`
  *       name,
  *       section:orchestral_sections (
  *         name
  *       )
  *     `)
  *     .order('section(name)', { ascending: true })
  *
  * ```
  *
  * @exampleSql Order parent table by a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Order parent table by a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "violin",
  *       "orchestral_sections": {"name": "strings"}
  *     },
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  order(t, { ascending: e = !0, nullsFirst: r, foreignTable: n, referencedTable: s = n } = {}) {
    const i = s ? `${s}.order` : "order", o = this.url.searchParams.get(i);
    return this.url.searchParams.set(i, `${o ? `${o},` : ""}${t}.${e ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `count`.
  *
  * @param count - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  *   .limit(1, { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  limit(t, { foreignTable: e, referencedTable: r = e } = {}) {
    const n = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${t}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .range(0, 1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     },
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  range(t, e, { foreignTable: r, referencedTable: n = r } = {}) {
    const s = typeof n > "u" ? "offset" : `${n}.offset`, i = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(s, `${t}`), this.url.searchParams.set(i, `${e - t + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * You can use this to set a timeout for the request.
  *
  * @exampleDescription Aborting requests in-flight
  * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
  * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
  *
  * @example Aborting requests in-flight
  * ```ts
  * const ac = new AbortController()
  *
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(ac.signal)
  *
  * // Abort the request after 100 ms
  * setTimeout(() => ac.abort(), 100)
  * ```
  *
  * @exampleResponse Aborting requests in-flight
  * ```json
  *   {
  *     "error": {
  *       "message": "AbortError: The user aborted a request.",
  *       "details": "",
  *       "hint": "The request was aborted locally via the provided AbortSignal.",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  *
  * @example Set a timeout
  * ```ts
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
  * ```
  *
  * @exampleResponse Set a timeout
  * ```json
  *   {
  *     "error": {
  *       "message": "FetchError: The user aborted a request.",
  *       "details": "",
  *       "hint": "",
  *       "code": ""
  *     },
  *     "status": 400,
  *     "statusText": "Bad Request"
  *   }
  *
  * ```
  */
  abortSignal(t) {
    return this.signal = t, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  *   .single()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": {
  *     "name": "Luke"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Katniss')
  *   .maybeSingle()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  maybeSingle() {
    return this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Return data as CSV
  * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
  *
  * @example Return data as CSV
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .csv()
  * ```
  *
  * @exampleSql Return data as CSV
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Return data as CSV
  * ```json
  * {
  *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  *
  * @category Database
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Get the execution plan
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain()
  * ```
  *
  * @exampleSql Get the execution plan
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
  *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
  * ```
  *
  * @exampleDescription Get the execution plan with analyze and verbose
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan with analyze and verbose
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain({analyze:true,verbose:true})
  * ```
  *
  * @exampleSql Get the execution plan with analyze and verbose
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan with analyze and verbose
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
  *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
  *         Output: characters.id, characters.name
  *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
  *               Output: characters.id, characters.name
  * Query Identifier: -4730654291623321173
  * Planning Time: 0.407 ms
  * Execution Time: 0.119 ms
  * ```
  */
  explain({ analyze: t = !1, verbose: e = !1, settings: r = !1, buffers: n = !1, wal: s = !1, format: i = "text" } = {}) {
    var o;
    const a = [
      t ? "analyze" : null,
      e ? "verbose" : null,
      r ? "settings" : null,
      n ? "buffers" : null,
      s ? "wal" : null
    ].filter(Boolean).join("|"), l = (o = this.headers.get("Accept")) !== null && o !== void 0 ? o : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`), i === "json" ? this : this;
  }
  /**
  * Rollback the query.
  *
  * `data` will still be returned, but the query is not committed.
  *
  * @category Database
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * - Deprecated: use overrideTypes method instead
  *
  * @example Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .returns<Array<MyType>>()
  * ```
  *
  * @exampleResponse Override type of successful response
  * ```js
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .returns<MyType>()
  * ```
  *
  * @exampleResponse Override type of object response
  * ```js
  * let x: typeof data // MyType | null
  * ```
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param value - The maximum number of rows that can be affected
  *
  * @category Database
  */
  maxAffected(t) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${t}`), this;
  }
};
const Bi = /* @__PURE__ */ new RegExp("[,()]");
var sr = class extends pu {
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  eq(t, e) {
    return this.url.searchParams.append(t, `eq.${e}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * This filter does not include rows where `column` is `NULL`. To match null
  * values, use `.is(column, null)` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .neq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  neq(t, e) {
    return this.url.searchParams.append(t, `neq.${e}`), this;
  }
  /**
  * Match only rows where `column` is greater than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * When using [reserved words](https://www.postgresql.org/docs/current/sql-keywords-appendix.html) for column names you need
  * to add double quotes e.g. `.gt('"order"', 2)`
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gt(t, e) {
    return this.url.searchParams.append(t, `gt.${e}`), this;
  }
  /**
  * Match only rows where `column` is greater than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .gte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  gte(t, e) {
    return this.url.searchParams.append(t, `gte.${e}`), this;
  }
  /**
  * Match only rows where `column` is less than `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lt('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lt(t, e) {
    return this.url.searchParams.append(t, `lt.${e}`), this;
  }
  /**
  * Match only rows where `column` is less than or equal to `value`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .lte('id', 2)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  lte(t, e) {
    return this.url.searchParams.append(t, `lte.${e}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-sensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .like('name', '%Lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  like(t, e) {
    return this.url.searchParams.append(t, `like.${e}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAllOf(t, e) {
    return this.url.searchParams.append(t, `like(all).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-sensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  likeAnyOf(t, e) {
    return this.url.searchParams.append(t, `like(any).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches `pattern` case-insensitively.
  *
  * @param column - The column to filter on
  * @param pattern - The pattern to match with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .ilike('name', '%lu%')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  ilike(t, e) {
    return this.url.searchParams.append(t, `ilike.${e}`), this;
  }
  /**
  * Match only rows where `column` matches all of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAllOf(t, e) {
    return this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches any of `patterns` case-insensitively.
  *
  * @param column - The column to filter on
  * @param patterns - The patterns to match with
  *
  * @category Database
  * @subcategory Using filters
  */
  ilikeAnyOf(t, e) {
    return this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-sensitively (using the `~` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexMatch(t, e) {
    return this.url.searchParams.append(t, `match.${e}`), this;
  }
  /**
  * Match only rows where `column` matches the PostgreSQL regex `pattern`
  * case-insensitively (using the `~*` operator).
  *
  * @param column - The column to filter on
  * @param pattern - The PostgreSQL regular expression pattern to match with
  */
  regexIMatch(t, e) {
    return this.url.searchParams.append(t, `imatch.${e}`), this;
  }
  /**
  * Match only rows where `column` IS `value`.
  *
  * For non-boolean columns, this is only relevant for checking if the value of
  * `column` is NULL by setting `value` to `null`.
  *
  * For boolean columns, you can also set `value` to `true` or `false` and it
  * will behave the same way as `.eq()`.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription Checking for nullness, true or false
  * Using the `eq()` filter doesn't work when filtering for `null`.
  *
  * Instead, you need to use `is()`.
  *
  * @example Checking for nullness, true or false
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .is('name', null)
  * ```
  *
  * @exampleSql Checking for nullness, true or false
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse Checking for nullness, true or false
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "null"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  is(t, e) {
    return this.url.searchParams.append(t, `is.${e}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(t, e) {
    return this.url.searchParams.append(t, `isdistinct.${e}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .in('name', ['Leia', 'Han'])
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  in(t, e) {
    const r = Array.from(new Set(e)).map((n) => typeof n == "string" && Bi.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(t, e) {
    const r = Array.from(new Set(e)).map((n) => typeof n == "string" && Bi.test(n) ? `"${n}"` : `${n}`).join(",");
    return this.url.searchParams.append(t, `not.in.(${r})`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * `column` contains every element appearing in `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select()
  *   .contains('tags', ['is:open', 'priority:low'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .contains('address', { postcode: 90210 })
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Michael"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  contains(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `cs.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`), this;
  }
  /**
  * Only relevant for jsonb, array, and range columns. Match only rows where
  * every element appearing in `column` is contained by `value`.
  *
  * @param column - The jsonb, array, or range column to filter on
  * @param value - The jsonb, array, or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('classes')
  *   .select('name')
  *   .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   classes (
  *     id int8 primary key,
  *     name text,
  *     days text[]
  *   );
  *
  * insert into
  *   classes (id, name, days)
  * values
  *   (1, 'Chemistry', array['monday', 'friday']),
  *   (2, 'History', array['monday', 'wednesday', 'thursday']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Chemistry"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .containedBy('during', '[2000-01-01 00:00, 2000-01-01 23:59)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On `jsonb` columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select('name')
  *   .containedBy('address', {})
  * ```
  *
  * @exampleSql On `jsonb` columns
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
  *   (2, 'Jane', '{}');
  * ```
  *
  * @exampleResponse On `jsonb` columns
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Jane"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  containedBy(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `cd.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is greater than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGt(t, e) {
    return this.url.searchParams.append(t, `sr.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or greater than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 2,
  *         "room_name": "Topaz",
  *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeGte(t, e) {
    return this.url.searchParams.append(t, `nxl.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is less than any element in `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeLt(t, e) {
    return this.url.searchParams.append(t, `sl.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where every element in
  * `column` is either contained in `range` or less than any element in
  * `range`.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeLte('during', '[2000-01-01 14:00, 2000-01-01 16:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "room_name": "Emerald",
  *         "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  rangeLte(t, e) {
    return this.url.searchParams.append(t, `nxr.${e}`), this;
  }
  /**
  * Only relevant for range columns. Match only rows where `column` is
  * mutually exclusive to `range` and there can be no element between the two
  * ranges.
  *
  * @param column - The range column to filter on
  * @param range - The range to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @exampleDescription With `select()`
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rangeAdjacent(t, e) {
    return this.url.searchParams.append(t, `adj.${e}`), this;
  }
  /**
  * Only relevant for array and range columns. Match only rows where
  * `column` and `value` have an element in common.
  *
  * @param column - The array or range column to filter on
  * @param value - The array or range value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example On array columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('issues')
  *   .select('title')
  *   .overlaps('tags', ['is:closed', 'severity:high'])
  * ```
  *
  * @exampleSql On array columns
  * ```sql
  * create table
  *   issues (
  *     id int8 primary key,
  *     title text,
  *     tags text[]
  *   );
  *
  * insert into
  *   issues (id, title, tags)
  * values
  *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
  *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
  * ```
  *
  * @exampleResponse On array columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "title": "Cache invalidation is not working"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On range columns
  * Postgres supports a number of [range
  * types](https://www.postgresql.org/docs/current/rangetypes.html). You
  * can filter on range columns using the string representation of range
  * values.
  *
  * @example On range columns
  * ```ts
  * const { data, error } = await supabase
  *   .from('reservations')
  *   .select()
  *   .overlaps('during', '[2000-01-01 12:45, 2000-01-01 13:15)')
  * ```
  *
  * @exampleSql On range columns
  * ```sql
  * create table
  *   reservations (
  *     id int8 primary key,
  *     room_name text,
  *     during tsrange
  *   );
  *
  * insert into
  *   reservations (id, room_name, during)
  * values
  *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
  *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
  * ```
  *
  * @exampleResponse On range columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "room_name": "Emerald",
  *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  overlaps(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `ov.${e}`) : this.url.searchParams.append(t, `ov.{${e.join(",")}}`), this;
  }
  /**
  * Only relevant for text and tsvector columns. Match only rows where
  * `column` matches the query string in `query`.
  *
  * @param column - The text or tsvector column to filter on
  * @param query - The query text to match with
  * @param options - Named parameters
  * @param options.config - The text search configuration to use
  * @param options.type - Change how the `query` text is interpreted
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * - For more information, see [Postgres full text search](/docs/guides/database/full-text-search).
  *
  * @example Text search
  * ```ts
  * const result = await supabase
  *   .from("texts")
  *   .select("content")
  *   .textSearch("content", `'eggs' & 'ham'`, {
  *     config: "english",
  *   });
  * ```
  *
  * @exampleSql Text search
  * ```sql
  * create table texts (
  *   id      bigint
  *           primary key
  *           generated always as identity,
  *   content text
  * );
  *
  * insert into texts (content) values
  *     ('Four score and seven years ago'),
  *     ('The road goes ever on and on'),
  *     ('Green eggs and ham')
  * ;
  * ```
  *
  * @exampleResponse Text search
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "Green eggs and ham"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Basic normalization
  * Uses PostgreSQL's `plainto_tsquery` function.
  *
  * @example Basic normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'plain',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Full normalization
  * Uses PostgreSQL's `phraseto_tsquery` function.
  *
  * @example Full normalization
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat' & 'cat'`, {
  *     type: 'phrase',
  *     config: 'english'
  *   })
  * ```
  *
  * @exampleDescription Websearch
  * Uses PostgreSQL's `websearch_to_tsquery` function.
  * This function will never raise syntax errors, which makes it possible to use raw user-supplied input for search, and can be used
  * with advanced operators.
  *
  * - `unquoted text`: text not inside quote marks will be converted to terms separated by & operators, as if processed by plainto_tsquery.
  * - `"quoted text"`: text inside quote marks will be converted to terms separated by `<->` operators, as if processed by phraseto_tsquery.
  * - `OR`: the word “or” will be converted to the | operator.
  * - `-`: a dash will be converted to the ! operator.
  *
  * @example Websearch
  * ```ts
  * const { data, error } = await supabase
  *   .from('quotes')
  *   .select('catchphrase')
  *   .textSearch('catchphrase', `'fat or cat'`, {
  *     type: 'websearch',
  *     config: 'english'
  *   })
  * ```
  */
  textSearch(t, e, { config: r, type: n } = {}) {
    let s = "";
    n === "plain" ? s = "pl" : n === "phrase" ? s = "ph" : n === "websearch" && (s = "w");
    const i = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(t, `${s}fts${i}.${e}`), this;
  }
  /**
  * Match only rows where each column in `query` keys is equal to its
  * associated value. Shorthand for multiple `.eq()`s.
  *
  * @param query - The object to filter with, with column names as keys mapped
  * to their filter values
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .match({ id: 2, name: 'Leia' })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  match(t) {
    return Object.entries(t).filter(([e, r]) => r !== void 0).forEach(([e, r]) => {
      this.url.searchParams.append(e, `eq.${r}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * not() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .not('name', 'is', null)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "name": "null"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  not(t, e, r) {
    return this.url.searchParams.append(t, `not.${e}.${r}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * or() expects you to use the raw PostgREST syntax for the filter names and values.
  *
  * ```ts
  * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
  * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.eq.2,name.eq.Han')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     },
  *     {
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` with `and`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
  * ```
  *
  * @exampleSql Use `or` with `and`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Use `or` with `and`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` on referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql Use `or` on referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Use `or` on referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  or(t, { foreignTable: e, referencedTable: r = e } = {}) {
    const n = r ? `${r}.or` : "or";
    return this.url.searchParams.append(n, `(${t})`), this;
  }
  /**
  * Match only rows which satisfy the filter. This is an escape hatch - you
  * should use the specific filter methods wherever possible.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to filter with, following PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * filter() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .filter('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .filter('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .filter('name', 'in', '("Han","Yoda")')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .filter('instruments.name', 'eq', 'flute')
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *    instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  filter(t, e, r) {
    return this.url.searchParams.append(t, `${e}.${r}`), this;
  }
}, gu = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  constructor(t, { headers: e = {}, schema: r, fetch: n, urlLengthLimit: s = 8e3, retry: i }) {
    this.url = t, this.headers = new Headers(e), this.schema = r, this.fetch = n, this.urlLengthLimit = s, this.retry = i;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  
  * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
  * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
  * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
  * @category Database
  *
  * @example Getting your data
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  * ```
  *
  * @exampleSql Getting your data
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Harry'),
  *   (2, 'Frodo'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Getting your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Harry"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Frodo"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Selecting specific columns
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  * ```
  *
  * @exampleSql Selecting specific columns
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Frodo'),
  *   (2, 'Harry'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Selecting specific columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Frodo"
  *     },
  *     {
  *       "name": "Harry"
  *     },
  *     {
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables
  * If your database has foreign key relationships, you can query related tables too.
  *
  * @example Query referenced tables
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables with spaces in their names
  * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
  *
  * @example Query referenced tables with spaces in their names
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral sections')
  *   .select(`
  *     name,
  *     "musical instruments" (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables with spaces in their names
  * ```sql
  * create table
  *   "orchestral sections" (id int8 primary key, name text);
  * create table
  *   "musical instruments" (
  *     id int8 primary key,
  *     section_id int8 not null references "orchestral sections",
  *     name text
  *   );
  *
  * insert into
  *   "orchestral sections" (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   "musical instruments" (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables with spaces in their names
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "musical instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "musical instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables through a join table
  * If you're in a situation where your tables are **NOT** directly
  * related, but instead are joined by a _join table_, you can still use
  * the `select()` method to query the related data. The join table needs
  * to have the foreign keys as part of its composite primary key.
  *
  * @example Query referenced tables through a join table
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     name,
  *     teams (
  *       name
  *     )
  *   `)
  *   
  * ```
  *
  * @exampleSql Query referenced tables through a join table
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *     -- both foreign keys must be part of a composite primary key
  *     primary key (user_id, team_id)
  *   );
  *
  * insert into
  *   users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * ```
  *
  * @exampleResponse Query referenced tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Kiran",
  *         "teams": [
  *           {
  *             "name": "Green"
  *           },
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       },
  *       {
  *         "name": "Evan",
  *         "teams": [
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Query the same referenced table multiple times
  * If you need to query the same referenced table twice, use the name of the
  * joined column to identify which join to use. You can also give each
  * column an alias.
  *
  * @example Query the same referenced table multiple times
  * ```ts
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:sender_id(name),
  *     to:receiver_id(name)
  *   `)
  *
  * // To infer types, use the name of the table (in this case `users`) and
  * // the name of the foreign key constraint.
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:users!messages_sender_id_fkey(name),
  *     to:users!messages_receiver_id_fkey(name)
  *   `)
  * ```
  *
  * @exampleSql Query the same referenced table multiple times
  * ```sql
  *  create table
  *  users (id int8 primary key, name text);
  *
  *  create table
  *    messages (
  *      sender_id int8 not null references users,
  *      receiver_id int8 not null references users,
  *      content text
  *    );
  *
  *  insert into
  *    users (id, name)
  *  values
  *    (1, 'Kiran'),
  *    (2, 'Evan');
  *
  *  insert into
  *    messages (sender_id, receiver_id, content)
  *  values
  *    (1, 2, '👋');
  *  ```
  * ```
  *
  * @exampleResponse Query the same referenced table multiple times
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "👋",
  *       "from": {
  *         "name": "Kiran"
  *       },
  *       "to": {
  *         "name": "Evan"
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query nested foreign tables through a join table
  * You can use the result of a joined table to gather data in
  * another foreign table. With multiple references to the same foreign
  * table you must specify the column on which to conduct the join.
  *
  * @example Query nested foreign tables through a join table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('games')
  *     .select(`
  *       game_id:id,
  *       away_team:teams!games_away_team_fkey (
  *         users (
  *           id,
  *           name
  *         )
  *       )
  *     `)
  *   
  * ```
  *
  * @exampleSql Query nested foreign tables through a join table
  * ```sql
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *
  *     primary key (user_id, team_id)
  *   );
  * create table
  *   games (
  *     id int8 primary key,
  *     home_team int8 not null references teams,
  *     away_team int8 not null references teams,
  *     name text
  *   );
  *
  * insert into users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * insert into
  *   games (id, home_team, away_team, name)
  * values
  *   (1, 1, 2, 'Green vs Blue'),
  *   (2, 2, 1, 'Blue vs Green');
  * ```
  *
  * @exampleResponse Query nested foreign tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "game_id": 1,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             },
  *             {
  *               "id": 2,
  *               "name": "Evan"
  *             }
  *           ]
  *         }
  *       },
  *       {
  *         "game_id": 2,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             }
  *           ]
  *         }
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Filtering through referenced tables
  * If the filter on a referenced table's column is not satisfied, the referenced
  * table returns `[]` or `null` but the parent table is not filtered out.
  * If you want to filter out the parent table rows, use the `!inner` hint
  *
  * @example Filtering through referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections(*)')
  *   .eq('orchestral_sections.name', 'percussion')
  * ```
  *
  * @exampleSql Filtering through referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Filtering through referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": null
  *     },
  *     {
  *       "name": "violin",
  *       "orchestral_sections": null
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with count
  * You can get the number of rows in a related table by using the
  * **count** property.
  *
  * @example Querying referenced table with count
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`*, instruments(count)`)
  * ```
  *
  * @exampleSql Querying referenced table with count
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table characters (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('strings') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('violin', (select id from section)),
  * ('viola', (select id from section)),
  * ('cello', (select id from section)),
  * ('double bass', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with count
  * ```json
  * [
  *   {
  *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
  *     "name": "strings",
  *     "instruments": [
  *       {
  *         "count": 4
  *       }
  *     ]
  *   }
  * ]
  * ```
  *
  * @exampleDescription Querying with count option
  * You can get the number of rows by using the
  * [count](/docs/reference/javascript/select#parameters) option.
  *
  * @example Querying with count option
  * ```ts
  * const { count, error } = await supabase
  *   .from('characters')
  *   .select('*', { count: 'exact', head: true })
  * ```
  *
  * @exampleSql Querying with count option
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Querying with count option
  * ```json
  * {
  *   "count": 3,
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying JSON data
  * You can select and filter data inside of
  * [JSON](/docs/guides/database/json) columns. Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * querying JSON data.
  *
  * @example Querying JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     id, name,
  *     address->city
  *   `)
  * ```
  *
  * @exampleSql Querying JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Frodo', '{"city":"Hobbiton"}');
  * ```
  *
  * @exampleResponse Querying JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Frodo",
  *       "city": "Hobbiton"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with inner join
  * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
  * Like `.select('name, orchestral_sections!inner()')`.
  *
  * @example Querying referenced table with inner join
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections!inner(name)')
  *   .eq('orchestral_sections.name', 'woodwinds')
  *   .limit(1)
  * ```
  *
  * @exampleSql Querying referenced table with inner join
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table instruments (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('woodwinds') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('flute', (select id from section)),
  * ('clarinet', (select id from section)),
  * ('bassoon', (select id from section)),
  * ('piccolo', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with inner join
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Switching schemas per query
  * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
  * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
  *
  * @example Switching schemas per query
  * ```ts
  * const { data, error } = await supabase
  *   .schema('myschema')
  *   .from('mytable')
  *   .select()
  * ```
  *
  * @exampleSql Switching schemas per query
  * ```sql
  * create schema myschema;
  *
  * create table myschema.mytable (
  *   id uuid primary key default gen_random_uuid(),
  *   data text
  * );
  *
  * insert into myschema.mytable (data) values ('mydata');
  * ```
  *
  * @exampleResponse Switching schemas per query
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
  *       "data": "mydata"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  select(t, e) {
    const { head: r = !1, count: n } = e ?? {}, s = r ? "HEAD" : "GET";
    let i = !1;
    const o = (t ?? "*").split("").map((c) => /\s/.test(c) && !i ? "" : (c === '"' && (i = !i), c)).join(""), { url: a, headers: l } = this.cloneRequestState();
    return a.searchParams.set("select", o), n && l.append("Prefer", `count=${n}`), new sr({
      method: s,
      url: a,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  *
  * @category Database
  *
  * @example Create a record
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  * ```
  *
  * @exampleSql Create a record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record
  * ```json
  * {
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Create a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  *   .select()
  * ```
  *
  * @exampleSql Create a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Bulk create
  * A bulk create operation is handled in a single transaction.
  * If any of the inserts fail, none of the rows are inserted.
  *
  * @example Bulk create
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert([
  *     { id: 1, name: 'Mordor' },
  *     { id: 1, name: 'The Shire' },
  *   ])
  * ```
  *
  * @exampleSql Bulk create
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Bulk create
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (id)=(1) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  insert(t, { count: e, defaultToNull: r = !0 } = {}) {
    var n;
    const s = "POST", { url: i, headers: o } = this.cloneRequestState();
    if (e && o.append("Prefer", `count=${e}`), r || o.append("Prefer", "missing=default"), Array.isArray(t)) {
      const a = t.reduce((l, c) => l.concat(Object.keys(c)), []);
      if (a.length > 0) {
        const l = [...new Set(a)].map((c) => `"${c}"`);
        i.searchParams.set("columns", l.join(","));
      }
    }
    return new sr({
      method: s,
      url: i,
      headers: o,
      schema: this.schema,
      body: t,
      fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  *
  * @category Database
  *
  * @remarks
  * - Primary keys must be included in `values` to use upsert.
  *
  * @example Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert({ id: 1, name: 'piano' })
  *   .select()
  * ```
  *
  * @exampleSql Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @example Bulk Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert([
  *     { id: 1, name: 'piano' },
  *     { id: 2, name: 'harp' },
  *   ])
  *   .select()
  * ```
  *
  * @exampleSql Bulk Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Bulk Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     },
  *     {
  *       "id": 2,
  *       "name": "harp"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": "Created"
  * }
  * ```
  *
  * @exampleDescription Upserting into tables with constraints
  * In the following query, `upsert()` implicitly uses the `id`
  * (primary key) column to determine conflicts. If there is no existing
  * row with the same `id`, `upsert()` inserts a new row, which
  * will fail in this case as there is already a row with `handle` `"saoirse"`.
  * Using the `onConflict` option, you can instruct `upsert()` to use
  * another column with a unique constraint to determine conflicts.
  *
  * @example Upserting into tables with constraints
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
  *   .select()
  * ```
  *
  * @exampleSql Upserting into tables with constraints
  * ```sql
  * create table
  *   users (
  *     id int8 generated by default as identity primary key,
  *     handle text not null unique,
  *     display_name text
  *   );
  *
  * insert into
  *   users (id, handle, display_name)
  * values
  *   (1, 'saoirse', null);
  * ```
  *
  * @exampleResponse Upserting into tables with constraints
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (handle)=(saoirse) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
  *   },
  *   "status": 409,
  *   "statusText": "Conflict"
  * }
  * ```
  */
  upsert(t, { onConflict: e, ignoreDuplicates: r = !1, count: n, defaultToNull: s = !0 } = {}) {
    var i;
    const o = "POST", { url: a, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), e !== void 0 && a.searchParams.set("on_conflict", e), n && l.append("Prefer", `count=${n}`), s || l.append("Prefer", "missing=default"), Array.isArray(t)) {
      const c = t.reduce((u, h) => u.concat(Object.keys(h)), []);
      if (c.length > 0) {
        const u = [...new Set(c)].map((h) => `"${h}"`);
        a.searchParams.set("columns", u.join(","));
      }
    }
    return new sr({
      method: o,
      url: a,
      headers: l,
      schema: this.schema,
      body: t,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
  *
  * @example Updating your data
  * ```ts
  * const { error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Updating your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Updating your data
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Update a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Update a record and return it
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Update a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Updating JSON data
  * Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * working with JSON data. Currently, it is only possible to update the entire JSON document.
  *
  * @example Updating JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .update({
  *     address: {
  *       street: 'Melrose Place',
  *       postcode: 90210
  *     }
  *   })
  *   .eq('address->postcode', 90210)
  *   .select()
  * ```
  *
  * @exampleSql Updating JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210 }');
  * ```
  *
  * @exampleResponse Updating JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Michael",
  *       "address": {
  *         "street": "Melrose Place",
  *         "postcode": 90210
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  update(t, { count: e } = {}) {
    var r;
    const n = "PATCH", { url: s, headers: i } = this.cloneRequestState();
    return e && i.append("Prefer", `count=${e}`), new sr({
      method: n,
      url: s,
      headers: i,
      schema: this.schema,
      body: t,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
  * - If you use `delete()` with filters and you have
  *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
  *   rows visible through `SELECT` policies are deleted. Note that by default
  *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
  *   makes the rows visible.
  * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
  *
  * @example Delete a single record
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Delete a single record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a single record
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  *
  * @example Delete a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Delete a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Delete multiple records
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .in('id', [1, 2, 3])
  * ```
  *
  * @exampleSql Delete multiple records
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
  * ```
  *
  * @exampleResponse Delete multiple records
  * ```json
  * {
  *   "status": 204,
  *   "statusText": "No Content"
  * }
  * ```
  */
  delete({ count: t } = {}) {
    var e;
    const r = "DELETE", { url: n, headers: s } = this.cloneRequestState();
    return t && s.append("Prefer", `count=${t}`), new sr({
      method: r,
      url: n,
      headers: s,
      schema: this.schema,
      fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function Vr(t) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Vr(t);
}
function mu(t, e) {
  if (Vr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function vu(t) {
  var e = mu(t, "string");
  return Vr(e) == "symbol" ? e : e + "";
}
function yu(t, e, r) {
  return (e = vu(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Hi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function an(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hi(Object(r), !0).forEach(function(n) {
      yu(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hi(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var wu = class Ca {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(e, { headers: r = {}, schema: n, fetch: s, timeout: i, urlLengthLimit: o = 8e3, retry: a } = {}) {
    this.url = e, this.headers = new Headers(r), this.schemaName = n, this.urlLengthLimit = o;
    const l = s ?? globalThis.fetch;
    i !== void 0 && i > 0 ? this.fetch = (c, u) => {
      const h = new AbortController(), d = setTimeout(() => h.abort(), i), f = u?.signal;
      if (f) {
        if (f.aborted)
          return clearTimeout(d), l(c, u);
        const g = () => {
          clearTimeout(d), h.abort();
        };
        return f.addEventListener("abort", g, { once: !0 }), l(c, an(an({}, u), {}, { signal: h.signal })).finally(() => {
          clearTimeout(d), f.removeEventListener("abort", g);
        });
      }
      return l(c, an(an({}, u), {}, { signal: h.signal })).finally(() => clearTimeout(d));
    } : this.fetch = l, this.retry = a;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  *
  * @category Database
  */
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new gu(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  *
  * @category Database
  */
  schema(e) {
    return new Ca(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  *
  * @category Database
  *
  * @example Call a Postgres function without arguments
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world')
  * ```
  *
  * @exampleSql Call a Postgres function without arguments
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function without arguments
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a Postgres function with arguments
  * ```ts
  * const { data, error } = await supabase.rpc('echo', { say: '👋' })
  * ```
  *
  * @exampleSql Call a Postgres function with arguments
  * ```sql
  * create function echo(say text) returns text as $$
  *   select say;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with arguments
  * ```json
  *   {
  *     "data": "👋",
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  *
  * @exampleDescription Bulk processing
  * You can process large payloads by passing in an array as an argument.
  *
  * @example Bulk processing
  * ```ts
  * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
  * ```
  *
  * @exampleSql Bulk processing
  * ```sql
  * create function add_one_each(arr int[]) returns int[] as $$
  *   select array_agg(n + 1) from unnest(arr) as n;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Bulk processing
  * ```json
  * {
  *   "data": [
  *     2,
  *     3,
  *     4
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Call a Postgres function with filters
  * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
  *
  * @example Call a Postgres function with filters
  * ```ts
  * const { data, error } = await supabase
  *   .rpc('list_stored_countries')
  *   .eq('id', 1)
  *   .single()
  * ```
  *
  * @exampleSql Call a Postgres function with filters
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'),
  *   (2, 'The Shire');
  *
  * create function list_stored_countries() returns setof countries as $$
  *   select * from countries;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with filters
  * ```json
  * {
  *   "data": {
  *     "id": 1,
  *     "name": "Rohan"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a read-only Postgres function
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
  * ```
  *
  * @exampleSql Call a read-only Postgres function
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a read-only Postgres function
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rpc(e, r = {}, { head: n = !1, get: s = !1, count: i } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${e}`);
    let c;
    const u = (f) => f !== null && typeof f == "object" && (!Array.isArray(f) || f.some(u)), h = n && Object.values(r).some(u);
    h ? (a = "POST", c = r) : n || s ? (a = n ? "HEAD" : "GET", Object.entries(r).filter(([f, g]) => g !== void 0).map(([f, g]) => [f, Array.isArray(g) ? `{${g.join(",")}}` : `${g}`]).forEach(([f, g]) => {
      l.searchParams.append(f, g);
    })) : (a = "POST", c = r);
    const d = new Headers(this.headers);
    return h ? d.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && d.set("Prefer", `count=${i}`), new sr({
      method: a,
      url: l,
      headers: d,
      schema: this.schemaName,
      body: c,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class bu {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const r = globalThis;
    if (typeof globalThis < "u" && typeof r.WebSocket < "u")
      return { type: "native", wsConstructor: r.WebSocket };
    const n = typeof global < "u" ? global : void 0;
    if (n && typeof n.WebSocket < "u")
      return { type: "native", wsConstructor: n.WebSocket };
    if (typeof globalThis < "u" && typeof r.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && r.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const s = globalThis.process;
    if (s) {
      const i = s.versions;
      if (i && i.node) {
        const o = i.node, a = parseInt(o.replace(/^v/, "").split(".")[0]);
        return a >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", wsConstructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${a} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${a} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @category Realtime
   *
   * @example Example with error handling
   * ```ts
   * try {
   *   const WS = WebSocketFactory.getWebSocketConstructor()
   *   const socket = new WS('wss://example.com/socket')
   * } catch (error) {
   *   console.error('WebSocket not available in this environment.', error)
   * }
   * ```
   */
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor)
      return e.wsConstructor;
    let r = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (r += `

Suggested solution: ${e.workaround}`), new Error(r);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @category Realtime
   *
   * @example Example in a Node.js script
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.error('WebSockets are required for this script.')
   *   process.exitCode = 1
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const _u = "2.106.1", Su = `realtime-js/${_u}`, ku = "1.0.0", Ra = "2.0.0", Eu = Ra, Tu = 1e4, Cu = 100, Ct = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
}, Aa = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
}, Es = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class Ru {
  constructor(e) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
  }
  encode(e, r) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return r(this._binaryEncodeUserBroadcastPush(e));
    let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var r;
    return this._isArrayBuffer((r = e.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var r, n;
    const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(e) {
    var r, n;
    const s = (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}, o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, r, n) {
    var s, i;
    const o = e.topic, a = (s = e.ref) !== null && s !== void 0 ? s : "", l = (i = e.join_ref) !== null && i !== void 0 ? i : "", c = e.payload.event, u = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, h = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`metadata length ${h.length} exceeds maximum of 255`);
    const d = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + c.length + h.length, f = new ArrayBuffer(this.HEADER_LENGTH + d);
    let g = new DataView(f), v = 0;
    g.setUint8(v++, this.KINDS.userBroadcastPush), g.setUint8(v++, l.length), g.setUint8(v++, a.length), g.setUint8(v++, o.length), g.setUint8(v++, c.length), g.setUint8(v++, h.length), g.setUint8(v++, r), Array.from(l, (b) => g.setUint8(v++, b.charCodeAt(0))), Array.from(a, (b) => g.setUint8(v++, b.charCodeAt(0))), Array.from(o, (b) => g.setUint8(v++, b.charCodeAt(0))), Array.from(c, (b) => g.setUint8(v++, b.charCodeAt(0))), Array.from(h, (b) => g.setUint8(v++, b.charCodeAt(0)));
    var y = new Uint8Array(f.byteLength + n.byteLength);
    return y.set(new Uint8Array(f), 0), y.set(new Uint8Array(n), f.byteLength), y.buffer;
  }
  decode(e, r) {
    if (this._isArrayBuffer(e)) {
      let n = this._binaryDecode(e);
      return r(n);
    }
    if (typeof e == "string") {
      const n = JSON.parse(e), [s, i, o, a, l] = n;
      return r({ join_ref: s, ref: i, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(e) {
    const r = new DataView(e), n = r.getUint8(0), s = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, r, s);
    }
  }
  _decodeUserBroadcast(e, r, n) {
    const s = r.getUint8(1), i = r.getUint8(2), o = r.getUint8(3), a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = n.decode(e.slice(l, l + s));
    l = l + s;
    const u = n.decode(e.slice(l, l + i));
    l = l + i;
    const h = n.decode(e.slice(l, l + o));
    l = l + o;
    const d = e.slice(l, e.byteLength), f = a === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d, g = {
      type: this.BROADCAST_EVENT,
      event: u,
      payload: f
    };
    return o > 0 && (g.meta = JSON.parse(h)), { join_ref: null, ref: null, topic: c, event: this.BROADCAST_EVENT, payload: g };
  }
  _isArrayBuffer(e) {
    var r;
    return e instanceof ArrayBuffer || ((r = e?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(e, r) {
    return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([n]) => r.includes(n)));
  }
}
var fe;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(fe || (fe = {}));
const qi = (t, e, r = {}) => {
  var n;
  const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return e ? Object.keys(e).reduce((i, o) => (i[o] = Au(o, t, e, s), i), {}) : {};
}, Au = (t, e, r, n) => {
  const s = e.find((a) => a.name === t), i = s?.type, o = r[t];
  return i && !n.includes(i) ? Oa(i, o) : Ts(o);
}, Oa = (t, e) => {
  if (t.charAt(0) === "_") {
    const r = t.slice(1, t.length);
    return $u(e, r);
  }
  switch (t) {
    case fe.bool:
      return Ou(e);
    case fe.float4:
    case fe.float8:
    case fe.int2:
    case fe.int4:
    case fe.int8:
    case fe.numeric:
    case fe.oid:
      return xu(e);
    case fe.json:
    case fe.jsonb:
      return Pu(e);
    case fe.timestamp:
      return Iu(e);
    // Format to be consistent with PostgREST
    case fe.abstime:
    // To allow users to cast it based on Timezone
    case fe.date:
    // To allow users to cast it based on Timezone
    case fe.daterange:
    case fe.int4range:
    case fe.int8range:
    case fe.money:
    case fe.reltime:
    // To allow users to cast it based on Timezone
    case fe.text:
    case fe.time:
    // To allow users to cast it based on Timezone
    case fe.timestamptz:
    // To allow users to cast it based on Timezone
    case fe.timetz:
    // To allow users to cast it based on Timezone
    case fe.tsrange:
    case fe.tstzrange:
      return Ts(e);
    default:
      return Ts(e);
  }
}, Ts = (t) => t, Ou = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, xu = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, Pu = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return t;
}, $u = (t, e) => {
  if (typeof t != "string")
    return t;
  const r = t.length - 1, n = t[r];
  if (t[0] === "{" && n === "}") {
    let i;
    const o = t.slice(1, r);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((a) => Oa(e, a));
  }
  return t;
}, Iu = (t) => typeof t == "string" ? t.replace(" ", "T") : t, xa = (t) => {
  const e = new URL(t);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
var Ur = (t) => typeof t == "function" ? (
  /** @type {() => T} */
  t
) : function() {
  return t;
}, ju = typeof self < "u" ? self : null, ir = typeof window < "u" ? window : null, ot = ju || ir || globalThis, Lu = "2.0.0", Nu = 1e4, Du = 1e3, ct = (
  /** @type {const} */
  { connecting: 0, open: 1, closing: 2, closed: 3 }
), Le = (
  /** @type {const} */
  {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  }
), mt = (
  /** @type {const} */
  {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  }
), Cs = (
  /** @type {const} */
  {
    longpoll: "longpoll",
    websocket: "websocket"
  }
), Uu = (
  /** @type {const} */
  {
    complete: 4
  }
), Rs = "base64url.bearer.phx.", ln = class {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  constructor(t, e, r, n) {
    this.channel = t, this.event = e, this.payload = r || function() {
      return {};
    }, this.receivedResp = null, this.timeout = n, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(t) {
    this.timeout = t, this.reset(), this.send();
  }
  /**
   *
   */
  send() {
    this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    }));
  }
  /**
   *
   * @param {string} status
   * @param {(response: any) => void} callback
   */
  receive(t, e) {
    return this.hasReceived(t) && e(this.receivedResp.response), this.recHooks.push({ status: t, callback: e }), this;
  }
  reset() {
    this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
  }
  destroy() {
    this.cancelRefEvent(), this.cancelTimeout();
  }
  /**
   * @private
   */
  matchReceive({ status: t, response: e, _ref: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(e));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
  }
  startTimeout() {
    this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (t) => {
      this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = t, this.matchReceive(t);
    }), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
  trigger(t, e) {
    this.channel.trigger(this.refEvent, { status: t, response: e });
  }
}, Pa = class {
  /**
  * @param {() => void} callback
  * @param {(tries: number) => number} timerCalc
  */
  constructor(t, e) {
    this.callback = t, this.timerCalc = e, this.timer = void 0, this.tries = 0;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}, Mu = class {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  constructor(t, e, r) {
    this.state = Le.closed, this.topic = t, this.params = Ur(e || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new ln(this, mt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new Pa(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })
    ), this.joinPush.receive("ok", () => {
      this.state = Le.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((n) => n.send()), this.pushBuffer = [];
    }), this.joinPush.receive("error", (n) => {
      this.state = Le.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = Le.closed, this.socket.remove(this);
    }), this.onError((n) => {
      this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, n), this.isJoining() && this.joinPush.reset(), this.state = Le.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive("timeout", () => {
      this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new ln(this, mt.leave, Ur({}), this.timeout).send(), this.state = Le.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(mt.reply, (n, s) => {
      this.trigger(this.replyEventName(s), n);
    });
  }
  /**
   * Join the channel
   * @param {number} timeout
   * @returns {Push}
   */
  join(t = this.timeout) {
    if (this.joinedOnce)
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    return this.timeout = t, this.joinedOnce = !0, this.rejoin(), this.joinPush;
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Le.closed, this.bindings = [];
  }
  /**
   * Hook into channel close
   * @param {ChannelBindingCallback} callback
   */
  onClose(t) {
    this.on(mt.close, t);
  }
  /**
   * Hook into channel errors
   * @param {ChannelOnErrorCallback} callback
   * @return {number}
   */
  onError(t) {
    return this.on(mt.error, (e) => t(e));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {ChannelBindingCallback} callback
   * @returns {number} ref
   */
  on(t, e) {
    let r = this.bindingRef++;
    return this.bindings.push({ event: t, ref: r, callback: e }), r;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {number} [ref]
   */
  off(t, e) {
    this.bindings = this.bindings.filter((r) => !(r.event === t && (typeof e > "u" || e === r.ref)));
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(t, e, r = this.timeout) {
    if (e = e || {}, !this.joinedOnce)
      throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    let n = new ln(this, t, function() {
      return e;
    }, r);
    return this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {number} timeout
   * @returns {Push}
   */
  leave(t = this.timeout) {
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = Le.leaving;
    let e = () => {
      this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(mt.close, "leave");
    }, r = new ln(this, mt.leave, Ur({}), t);
    return r.receive("ok", () => e()).receive("timeout", () => e()), r.send(), this.canPush() || r.trigger("ok", {}), r;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @type{ChannelOnMessage}
   */
  onMessage(t, e, r) {
    return e;
  }
  /**
   * Overridable filter hook
   *
   * If this function returns `true`, `binding`'s callback will be called.
   *
   * @type{ChannelFilterBindings}
   */
  filterBindings(t, e, r) {
    return !0;
  }
  isMember(t, e, r, n) {
    return this.topic !== t ? !1 : n && n !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: t, event: e, payload: r, joinRef: n }), !1) : !0;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(t = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Le.joining, this.joinPush.resend(t));
  }
  /**
   * @param {string} event
   * @param {unknown} [payload]
   * @param {?string} [ref]
   * @param {?string} [joinRef]
   */
  trigger(t, e, r, n) {
    let s = this.onMessage(t, e, r, n);
    if (e && !s)
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    let i = this.bindings.filter((o) => o.event === t && this.filterBindings(o, e, r));
    for (let o = 0; o < i.length; o++)
      i[o].callback(s, r, n || this.joinRef());
  }
  /**
  * @param {string} ref
  */
  replyEventName(t) {
    return `chan_reply_${t}`;
  }
  isClosed() {
    return this.state === Le.closed;
  }
  isErrored() {
    return this.state === Le.errored;
  }
  isJoined() {
    return this.state === Le.joined;
  }
  isJoining() {
    return this.state === Le.joining;
  }
  isLeaving() {
    return this.state === Le.leaving;
  }
}, An = class {
  static request(t, e, r, n, s, i, o) {
    if (ot.XDomainRequest) {
      let a = new ot.XDomainRequest();
      return this.xdomainRequest(a, t, e, n, s, i, o);
    } else if (ot.XMLHttpRequest) {
      let a = new ot.XMLHttpRequest();
      return this.xhrRequest(a, t, e, r, n, s, i, o);
    } else {
      if (ot.fetch && ot.AbortController)
        return this.fetchRequest(t, e, r, n, s, i, o);
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(t, e, r, n, s, i, o) {
    let a = {
      method: t,
      headers: r,
      body: n
    }, l = null;
    return s && (l = new AbortController(), setTimeout(() => l.abort(), s), a.signal = l.signal), ot.fetch(e, a).then((c) => c.text()).then((c) => this.parseJSON(c)).then((c) => o && o(c)).catch((c) => {
      c.name === "AbortError" && i ? i() : o && o(null);
    }), l;
  }
  static xdomainRequest(t, e, r, n, s, i, o) {
    return t.timeout = s, t.open(e, r), t.onload = () => {
      let a = this.parseJSON(t.responseText);
      o && o(a);
    }, i && (t.ontimeout = i), t.onprogress = () => {
    }, t.send(n), t;
  }
  static xhrRequest(t, e, r, n, s, i, o, a) {
    t.open(e, r, !0), t.timeout = i;
    for (let [l, c] of Object.entries(n))
      t.setRequestHeader(l, c);
    return t.onerror = () => a && a(null), t.onreadystatechange = () => {
      if (t.readyState === Uu.complete && a) {
        let l = this.parseJSON(t.responseText);
        a(l);
      }
    }, o && (t.ontimeout = o), t.send(s), t;
  }
  static parseJSON(t) {
    if (!t || t === "")
      return null;
    try {
      return JSON.parse(t);
    } catch {
      return console && console.log("failed to parse JSON response", t), null;
    }
  }
  static serialize(t, e) {
    let r = [];
    for (var n in t) {
      if (!Object.prototype.hasOwnProperty.call(t, n))
        continue;
      let s = e ? `${e}[${n}]` : n, i = t[n];
      typeof i == "object" ? r.push(this.serialize(i, s)) : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(i));
    }
    return r.join("&");
  }
  static appendParams(t, e) {
    if (Object.keys(e).length === 0)
      return t;
    let r = t.match(/\?/) ? "&" : "?";
    return `${t}${r}${this.serialize(e)}`;
  }
}, Bu = (t) => {
  let e = "", r = new Uint8Array(t), n = r.byteLength;
  for (let s = 0; s < n; s++)
    e += String.fromCharCode(r[s]);
  return btoa(e);
}, Xt = class {
  constructor(t, e) {
    e && e.length === 2 && e[1].startsWith(Rs) && (this.authToken = atob(e[1].slice(Rs.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = ct.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(t) {
    return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + Cs.websocket), "$1/" + Cs.longpoll);
  }
  endpointURL() {
    return An.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(t, e, r) {
    this.close(t, e, r), this.readyState = ct.connecting;
  }
  ontimeout() {
    this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
  }
  isActive() {
    return this.readyState === ct.open || this.readyState === ct.connecting;
  }
  poll() {
    const t = { Accept: "application/json" };
    this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", t, null, () => this.ontimeout(), (e) => {
      if (e) {
        var { status: r, token: n, messages: s } = e;
        if (r === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
          return;
        }
        this.token = n;
      } else
        r = 0;
      switch (r) {
        case 200:
          s.forEach((i) => {
            setTimeout(() => this.onmessage({ data: i }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = ct.open, this.onopen({}), this.poll();
          break;
        case 403:
          this.onerror(403), this.close(1008, "forbidden", !1);
          break;
        case 0:
        case 500:
          this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${r}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(t) {
    typeof t != "string" && (t = Bu(t)), this.currentBatch ? this.currentBatch.push(t) : this.awaitingBatchAck ? this.batchBuffer.push(t) : (this.currentBatch = [t], this.currentBatchTimer = setTimeout(() => {
      this.batchSend(this.currentBatch), this.currentBatch = null;
    }, 0));
  }
  batchSend(t) {
    this.awaitingBatchAck = !0, this.ajax("POST", { "Content-Type": "application/x-ndjson" }, t.join(`
`), () => this.onerror("timeout"), (e) => {
      this.awaitingBatchAck = !1, !e || e.status !== 200 ? (this.onerror(e && e.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
    });
  }
  close(t, e, r) {
    for (let s of this.reqs)
      s.abort();
    this.readyState = ct.closed;
    let n = Object.assign({ code: 1e3, reason: void 0, wasClean: !0 }, { code: t, reason: e, wasClean: r });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", n)) : this.onclose(n);
  }
  ajax(t, e, r, n, s) {
    let i, o = () => {
      this.reqs.delete(i), n();
    };
    i = An.request(t, this.endpointURL(), e, r, this.timeout, o, (a) => {
      this.reqs.delete(i), this.isActive() && s(a);
    }), this.reqs.add(i);
  }
}, Hu = class Or {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  constructor(e, r = {}) {
    let n = r.events || /** @type {PresenceEvents} */
    { state: "presence_state", diff: "presence_diff" };
    this.state = {}, this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    }, this.channel.on(n.state, (s) => {
      let { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = Or.syncState(this.state, s, i, o), this.pendingDiffs.forEach((l) => {
        this.state = Or.syncDiff(this.state, l, i, o);
      }), this.pendingDiffs = [], a();
    }), this.channel.on(n.diff, (s) => {
      let { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Or.syncDiff(this.state, s, i, o), a());
    });
  }
  /**
   * @param {PresenceOnJoin} callback
   */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /**
   * @param {PresenceOnLeave} callback
   */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /**
   * @param {PresenceOnSync} callback
   */
  onSync(e) {
    this.caller.onSync = e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {((key: string, obj: PresenceState) => T)} [by]
   *
   * @returns {T[]}
   */
  list(e) {
    return Or.list(this.state, e);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  // lower-level public static API
  /**
   * Used to sync the list of presences on the server
   * with the client's state. An optional `onJoin` and `onLeave` callback can
   * be provided to react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @param {Record<string, PresenceState>} currentState
   * @param {Record<string, PresenceState>} newState
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncState(e, r, n, s) {
    let i = this.clone(e), o = {}, a = {};
    return this.map(i, (l, c) => {
      r[l] || (a[l] = c);
    }), this.map(r, (l, c) => {
      let u = i[l];
      if (u) {
        let h = c.metas.map((v) => v.phx_ref), d = u.metas.map((v) => v.phx_ref), f = c.metas.filter((v) => d.indexOf(v.phx_ref) < 0), g = u.metas.filter((v) => h.indexOf(v.phx_ref) < 0);
        f.length > 0 && (o[l] = c, o[l].metas = f), g.length > 0 && (a[l] = this.clone(u), a[l].metas = g);
      } else
        o[l] = c;
    }), this.syncDiff(i, { joins: o, leaves: a }, n, s);
  }
  /**
   *
   * Used to sync a diff of presence join and leave
   * events from the server, as they happen. Like `syncState`, `syncDiff`
   * accepts optional `onJoin` and `onLeave` callbacks to react to a user
   * joining or leaving from a device.
   *
   * @param {Record<string, PresenceState>} state
   * @param {PresenceDiff} diff
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncDiff(e, r, n, s) {
    let { joins: i, leaves: o } = this.clone(r);
    return n || (n = function() {
    }), s || (s = function() {
    }), this.map(i, (a, l) => {
      let c = e[a];
      if (e[a] = this.clone(l), c) {
        let u = e[a].metas.map((d) => d.phx_ref), h = c.metas.filter((d) => u.indexOf(d.phx_ref) < 0);
        e[a].metas.unshift(...h);
      }
      n(a, c, l);
    }), this.map(o, (a, l) => {
      let c = e[a];
      if (!c)
        return;
      let u = l.metas.map((h) => h.phx_ref);
      c.metas = c.metas.filter((h) => u.indexOf(h.phx_ref) < 0), s(a, c, l), c.metas.length === 0 && delete e[a];
    }), e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {Record<string, PresenceState>} presences
   * @param {((key: string, obj: PresenceState) => T)} [chooser]
   *
   * @returns {T[]}
   */
  static list(e, r) {
    return r || (r = function(n, s) {
      return s;
    }), this.map(e, (n, s) => r(n, s));
  }
  // private
  /**
  * @template T
  * @param {Record<string, PresenceState>} obj
  * @param {(key: string, obj: PresenceState) => T} func
  */
  static map(e, r) {
    return Object.getOwnPropertyNames(e).map((n) => r(n, e[n]));
  }
  /**
  * @template T
  * @param {T} obj
  * @returns {T}
  */
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
}, cn = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  /**
  * @template T
  * @param {Message<Record<string, any>>} msg
  * @param {(msg: ArrayBuffer | string) => T} callback
  * @returns {T}
  */
  encode(t, e) {
    if (t.payload.constructor === ArrayBuffer)
      return e(this.binaryEncode(t));
    {
      let r = [t.join_ref, t.ref, t.topic, t.event, t.payload];
      return e(JSON.stringify(r));
    }
  },
  /**
  * @template T
  * @param {ArrayBuffer | string} rawPayload
  * @param {(msg: Message<unknown>) => T} callback
  * @returns {T}
  */
  decode(t, e) {
    if (t.constructor === ArrayBuffer)
      return e(this.binaryDecode(t));
    {
      let [r, n, s, i, o] = JSON.parse(t);
      return e({ join_ref: r, ref: n, topic: s, event: i, payload: o });
    }
  },
  /** @private */
  binaryEncode(t) {
    let { join_ref: e, ref: r, event: n, topic: s, payload: i } = t, o = this.META_LENGTH + e.length + r.length + s.length + n.length, a = new ArrayBuffer(this.HEADER_LENGTH + o), l = new DataView(a), c = 0;
    l.setUint8(c++, this.KINDS.push), l.setUint8(c++, e.length), l.setUint8(c++, r.length), l.setUint8(c++, s.length), l.setUint8(c++, n.length), Array.from(e, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(r, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(s, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(n, (h) => l.setUint8(c++, h.charCodeAt(0)));
    var u = new Uint8Array(a.byteLength + i.byteLength);
    return u.set(new Uint8Array(a), 0), u.set(new Uint8Array(i), a.byteLength), u.buffer;
  },
  /**
  * @private
  */
  binaryDecode(t) {
    let e = new DataView(t), r = e.getUint8(0), n = new TextDecoder();
    switch (r) {
      case this.KINDS.push:
        return this.decodePush(t, e, n);
      case this.KINDS.reply:
        return this.decodeReply(t, e, n);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(t, e, n);
    }
  },
  /** @private */
  decodePush(t, e, r) {
    let n = e.getUint8(1), s = e.getUint8(2), i = e.getUint8(3), o = this.HEADER_LENGTH + this.META_LENGTH - 1, a = r.decode(t.slice(o, o + n));
    o = o + n;
    let l = r.decode(t.slice(o, o + s));
    o = o + s;
    let c = r.decode(t.slice(o, o + i));
    o = o + i;
    let u = t.slice(o, t.byteLength);
    return { join_ref: a, ref: null, topic: l, event: c, payload: u };
  },
  /** @private */
  decodeReply(t, e, r) {
    let n = e.getUint8(1), s = e.getUint8(2), i = e.getUint8(3), o = e.getUint8(4), a = this.HEADER_LENGTH + this.META_LENGTH, l = r.decode(t.slice(a, a + n));
    a = a + n;
    let c = r.decode(t.slice(a, a + s));
    a = a + s;
    let u = r.decode(t.slice(a, a + i));
    a = a + i;
    let h = r.decode(t.slice(a, a + o));
    a = a + o;
    let d = t.slice(a, t.byteLength), f = { status: h, response: d };
    return { join_ref: l, ref: c, topic: u, event: mt.reply, payload: f };
  },
  /** @private */
  decodeBroadcast(t, e, r) {
    let n = e.getUint8(1), s = e.getUint8(2), i = this.HEADER_LENGTH + 2, o = r.decode(t.slice(i, i + n));
    i = i + n;
    let a = r.decode(t.slice(i, i + s));
    i = i + s;
    let l = t.slice(i, t.byteLength);
    return { join_ref: null, ref: null, topic: o, event: a, payload: l };
  }
}, qu = class {
  /** Initializes the Socket *
   *
   * For IE8 support use an ES5-shim (https://github.com/es-shims/es5-shim)
   *
   * @constructor
   * @param {string} endPoint - The string WebSocket endpoint, ie, `"ws://example.com/socket"`,
   *                                               `"wss://example.com"`
   *                                               `"/socket"` (inherited host & protocol)
   * @param {SocketOptions} [opts] - Optional configuration
   */
  constructor(t, e = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = e.timeout || Nu, this.transport = e.transport || ot.WebSocket || Xt, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = e.longPollFallbackMs, this.fallbackTimer = null;
    let r = null;
    try {
      r = ot && ot.sessionStorage;
    } catch {
    }
    this.sessionStore = e.sessionStorage || r, this.establishedConnections = 0, this.defaultEncoder = cn.encode.bind(cn), this.defaultDecoder = cn.decode.bind(cn), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = e.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== Xt ? (this.encode = e.encode || this.defaultEncoder, this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
    let n = null;
    ir && ir.addEventListener && (ir.addEventListener("pagehide", (s) => {
      this.conn && (this.disconnect(), n = this.connectClock);
    }), ir.addEventListener("pageshow", (s) => {
      n === this.connectClock && (n = null, this.connect());
    }), ir.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0, this.heartbeatCallback = e.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (s) => e.rejoinAfterMs ? e.rejoinAfterMs(s) : [1e3, 2e3, 5e3][s - 1] || 1e4, this.reconnectAfterMs = (s) => e.reconnectAfterMs ? e.reconnectAfterMs(s) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][s - 1] || 5e3, this.logger = e.logger || null, !this.logger && e.debug && (this.logger = (s, i, o) => {
      console.log(`${s}: ${i}`, o);
    }), this.longpollerTimeout = e.longpollerTimeout || 2e4, this.params = Ur(e.params || {}), this.endPoint = `${t}/${Cs.websocket}`, this.vsn = e.vsn || Lu, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new Pa(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!"), this.teardown();
        return;
      }
      this.teardown(async () => {
        e.beforeReconnect && await e.beforeReconnect(), this.connect();
      });
    }, this.reconnectAfterMs), this.authToken = e.authToken;
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return Xt;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {SocketTransport} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(t) {
    this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = t;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {"wss" | "ws"}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let t = An.appendParams(
      An.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    return t.charAt(0) !== "/" ? t : t.charAt(1) === "/" ? `${this.protocol()}:${t}` : `${this.protocol()}://${location.host}${t}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {() => void} [callback] - Optional callback which is called after socket is disconnected.
   * @param {number} [code] - A status code for disconnection (Optional).
   * @param {string} [reason] - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(t, e, r) {
    this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
      this.disconnecting = !1, t && t();
    }, e, r);
  }
  /**
   * @param {Params} [params] - [DEPRECATED] The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(t) {
    t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Ur(t)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Xt ? this.connectWithFallback(Xt, this.longPollFallbackMs) : this.transportConnect());
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(t, e, r) {
    this.logger && this.logger(t, e, r);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {SocketOnOpen} callback
   */
  onOpen(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.open.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection close events
   * @param {SocketOnClose} callback
   * @returns {string}
   */
  onClose(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.close.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {SocketOnError} callback
   * @returns {string}
   */
  onError(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.error.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection message events
   * @param {SocketOnMessage} callback
   * @returns {string}
   */
  onMessage(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.message.push([e, t]), e;
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   * @param {HeartbeatCallback} callback
   */
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {(timeDelta: number) => void} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(t) {
    if (!this.isConnected())
      return !1;
    let e = this.makeRef(), r = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: e });
    let n = this.onMessage((s) => {
      s.ref === e && (this.off([n]), t(Date.now() - r));
    });
    return !0;
  }
  /**
   * @private
   *
   * @param {Function}
   */
  transportName(t) {
    switch (t) {
      case Xt:
        return "LongPoll";
      default:
        return t.name;
    }
  }
  /**
   * @private
   */
  transportConnect() {
    this.connectClock++, this.closeWasClean = !1;
    let t;
    this.authToken && (t = ["phoenix", `${Rs}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), t), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
  }
  getSession(t) {
    return this.sessionStore && this.sessionStore.getItem(t);
  }
  storeSession(t, e) {
    this.sessionStore && this.sessionStore.setItem(t, e);
  }
  connectWithFallback(t, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let r = !1, n = !0, s, i, o = this.transportName(t), a = (l) => {
      this.log("transport", `falling back to ${o}...`, l), this.off([s, i]), n = !1, this.replaceTransport(t), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${o}`))
      return a("memorized");
    this.fallbackTimer = setTimeout(a, e), i = this.onError((l) => {
      this.log("transport", "error", l), n && !r && (clearTimeout(this.fallbackTimer), a(l));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (r = !0, !n) {
        let l = this.transportName(t);
        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${l}`, "true"), this.log("transport", `established ${l} fallback`);
      }
      clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(a, e), this.ping((l) => {
        this.log("transport", "connected to primary after", l), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
      });
    }), this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this.triggerChanError(new Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Du, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(t, e, r) {
    if (!this.conn)
      return t && t();
    const n = this.conn;
    this.waitForBufferDone(n, () => {
      e ? n.close(e, r || "") : n.close(), this.waitForSocketClosed(n, () => {
        this.conn === n && (this.conn.onopen = function() {
        }, this.conn.onerror = function() {
        }, this.conn.onmessage = function() {
        }, this.conn.onclose = function() {
        }, this.conn = null), t && t();
      });
    });
  }
  waitForBufferDone(t, e, r = 1) {
    if (r === 5 || !t.bufferedAmount) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(t, e, r + 1);
    }, 150 * r);
  }
  waitForSocketClosed(t, e, r = 1) {
    if (r === 5 || t.readyState === ct.closed) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(t, e, r + 1);
    }, 150 * r);
  }
  /**
  * @param {CloseEvent} event
  */
  onConnClose(t) {
    this.conn && (this.conn.onclose = () => {
    }), this.hasLogger() && this.log("transport", "close", t), this.triggerChanError(t), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", t);
  }
  /**
   * @private
   * @param {Event} error
   */
  onConnError(t) {
    this.hasLogger() && this.log("transport", "error", t);
    let e = this.transport, r = this.establishedConnections;
    this.triggerStateCallbacks("error", t, e, r), (e === this.transport || r > 0) && this.triggerChanError(t);
  }
  /**
   * @private
   * @param {unknown} [reason] underlying close/error event forwarded to channel error listeners
   */
  triggerChanError(t) {
    this.channels.forEach((e) => {
      e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(mt.error, t);
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ct.connecting:
        return "connecting";
      case ct.open:
        return "open";
      case ct.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   *
   * @param {Channel} channel
   */
  remove(t) {
    this.off(t.stateChangeRefs), this.channels = this.channels.filter((e) => e !== t);
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {string[]} refs - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(t) {
    for (let e in this.stateChangeCallbacks)
      this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([r]) => t.indexOf(r) === -1);
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Params | (() => Params)} [chanParams]- Parameters for the channel
   * @returns {Channel}
   */
  channel(t, e = {}) {
    let r = new Mu(t, e, this);
    return this.channels.push(r), r;
  }
  /**
   * @param {Message<Record<string, any>>} data
   */
  push(t) {
    if (this.hasLogger()) {
      let { topic: e, event: r, payload: n, ref: s, join_ref: i } = t;
      this.log("push", `${e} ${r} (${i}, ${s})`, n);
    }
    this.isConnected() ? this.encode(t, (e) => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(t, (e) => this.conn.send(e)));
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    try {
      this.heartbeatCallback("sent");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
  * @param {MessageEvent<any>} rawMessage
  */
  onConnMessage(t) {
    this.decode(t.data, (e) => {
      let { topic: r, event: n, payload: s, ref: i, join_ref: o } = e;
      if (i && i === this.pendingHeartbeatRef) {
        const a = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(s.status === "ok" ? "ok" : "error", a);
        } catch (l) {
          this.log("error", "error in heartbeat callback", l);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log("receive", `${s.status || ""} ${r} ${n} ${i && "(" + i + ")" || ""}`.trim(), s);
      for (let a = 0; a < this.channels.length; a++) {
        const l = this.channels[a];
        l.isMember(r, n, s, o) && l.trigger(n, s, i, o);
      }
      this.triggerStateCallbacks("message", e);
    });
  }
  /**
   * @private
   * @template {keyof SocketStateChangeCallbacks} K
   * @param {K} event
   * @param {...Parameters<SocketStateChangeCallbacks[K][number][1]>} args
   * @returns {void}
   */
  triggerStateCallbacks(t, ...e) {
    try {
      this.stateChangeCallbacks[t].forEach(([r, n]) => {
        try {
          n(...e);
        } catch (s) {
          this.log("error", `error in ${t} callback`, s);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${t} callbacks`, r);
    }
  }
  leaveOpenTopic(t) {
    let e = this.channels.find((r) => r.topic === t && (r.isJoined() || r.isJoining()));
    e && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${t}"`), e.leave());
  }
};
class Mr {
  constructor(e, r) {
    const n = Wu(r);
    this.presence = new Hu(e.getChannel(), n), this.presence.onJoin((s, i, o) => {
      const a = Mr.onJoinPayload(s, i, o);
      e.getChannel().trigger("presence", a);
    }), this.presence.onLeave((s, i, o) => {
      const a = Mr.onLeavePayload(s, i, o);
      e.getChannel().trigger("presence", a);
    }), this.presence.onSync(() => {
      e.getChannel().trigger("presence", { event: "sync" });
    });
  }
  get state() {
    return Mr.transformState(this.presence.state);
  }
  /**
   * @private
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example Transform state
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   */
  static transformState(e) {
    return e = Fu(e), Object.getOwnPropertyNames(e).reduce((r, n) => {
      const s = e[n];
      return r[n] = yn(s), r;
    }, {});
  }
  static onJoinPayload(e, r, n) {
    const s = Fi(r), i = yn(n);
    return {
      event: "join",
      key: e,
      currentPresences: s,
      newPresences: i
    };
  }
  static onLeavePayload(e, r, n) {
    const s = Fi(r), i = yn(n);
    return {
      event: "leave",
      key: e,
      currentPresences: s,
      leftPresences: i
    };
  }
}
function yn(t) {
  return t.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function Fu(t) {
  return JSON.parse(JSON.stringify(t));
}
function Wu(t) {
  return t?.events && { events: t.events };
}
function Fi(t) {
  return t?.metas ? yn(t) : [];
}
var Wi;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(Wi || (Wi = {}));
class Ku {
  get state() {
    return this.presenceAdapter.state;
  }
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @category Realtime
   *
   * @example Example for a presence channel
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(e, r) {
    this.channel = e, this.presenceAdapter = new Mr(this.channel.channelAdapter, r);
  }
}
function Vu(t) {
  if (t instanceof Error)
    return t;
  if (typeof t == "string")
    return new Error(t);
  if (t && typeof t == "object") {
    const e = t;
    if (typeof e.code == "number") {
      const r = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${r}`, { cause: t });
    }
    return new Error("channel error: transport failure", { cause: t });
  }
  return new Error("channel error: connection lost");
}
class zu {
  constructor(e, r, n) {
    const s = Ju(n);
    this.channel = e.getSocket().channel(r, s), this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, r) {
    return this.channel.on(e, r);
  }
  off(e, r) {
    this.channel.off(e, r);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, r, n) {
    let s;
    try {
      s = this.channel.push(e, r, n);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > Cu) {
      const i = this.channel.pushBuffer.shift();
      i.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload());
    }
    return s;
  }
  updateJoinPayload(e) {
    const r = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, r), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Ct.joined;
  }
  isJoined() {
    return this.state === Ct.joined;
  }
  isJoining() {
    return this.state === Ct.joining;
  }
  isClosed() {
    return this.state === Ct.closed;
  }
  isLeaving() {
    return this.state === Ct.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  /**
   * @internal
   */
  getChannel() {
    return this.channel;
  }
}
function Ju(t) {
  return {
    config: Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config)
  };
}
var Ki;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(Ki || (Ki = {}));
var lr;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})(lr || (lr = {}));
var vt;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(vt || (vt = {}));
class Br {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(e, r = { config: {} }, n) {
    var s, i;
    if (this.topic = e, this.params = r, this.socket = n, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.channelAdapter = new zu(this.socket.socketAdapter, e, this.params), this.presence = new Ku(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = xa(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((i = (s = this.params.config) === null || s === void 0 ? void 0 : s.broadcast) === null || i === void 0) && i.replay))
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  /**
   * Subscribe registers your client with the server
   * @category Realtime
   */
  subscribe(e, r = this.timeout) {
    var n, s, i;
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, c = (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((f) => f.filter)) !== null && s !== void 0 ? s : [], u = !!this.bindings[lr.PRESENCE] && this.bindings[lr.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, h = {}, d = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue), this._onError((f) => {
        e?.(vt.CHANNEL_ERROR, Vu(f));
      }), this._onClose(() => e?.(vt.CLOSED)), this.updateJoinPayload(Object.assign({ config: d }, h)), this._updateFilterMessage(), this.channelAdapter.subscribe(r).receive("ok", async ({ postgres_changes: f }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), f === void 0) {
          e?.(vt.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(f, e);
      }).receive("error", (f) => {
        this.state = Ct.errored;
        const g = Object.values(f).join(", ") || "error";
        e?.(vt.CHANNEL_ERROR, new Error(g, { cause: f }));
      }).receive("timeout", () => {
        e?.(vt.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(e, r) {
    var n;
    const s = this.bindings.postgres_changes, i = (n = s?.length) !== null && n !== void 0 ? n : 0, o = [];
    for (let a = 0; a < i; a++) {
      const l = s[a], { filter: { event: c, schema: u, table: h, filter: d } } = l, f = e && e[a];
      if (f && f.event === c && Br.isFilterValueEqual(f.schema, u) && Br.isFilterValueEqual(f.table, h) && Br.isFilterValueEqual(f.filter, d))
        o.push(Object.assign(Object.assign({}, l), { id: f.id }));
      else {
        this.unsubscribe(), this.state = Ct.errored, r?.(vt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        return;
      }
    }
    this.bindings.postgres_changes = o, this.state != Ct.errored && r && r(vt.SUBSCRIBED);
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   *
   * @category Realtime
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   *
   * @category Realtime
   */
  async track(e, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, r.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   *
   * @category Realtime
   */
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  /**
   * Listen to realtime events on this channel.
   * @category Realtime
   *
   * @remarks
   * - By default, Broadcast and Presence are enabled for all projects.
   * - By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](/docs/guides/api#realtime-api-overview).
   * - You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
   * - Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.
   *
   * @example Listen to broadcast messages
   * ```js
   * const channel = supabase.channel("room1")
   *
   * channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
   *   console.log("Cursor position received!", payload);
   * }).subscribe((status) => {
   *   if (status === "SUBSCRIBED") {
   *     channel.send({
   *       type: "broadcast",
   *       event: "cursor-pos",
   *       payload: { x: Math.random(), y: Math.random() },
   *     });
   *   }
   * });
   * ```
   *
   * @example Listen to presence sync
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'sync' }, () => {
   *     console.log('Synced presence state: ', channel.presenceState())
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence join
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'join' }, ({ newPresences }) => {
   *     console.log('Newly joined presences: ', newPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence leave
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'leave' }, ({ leftPresences }) => {
   *     console.log('Newly left presences: ', leftPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *       await channel.untrack()
   *     }
   *   })
   * ```
   *
   * @example Listen to all database changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: '*' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to a specific table
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to inserts
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to updates
   * By default, Supabase will send only the updated record. If you want to receive the previous values as well you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to updates
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to deletes
   * By default, Supabase does not send deleted records. If you want to receive the deleted record you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to deletes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to multiple events
   * You can chain listeners if you want to listen to multiple events for each table.
   *
   * @example Listen to multiple events
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to row level changes
   * You can listen to individual rows using the format `{table}:{col}=eq.{val}` - where `{col}` is the column name, and `{val}` is the value which you want to match.
   *
   * @example Listen to row level changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
   *   .subscribe()
   * ```
   */
  on(e, r, n) {
    const s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === lr.PRESENCE || e === lr.POSTGRES_CHANGES;
    if (s && i)
      throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(e, r, n);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   *
   * @category Realtime
   */
  async httpSend(e, r, n = {}) {
    var s;
    if (r == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    this.socket.accessTokenValue && (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
      method: "POST",
      headers: i,
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: e,
            payload: r,
            private: this.private
          }
        ]
      })
    }, a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (s = n.timeout) !== null && s !== void 0 ? s : this.timeout);
    if (a.status === 202)
      return { success: !0 };
    let l = a.statusText;
    try {
      const c = await a.json();
      l = c.error || c.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   *
   * @category Realtime
   *
   * @remarks
   * - When using REST you don't need to subscribe to the channel
   * - REST calls are only available from 2.37.0 onwards
   * - If you create a channel only to send a REST broadcast, remove it from
   *   the client when the send completes
   *
   * @example Send a message via websocket
   * ```js
   * const channel = supabase.channel('room1')
   *
   * channel.subscribe((status) => {
   *   if (status === 'SUBSCRIBED') {
   *     channel.send({
   *       type: 'broadcast',
   *       event: 'cursor-pos',
   *       payload: { x: Math.random(), y: Math.random() },
   *     })
   *   }
   * })
   * ```
   *
   * @exampleResponse Send a message via websocket
   * ```js
   * ok | timed out | error
   * ```
   *
   * @example Send a message via REST
   * ```js
   * const channel = supabase.channel('room1')
   *
   * try {
   *   await channel.httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
   * } finally {
   *   await supabase.removeChannel(channel)
   * }
   * ```
   */
  async send(e, r = {}) {
    var n, s;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: i, payload: o } = e, a = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c instanceof Error && c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const c = this.channelAdapter.push(e.type, e, r.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"), c.receive("ok", () => i("ok")), c.receive("error", () => i("error")), c.receive("timeout", () => i("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   *
   * @category Realtime
   */
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   *
   * @category Realtime
   */
  async unsubscribe(e = this.timeout) {
    return new Promise((r) => {
      this.channelAdapter.unsubscribe(e).receive("ok", () => r("ok")).receive("timeout", () => r("timed out")).receive("error", () => r("error"));
    });
  }
  /**
   * Destroys and stops related timers.
   *
   * @category Realtime
   */
  teardown() {
    this.channelAdapter.teardown();
  }
  /** @internal */
  async _fetchWithTimeout(e, r, n) {
    const s = new AbortController(), i = setTimeout(() => s.abort(), n), o = await this.socket.fetch(e, Object.assign(Object.assign({}, r), { signal: s.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _on(e, r, n) {
    const s = e.toLocaleLowerCase(), i = this.channelAdapter.on(e, n), o = {
      type: s,
      filter: r,
      callback: n,
      ref: i
    };
    return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o], this._updateFilterMessage(), this;
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  /** @internal */
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, r, n) => {
      var s, i, o, a, l, c, u;
      const h = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(h, n))
        return !1;
      const d = (s = this.bindings[h]) === null || s === void 0 ? void 0 : s.find((f) => f.ref === e.ref);
      if (!d)
        return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(h))
        if ("id" in d) {
          const f = d.id, g = (i = d.filter) === null || i === void 0 ? void 0 : i.event;
          return f && ((o = r.ids) === null || o === void 0 ? void 0 : o.includes(f)) && (g === "*" || g?.toLocaleLowerCase() === ((a = r.data) === null || a === void 0 ? void 0 : a.type.toLocaleLowerCase()));
        } else {
          const f = (c = (l = d?.filter) === null || l === void 0 ? void 0 : l.event) === null || c === void 0 ? void 0 : c.toLocaleLowerCase();
          return f === "*" || f === ((u = r?.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === h;
    });
  }
  /** @internal */
  _notThisChannelEvent(e, r) {
    const { close: n, error: s, leave: i, join: o } = Aa;
    return r && [n, s, i, o].includes(e) && r !== this.joinPush.ref;
  }
  /** @internal */
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, r, n) => {
      if (typeof r == "object" && "ids" in r) {
        const s = r.data, { schema: i, table: o, commit_timestamp: a, type: l, errors: c } = s;
        return Object.assign(Object.assign({}, {
          schema: i,
          table: o,
          commit_timestamp: a,
          eventType: l,
          new: {},
          old: {},
          errors: c
        }), this._getPayloadRecords(s));
      }
      return r;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const r in e.bindings)
      for (const n of e.bindings[r])
        this._on(n.type, n.filter, n.callback);
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(e, r) {
    return (e ?? void 0) === (r ?? void 0);
  }
  /** @internal */
  _getPayloadRecords(e) {
    const r = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = qi(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (r.old = qi(e.columns, e.old_record)), r;
  }
}
class Gu {
  constructor(e, r) {
    this.socket = new qu(e, r);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, r, n, s = 1e4) {
    return new Promise((i) => {
      setTimeout(() => i("timeout"), s), this.socket.disconnect(() => {
        e(), i("ok");
      }, r, n);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, r, n) {
    this.socket.log(e, r, n);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Es.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Es.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  /**
   * @internal
   */
  getSocket() {
    return this.socket;
  }
}
const Vi = {
  HEARTBEAT_INTERVAL: 25e3
}, Yu = [1e3, 2e3, 5e3, 1e4], Xu = 1e4;
function Qu() {
  const t = /* @__PURE__ */ new Map();
  return {
    get length() {
      return t.size;
    },
    clear() {
      t.clear();
    },
    getItem(e) {
      return t.has(e) ? t.get(e) : null;
    },
    key(e) {
      var r;
      return (r = Array.from(t.keys())[e]) !== null && r !== void 0 ? r : null;
    },
    removeItem(e) {
      t.delete(e);
    },
    setItem(e, r) {
      t.set(e, String(r));
    }
  };
}
function Zu() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {
  }
  return Qu();
}
const eh = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class th {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(e, r) {
    var n;
    if (this.channels = new Array(), this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new Ru(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (i) => i ? (...o) => i(...o) : (...o) => fetch(...o), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey;
    const s = this._initializeOptions(r);
    this.socketAdapter = new Gu(e, s), this.httpEndpoint = xa(e), this.fetch = this._resolveFetch(r?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   *
   * @category Realtime
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const r = e.message;
        throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   *
   * @category Realtime
   */
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   *
   * @category Realtime
   */
  async disconnect(e, r) {
    return this._cancelPendingDisconnect(), this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
    }, e, r);
  }
  /**
   * Returns all created channels
   *
   * @category Realtime
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes, removes and tears down a single channel
   * @param channel A RealtimeChannel instance
   *
   * @category Realtime
   */
  async removeChannel(e) {
    const r = await e.unsubscribe();
    return r === "ok" && e.teardown(), r;
  }
  /**
   * Unsubscribes, removes and tears down all channels
   *
   * @category Realtime
   */
  async removeAllChannels() {
    const e = this.channels.map(async (n) => {
      const s = await n.unsubscribe();
      return n.teardown(), s;
    }), r = await Promise.all(e);
    return await this.disconnect(), r;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden in Client constructor.
   *
   * @category Realtime
   */
  log(e, r, n) {
    this.socketAdapter.log(e, r, n);
  }
  /**
   * Returns the current state of the socket.
   *
   * @category Realtime
   */
  connectionState() {
    return this.socketAdapter.connectionState() || Es.closed;
  }
  /**
   * Returns `true` is the connection is open.
   *
   * @category Realtime
   */
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  /**
   * Returns `true` if the connection is currently connecting.
   *
   * @category Realtime
   */
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   *
   * @category Realtime
   */
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   *
   * @category Realtime
   */
  channel(e, r = { config: {} }) {
    const n = `realtime:${e}`, s = this.getChannels().find((i) => i.topic === n);
    if (s)
      return s;
    {
      const i = new Br(`realtime:${e}`, r, this);
      return this._cancelPendingDisconnect(), this.channels.push(i), i;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   *
   * @category Realtime
   */
  push(e) {
    this.socketAdapter.push(e);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example Setting the authorization header
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   *
   * @category Realtime
   */
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   *
   * @category Realtime
   */
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   *
   * @category Realtime
   */
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  /**
   * Removes a channel from RealtimeClient
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((r) => r.topic !== e.topic), this.channels.length === 0 && (this.log("transport", "no channels remaining, scheduling disconnect"), this._schedulePendingDisconnect());
  }
  /** @internal */
  _schedulePendingDisconnect() {
    if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels"), this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log("transport", "deferred disconnect fired - no channels, disconnecting"), this.disconnect());
    }, this._disconnectOnEmptyChannelsAfterMs), this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  /** @internal */
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null && (this.log("transport", "pending disconnect cancelled - channel activity detected"), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e = null) {
    let r, n = !1;
    if (e)
      r = e, n = !0;
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        this.log("error", "Error fetching access token from callback", s), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    n ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((s) => {
      const i = {
        access_token: r,
        version: Su
      };
      r && s.updateJoinPayload(i), s.joinedOnce && s.channelAdapter.isJoined() && s.channelAdapter.push(Aa.access_token, {
        access_token: r
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this._isManualToken() || this.setAuth().catch((r) => {
      this.log("error", `Error setting auth in ${e}`, r);
    });
  }
  /** @internal */
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((r) => {
        this.log("error", "error waiting for auth on connect", r);
      }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }), this.socketAdapter.onClose(() => {
      this.worker && this.workerRef && this._terminateWorker();
    }), this.socketAdapter.onMessage((e) => {
      e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
    });
  }
  /** @internal */
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  /** @internal */
  _wrapHeartbeatCallback(e) {
    return (r, n) => {
      r == "sent" && this._setAuthSafely(), e && e(r, n);
    };
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (r) => {
      this.log("worker", "worker error", r.message), this._terminateWorker(), this.disconnect();
    }, this.workerRef.onmessage = (r) => {
      r.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _workerObjectUrl(e) {
    let r;
    if (e)
      r = e;
    else {
      const n = new Blob([eh], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  /**
   * Initialize socket options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var r, n, s, i, o, a, l, c, u, h, d, f;
    this.worker = (r = e?.worker) !== null && r !== void 0 ? r : !1, this.accessToken = (n = e?.accessToken) !== null && n !== void 0 ? n : null;
    const g = {};
    g.timeout = (s = e?.timeout) !== null && s !== void 0 ? s : Tu, g.heartbeatIntervalMs = (i = e?.heartbeatIntervalMs) !== null && i !== void 0 ? i : Vi.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = (o = e?.disconnectOnEmptyChannelsAfterMs) !== null && o !== void 0 ? o : 2 * ((a = e?.heartbeatIntervalMs) !== null && a !== void 0 ? a : Vi.HEARTBEAT_INTERVAL), g.transport = (l = e?.transport) !== null && l !== void 0 ? l : bu.getWebSocketConstructor(), g.params = e?.params, g.logger = e?.logger, g.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), g.sessionStorage = (c = e?.sessionStorage) !== null && c !== void 0 ? c : Zu(), g.reconnectAfterMs = (u = e?.reconnectAfterMs) !== null && u !== void 0 ? u : ((w) => Yu[w - 1] || Xu);
    let v, y;
    const b = (h = e?.vsn) !== null && h !== void 0 ? h : Eu;
    switch (b) {
      case ku:
        v = (w, S) => S(JSON.stringify(w)), y = (w, S) => S(JSON.parse(w));
        break;
      case Ra:
        v = this.serializer.encode.bind(this.serializer), y = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${g.vsn}`);
    }
    if (g.vsn = b, g.encode = (d = e?.encode) !== null && d !== void 0 ? d : v, g.decode = (f = e?.decode) !== null && f !== void 0 ? f : y, g.beforeReconnect = this._reconnectAuth.bind(this), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, g.params = Object.assign(Object.assign({}, g.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e?.workerUrl, g.autoSendHeartbeat = !this.worker;
    }
    return g;
  }
  /** @internal */
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var zr = class extends Error {
  constructor(t, e) {
    super(t), this.name = "IcebergError", this.status = e.status, this.icebergType = e.icebergType, this.icebergCode = e.icebergCode, this.details = e.details, this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && e.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function rh(t, e, r) {
  const n = new URL(e, t);
  if (r)
    for (const [s, i] of Object.entries(r))
      i !== void 0 && n.searchParams.set(s, i);
  return n.toString();
}
async function nh(t) {
  return !t || t.type === "none" ? {} : t.type === "bearer" ? { Authorization: `Bearer ${t.token}` } : t.type === "header" ? { [t.name]: t.value } : t.type === "custom" ? await t.getHeaders() : {};
}
function sh(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: s,
      body: i,
      headers: o
    }) {
      const a = rh(t.baseUrl, n, s), l = await nh(t.auth), c = await e(a, {
        method: r,
        headers: {
          ...i ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: i ? JSON.stringify(i) : void 0
      }), u = await c.text(), h = (c.headers.get("content-type") || "").includes("application/json"), d = h && u ? JSON.parse(u) : u;
      if (!c.ok) {
        const f = h ? d : void 0, g = f?.error;
        throw new zr(
          g?.message ?? `Request failed with status ${c.status}`,
          {
            status: c.status,
            icebergType: g?.type,
            icebergCode: g?.code,
            details: f
          }
        );
      }
      return { status: c.status, headers: c.headers, data: d };
    }
  };
}
function un(t) {
  return t.join("");
}
var ih = class {
  constructor(t, e = "") {
    this.client = t, this.prefix = e;
  }
  async listNamespaces(t) {
    const e = t ? { parent: un(t.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(t, e) {
    const r = {
      namespace: t.namespace,
      properties: e?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${un(t.namespace)}`
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${un(t.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(t) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${un(t.namespace)}`
      }), !0;
    } catch (e) {
      if (e instanceof zr && e.status === 404)
        return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (r) {
      if (r instanceof zr && r.status === 409)
        return;
      throw r;
    }
  }
};
function Qt(t) {
  return t.join("");
}
var oh = class {
  constructor(t, e = "", r) {
    this.client = t, this.prefix = e, this.accessDelegation = r;
  }
  async listTables(t) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(t, e) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables`,
      body: e,
      headers: r
    })).data.metadata;
  }
  async updateTable(t, e) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables/${t.name}`,
      body: e
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(t, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables/${t.name}`,
      query: { purgeRequested: String(e?.purge ?? !1) }
    });
  }
  async loadTable(t) {
    const e = {};
    return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables/${t.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(t) {
    const e = {};
    this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Qt(t.namespace)}/tables/${t.name}`,
        headers: e
      }), !0;
    } catch (r) {
      if (r instanceof zr && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(t, e) {
    try {
      return await this.createTable(t, e);
    } catch (r) {
      if (r instanceof zr && r.status === 409)
        return await this.loadTable({ namespace: t.namespace, name: e.name });
      throw r;
    }
  }
}, ah = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(t) {
    let e = "v1";
    t.catalogName && (e += `/${t.catalogName}`);
    const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
    this.client = sh({
      baseUrl: r,
      auth: t.auth,
      fetchImpl: t.fetch
    }), this.accessDelegation = t.accessDelegation?.join(","), this.namespaceOps = new ih(this.client, e), this.tableOps = new oh(this.client, e, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(t) {
    return this.namespaceOps.listNamespaces(t);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(t, e) {
    return this.namespaceOps.createNamespace(t, e);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(t) {
    await this.namespaceOps.dropNamespace(t);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(t) {
    return this.namespaceOps.loadNamespaceMetadata(t);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(t) {
    return this.tableOps.listTables(t);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(t, e) {
    return this.tableOps.createTable(t, e);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(t, e) {
    return this.tableOps.updateTable(t, e);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(t, e) {
    await this.tableOps.dropTable(t, e);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(t) {
    return this.tableOps.loadTable(t);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(t) {
    return this.namespaceOps.namespaceExists(t);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(t) {
    return this.tableOps.tableExists(t);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(t, e) {
    return this.namespaceOps.createNamespaceIfNotExists(t, e);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(t, e) {
    return this.tableOps.createTableIfNotExists(t, e);
  }
};
function Jr(t) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jr(t);
}
function lh(t, e) {
  if (Jr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ch(t) {
  var e = lh(t, "string");
  return Jr(e) == "symbol" ? e : e + "";
}
function uh(t, e, r) {
  return (e = ch(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function zi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zi(Object(r), !0).forEach(function(n) {
      uh(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zi(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Wn = class extends Error {
  constructor(t, e = "storage", r, n) {
    super(t), this.__isStorageError = !0, this.namespace = e, this.name = e === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function Kn(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var As = class extends Wn {
  constructor(t, e, r, n = "storage") {
    super(t, n, e, r), this.name = n === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = e, this.statusCode = r;
  }
  toJSON() {
    return J({}, super.toJSON());
  }
}, $a = class extends Wn {
  constructor(t, e, r = "storage") {
    super(t, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = e;
  }
};
function On(t, e, r) {
  const n = J({}, t), s = e.toLowerCase();
  for (const i of Object.keys(n)) i.toLowerCase() === s && delete n[i];
  return n[s] = r, n;
}
function hh(t) {
  const e = {};
  for (const [r, n] of Object.entries(t)) e[r.toLowerCase()] = n;
  return e;
}
const dh = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), fh = (t) => {
  if (typeof t != "object" || t === null) return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Os = (t) => {
  if (Array.isArray(t)) return t.map((r) => Os(r));
  if (typeof t == "function" || t !== Object(t)) return t;
  const e = {};
  return Object.entries(t).forEach(([r, n]) => {
    const s = r.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[s] = Os(n);
  }), e;
}, ph = (t) => !t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t), Ji = (t) => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string") return e.msg;
    if (typeof e.message == "string") return e.message;
    if (typeof e.error_description == "string") return e.error_description;
    if (typeof e.error == "string") return e.error;
    if (typeof e.error == "object" && e.error !== null) {
      const r = e.error;
      if (typeof r.message == "string") return r.message;
    }
  }
  return JSON.stringify(t);
}, gh = async (t, e, r, n) => {
  if (t !== null && typeof t == "object" && "json" in t && typeof t.json == "function") {
    const s = t;
    let i = parseInt(String(s.status), 10);
    Number.isFinite(i) || (i = 500), s.json().then((o) => {
      const a = o?.statusCode || o?.code || i + "";
      e(new As(Ji(o), i, a, n));
    }).catch(() => {
      const o = i + "";
      e(new As(s.statusText || `HTTP ${i} error`, i, o, n));
    });
  } else e(new $a(Ji(t), t, n));
}, mh = (t, e, r, n) => {
  const s = {
    method: t,
    headers: e?.headers || {}
  };
  if (t === "GET" || t === "HEAD" || !n) return J(J({}, s), r);
  if (fh(n)) {
    var i;
    const o = e?.headers || {};
    let a;
    for (const [l, c] of Object.entries(o)) l.toLowerCase() === "content-type" && (a = c);
    s.headers = On(o, "Content-Type", (i = a) !== null && i !== void 0 ? i : "application/json"), s.body = JSON.stringify(n);
  } else s.body = n;
  return e?.duplex && (s.duplex = e.duplex), J(J({}, s), r);
};
async function Cr(t, e, r, n, s, i, o) {
  return new Promise((a, l) => {
    t(r, mh(e, n, s, i)).then((c) => {
      if (!c.ok) throw c;
      if (n?.noResolveJson) return c;
      if (o === "vectors") {
        const u = c.headers.get("content-type");
        if (c.headers.get("content-length") === "0" || c.status === 204) return {};
        if (!u || !u.includes("application/json")) return {};
      }
      return c.json();
    }).then((c) => a(c)).catch((c) => gh(c, l, n, o));
  });
}
function Ia(t = "storage") {
  return {
    get: async (e, r, n, s) => Cr(e, "GET", r, n, s, void 0, t),
    post: async (e, r, n, s, i) => Cr(e, "POST", r, s, i, n, t),
    put: async (e, r, n, s, i) => Cr(e, "PUT", r, s, i, n, t),
    head: async (e, r, n, s) => Cr(e, "HEAD", r, J(J({}, n), {}, { noResolveJson: !0 }), s, void 0, t),
    remove: async (e, r, n, s, i) => Cr(e, "DELETE", r, s, i, n, t)
  };
}
const vh = Ia("storage"), { get: Gr, post: Ve, put: xs, head: yh, remove: ri } = vh, Me = Ia("vectors");
var _r = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(t, e = {}, r, n = "storage") {
    this.shouldThrowOnError = !1, this.url = t, this.headers = hh(e), this.fetch = dh(r), this.namespace = n;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(t, e) {
    return this.headers = On(this.headers, t, e), this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example Handling an operation
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(t) {
    var e = this;
    try {
      return {
        data: await t(),
        error: null
      };
    } catch (r) {
      if (e.shouldThrowOnError) throw r;
      if (Kn(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
let ja;
ja = Symbol.toStringTag;
var wh = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[ja] = "StreamDownloadBuilder", this.promise = null;
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: (await t.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (Kn(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
let La;
La = Symbol.toStringTag;
var bh = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[La] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new wh(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: await (await t.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (Kn(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
const _h = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Gi = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var Sh = class extends _r {
  constructor(t, e = {}, r, n) {
    super(t, e, n, "storage"), this.bucketId = r;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(t, e, r, n) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const o = J(J({}, Gi), n);
      let a = J(J({}, s.headers), t === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      if (typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), l && i.append("metadata", s.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.has("cacheControl") || i.append("cacheControl", o.cacheControl), l && !i.has("metadata") && i.append("metadata", s.encodeMetadata(l))) : (i = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers) for (const [d, f] of Object.entries(n.headers)) a = On(a, d, f);
      const c = s._removeEmptyFolders(e), u = s._getFinalPath(c), h = await (t == "PUT" ? xs : Ve)(s.fetch, `${s.url}/object/${u}`, i, J({ headers: a }, o?.duplex ? { duplex: o.duplex } : {}));
      return {
        path: c,
        id: h.Id,
        fullPath: h.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Upload file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async upload(t, e, r) {
    return this.uploadOrUpdate("POST", t, e, r);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async uploadToSignedUrl(t, e, r, n) {
    var s = this;
    const i = s._removeEmptyFolders(t), o = s._getFinalPath(i), a = new URL(s.url + `/object/upload/sign/${o}`);
    return a.searchParams.set("token", e), s.handleOperation(async () => {
      let l;
      const c = J(J({}, Gi), n);
      let u = J(J({}, s.headers), { "x-upsert": String(c.upsert) });
      const h = c.metadata;
      if (typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), h && l.append("metadata", s.encodeMetadata(h)), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.has("cacheControl") || l.append("cacheControl", c.cacheControl), h && !l.has("metadata") && l.append("metadata", s.encodeMetadata(h))) : (l = r, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType, h && (u["x-metadata"] = s.toBase64(s.encodeMetadata(h))), (typeof ReadableStream < "u" && l instanceof ReadableStream || l && typeof l == "object" && "pipe" in l && typeof l.pipe == "function") && !c.duplex && (c.duplex = "half")), n?.headers) for (const [d, f] of Object.entries(n.headers)) u = On(u, d, f);
      return {
        path: i,
        fullPath: (await xs(s.fetch, a.toString(), l, J({ headers: u }, c?.duplex ? { duplex: c.duplex } : {}))).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUploadUrl(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(t);
      const s = J({}, r.headers);
      e?.upsert && (s["x-upsert"] = "true");
      const i = await Ve(r.fetch, `${r.url}/object/upload/sign/${n}`, {}, { headers: s }), o = new URL(r.url + i.url), a = o.searchParams.get("token");
      if (!a) throw new Wn("No token returned by API");
      return {
        signedUrl: o.toString(),
        path: t,
        token: a
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, and metadata.
  * **Note:** The `upsert` option has no effect here. `update()` always replaces the
  * file at the given path, so the `x-upsert` header is not sent. To control upsert
  * behavior, use `upload()` instead.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - `update()` always replaces the file at the given path regardless of the `upsert` option.
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Update file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async update(t, e, r) {
    return this.uploadOrUpdate("PUT", t, e, r);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async move(t, e, r) {
    var n = this;
    return n.handleOperation(async () => await Ve(n.fetch, `${n.url}/object/move`, {
      bucketId: n.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination options.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async copy(t, e, r) {
    var n = this;
    return n.handleOperation(async () => ({ path: (await Ve(n.fetch, `${n.url}/object/copy`, {
      bucketId: n.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: r?.destinationBucket
    }, { headers: n.headers })).Key }));
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrl(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      let s = n._getFinalPath(t);
      const i = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
      let o = await Ve(n.fetch, `${n.url}/object/sign/${s}`, J({ expiresIn: e }, i ? { transform: r.transform } : {}), { headers: n.headers });
      const a = new URLSearchParams();
      r?.download && a.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && a.set("cacheNonce", String(r.cacheNonce));
      const l = a.toString();
      return { signedUrl: encodeURI(`${n.url}${o.signedURL}${l ? `&${l}` : ""}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrls(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = await Ve(n.fetch, `${n.url}/object/sign/${n.bucketId}`, {
        expiresIn: e,
        paths: t
      }, { headers: n.headers }), i = new URLSearchParams();
      r?.download && i.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && i.set("cacheNonce", String(r.cacheNonce));
      const o = i.toString();
      return s.map((a) => J(J({}, a), {}, { signedUrl: a.signedURL ? encodeURI(`${n.url}${a.signedURL}${o ? `&${o}` : ""}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  download(t, e, r) {
    const n = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object", s = new URLSearchParams();
    e?.transform && this.applyTransformOptsToQuery(s, e.transform), e?.cacheNonce != null && s.set("cacheNonce", String(e.cacheNonce));
    const i = s.toString(), o = this._getFinalPath(t), a = () => Gr(this.fetch, `${this.url}/${n}/${o}${i ? `?${i}` : ""}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new bh(a, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * Returns detailed file metadata including size, content type, and timestamps.
  * Note: The API returns `last_modified` field, not `updated_at`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  *
  * if (data) {
  *   console.log('Last modified:', data.lastModified)
  *   console.log('Size:', data.size)
  * }
  * ```
  */
  async info(t) {
    var e = this;
    const r = e._getFinalPath(t);
    return e.handleOperation(async () => Os(await Gr(e.fetch, `${e.url}/object/info/${r}`, { headers: e.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(t) {
    var e = this;
    const r = e._getFinalPath(t);
    try {
      return await yh(e.fetch, `${e.url}/object/${r}`, { headers: e.headers }), {
        data: !0,
        error: null
      };
    } catch (s) {
      if (e.shouldThrowOnError) throw s;
      if (Kn(s)) {
        var n;
        const i = s instanceof As ? s.status : s instanceof $a ? (n = s.originalError) === null || n === void 0 ? void 0 : n.status : void 0;
        if (i !== void 0 && [400, 404].includes(i)) return {
          data: !1,
          error: s
        };
      }
      throw s;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - The bucket needs to be set to public, either via [updateBucket()](/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  getPublicUrl(t, e) {
    const r = this._getFinalPath(t), n = new URLSearchParams();
    e?.download && n.set("download", e.download === !0 ? "" : e.download), e?.transform && this.applyTransformOptsToQuery(n, e.transform), e?.cacheNonce != null && n.set("cacheNonce", String(e.cacheNonce));
    const s = n.toString(), i = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${r}`) + (s ? `?${s}` : "") } };
  }
  /**
  * Deletes files within the same bucket
  *
  * Returns an array of FileObject entries for the deleted files. Note that deprecated
  * fields like `bucket_id` may or may not be present in the response - do not rely on them.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `delete` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async remove(t) {
    var e = this;
    return e.handleOperation(async () => await ri(e.fetch, `${e.url}/object/${e.bucketId}`, { prefixes: t }, { headers: e.headers }));
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * **Important:** For folder entries, fields like `id`, `updated_at`, `created_at`,
  * `last_accessed_at`, and `metadata` will be `null`. Only files have these fields populated.
  * Additionally, deprecated fields like `bucket_id`, `owner`, and `buckets` are NOT returned
  * by this method.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files/folders or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  *
  * // Handle files vs folders
  * data?.forEach(item => {
  *   if (item.id !== null) {
  *     // It's a file
  *     console.log('File:', item.name, 'Size:', item.metadata?.size)
  *   } else {
  *     // It's a folder
  *     console.log('Folder:', item.name)
  *   }
  * })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async list(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = J(J(J({}, _h), e), {}, { prefix: t || "" });
      return await Ve(n.fetch, `${n.url}/object/list/${n.bucketId}`, s, { headers: n.headers }, r);
    });
  }
  /**
  * Lists all the files and folders within a bucket using the V2 API with pagination support.
  *
  * **Important:** Folder entries in the `folders` array only contain `name` and optionally `key` —
  * they have no `id`, timestamps, or `metadata` fields. Full file metadata is only available
  * on entries in the `objects` array.
  *
  * @experimental this method signature might change in the future
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Search options including prefix, cursor for pagination, limit, with_delimiter
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing folders/objects arrays with pagination info or error
  *
  * @example List files with pagination
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .listV2({
  *     prefix: 'folder/',
  *     limit: 100,
  *   })
  *
  * // Handle pagination
  * if (data?.hasNext) {
  *   const nextPage = await supabase
  *     .storage
  *     .from('avatars')
  *     .listV2({
  *       prefix: 'folder/',
  *       cursor: data.nextCursor,
  *     })
  * }
  *
  * // Handle files vs folders
  * data?.objects.forEach(file => {
  *   if (file.id !== null) {
  *     console.log('File:', file.name, 'Size:', file.metadata?.size)
  *   }
  * })
  * data?.folders.forEach(folder => {
  *   console.log('Folder:', folder.name)
  * })
  * ```
  */
  async listV2(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      const n = J({}, t);
      return await Ve(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, n, { headers: r.headers }, e);
    });
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  /** Modifies the `query`, appending values the from `transform` */
  applyTransformOptsToQuery(t, e) {
    return e.width && t.set("width", e.width.toString()), e.height && t.set("height", e.height.toString()), e.resize && t.set("resize", e.resize), e.format && t.set("format", e.format), e.quality && t.set("quality", e.quality.toString()), t;
  }
};
const kh = "2.106.1", en = { "X-Client-Info": `storage-js/${kh}` };
var Eh = class extends _r {
  constructor(t, e = {}, r, n) {
    const s = new URL(t);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(s.hostname) && !s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
    const i = s.href.replace(/\/$/, ""), o = J(J({}, en), e);
    super(i, o, r, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const r = e.listBucketOptionsToQueryString(t);
      return await Gr(e.fetch, `${e.url}/bucket${r}`, { headers: e.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Gr(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `insert`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createBucket(t, e = { public: !1 }) {
    var r = this;
    return r.handleOperation(async () => await Ve(r.fetch, `${r.url}/bucket`, {
      id: t,
      name: t,
      type: e.type,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async updateBucket(t, e) {
    var r = this;
    return r.handleOperation(async () => await xs(r.fetch, `${r.url}/bucket/${t}`, {
      id: t,
      name: t,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, { headers: r.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: `select` and `delete`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async emptyBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Ve(e.fetch, `${e.url}/bucket/${t}/empty`, {}, { headers: e.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `delete`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ri(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
  }
  listBucketOptionsToQueryString(t) {
    const e = {};
    return t && ("limit" in t && (e.limit = String(t.limit)), "offset" in t && (e.offset = String(t.offset)), t.search && (e.search = t.search), t.sortColumn && (e.sortColumn = t.sortColumn), t.sortOrder && (e.sortOrder = t.sortOrder)), Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : "";
  }
}, Th = class extends _r {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.storage.analytics.listBuckets()
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageAnalyticsClient } from '@supabase/storage-js'
  *
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(t, e = {}, r) {
    const n = t.replace(/\/$/, ""), s = J(J({}, en), e);
    super(n, s, r, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Creates a new analytics bucket using Iceberg tables
  * - Analytics buckets are optimized for analytical queries and data processing
  */
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Ve(e.fetch, `${e.url}/bucket`, { name: t }, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Retrieves the details of all Analytics Storage buckets within an existing project
  * - Only returns buckets of type 'ANALYTICS'
  */
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const r = new URLSearchParams();
      t?.limit !== void 0 && r.set("limit", t.limit.toString()), t?.offset !== void 0 && r.set("offset", t.offset.toString()), t?.sortColumn && r.set("sortColumn", t.sortColumn), t?.sortOrder && r.set("sortOrder", t.sortOrder), t?.search && r.set("search", t.search);
      const n = r.toString(), s = n ? `${e.url}/bucket?${n}` : `${e.url}/bucket`;
      return await Gr(e.fetch, s, { headers: e.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Deletes an analytics bucket
  */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ri(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(t) {
    var e = this;
    if (!ph(t)) throw new Wn("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new ah({
      baseUrl: this.url,
      catalogName: t,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    }), n = this.shouldThrowOnError;
    return new Proxy(r, { get(s, i) {
      const o = s[i];
      return typeof o != "function" ? o : async (...a) => {
        try {
          return {
            data: await o.apply(s, a),
            error: null
          };
        } catch (l) {
          if (n) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, Ch = class extends _r {
  /** Creates a new VectorIndexApi instance */
  constructor(t, e = {}, r) {
    const n = t.replace(/\/$/, ""), s = J(J({}, en), {}, { "Content-Type": "application/json" }, e);
    super(n, s, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/CreateIndex`, t, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(t, e) {
    var r = this;
    return r.handleOperation(async () => await Me.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/ListIndexes`, t, { headers: e.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(t, e) {
    var r = this;
    return r.handleOperation(async () => await Me.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: r.headers }) || {});
  }
}, Rh = class extends _r {
  /** Creates a new VectorDataApi instance */
  constructor(t, e = {}, r) {
    const n = t.replace(/\/$/, ""), s = J(J({}, en), {}, { "Content-Type": "application/json" }, e);
    super(n, s, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(t) {
    var e = this;
    if (t.vectors.length < 1 || t.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/PutVectors`, t, { headers: e.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/GetVectors`, t, { headers: e.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(t) {
    var e = this;
    if (t.segmentCount !== void 0) {
      if (t.segmentCount < 1 || t.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
    }
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/ListVectors`, t, { headers: e.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/QueryVectors`, t, { headers: e.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(t) {
    var e = this;
    if (t.keys.length < 1 || t.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/DeleteVectors`, t, { headers: e.headers }) || {});
  }
}, Ah = class extends _r {
  /** Creates a new VectorBucketApi instance */
  constructor(t, e = {}, r) {
    const n = t.replace(/\/$/, ""), s = J(J({}, en), {}, { "Content-Type": "application/json" }, e);
    super(n, s, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/CreateVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/GetVectorBucket`, { vectorBucketName: t }, { headers: e.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(t = {}) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/ListVectorBuckets`, t, { headers: e.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Me.post(e.fetch, `${e.url}/DeleteVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
}, Oh = class extends Ah {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageVectorsClient } from '@supabase/storage-js'
  *
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(t, e = {}) {
    super(t, e.headers || {}, e.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example Accessing a vector bucket
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(t) {
    return new xh(this.url, this.headers, t, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(t) {
    var e = () => super.createBucket, r = this;
    return e().call(r, t);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example Get bucket metadata
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(t) {
    var e = () => super.getBucket, r = this;
    return e().call(r, t);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example List vector buckets
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(t = {}) {
    var e = () => super.listBuckets, r = this;
    return e().call(r, t);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(t) {
    var e = () => super.deleteBucket, r = this;
    return e().call(r, t);
  }
}, xh = class extends Ch {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector bucket scope
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(t, e, r, n) {
    super(t, e, n), this.vectorBucketName = r;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(t) {
    var e = () => super.createIndex, r = this;
    return e().call(r, J(J({}, t), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example List indexes
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(t = {}) {
    var e = () => super.listIndexes, r = this;
    return e().call(r, J(J({}, t), {}, { vectorBucketName: r.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example Get index metadata
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(t) {
    var e = () => super.getIndex, r = this;
    return e().call(r, r.vectorBucketName, t);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete an index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(t) {
    var e = () => super.deleteIndex, r = this;
    return e().call(r, r.vectorBucketName, t);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example Accessing an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(t) {
    return new Ph(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
}, Ph = class extends Rh {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector index scope
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(t, e, r, n, s) {
    super(t, e, s), this.vectorBucketName = r, this.indexName = n;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Insert vectors into an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(t) {
    var e = () => super.putVectors, r = this;
    return e().call(r, J(J({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example Get vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(t) {
    var e = () => super.getVectors, r = this;
    return e().call(r, J(J({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example List vectors with pagination
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(t = {}) {
    var e = () => super.listVectors, r = this;
    return e().call(r, J(J({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing matches array of similar vectors ordered by distance or error
  *
  * @example Query similar vectors
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(t) {
    var e = () => super.queryVectors, r = this;
    return e().call(r, J(J({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Delete vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(t) {
    var e = () => super.deleteVectors, r = this;
    return e().call(r, J(J({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, $h = class extends Eh {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const avatars = supabase.storage.from('avatars')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'your-publishable-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(t, e = {}, r, n) {
    super(t, e, r, n);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @param id The bucket id to operate on.
  *
  * @example Accessing a bucket
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(t) {
    return new Sh(this.url, this.headers, t, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  *
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new Oh(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  *
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new Th(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Na = "2.106.1", or = 30 * 1e3, Ps = 3, ns = Ps * or, Ih = "http://localhost:9999", jh = "supabase.auth.token", Lh = { "X-Client-Info": `gotrue-js/${Na}` }, $s = "X-Supabase-Api-Version", Da = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Nh = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Dh = 600 * 1e3;
class yr extends Error {
  constructor(e, r, n) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function M(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Uh extends yr {
  constructor(e, r, n) {
    super(e, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function Mh(t) {
  return M(t) && t.name === "AuthApiError";
}
class Je extends yr {
  constructor(e, r) {
    super(e), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class Et extends yr {
  constructor(e, r, n, s) {
    super(e, n, s), this.name = r, this.status = n;
  }
}
class Ce extends Et {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function hn(t) {
  return M(t) && t.name === "AuthSessionMissingError";
}
class Zt extends Et {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class dn extends Et {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class fn extends Et {
  constructor(e, r = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function Bh(t) {
  return M(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Yi extends Et {
  constructor(e, r = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class Hh extends Et {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class Is extends Et {
  constructor(e, r) {
    super(e, "AuthRetryableFetchError", r, void 0);
  }
}
function ss(t) {
  return M(t) && t.name === "AuthRetryableFetchError";
}
class Xi extends Et {
  constructor(e, r, n) {
    super(e, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class js extends Et {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Qi = ` 	
\r=`.split(""), qh = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < Qi.length; e += 1)
    t[Qi[e].charCodeAt(0)] = -2;
  for (let e = 0; e < xn.length; e += 1)
    t[xn[e].charCodeAt(0)] = e;
  return t;
})();
function Zi(t, e, r) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      r(xn[n]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      r(xn[n]), e.queuedBits -= 6;
    }
}
function Ua(t, e, r) {
  const n = qh[t];
  if (n > -1)
    for (e.queue = e.queue << 6 | n, e.queuedBits += 6; e.queuedBits >= 8; )
      r(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function eo(t) {
  const e = [], r = (o) => {
    e.push(String.fromCodePoint(o));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, s = { queue: 0, queuedBits: 0 }, i = (o) => {
    Kh(o, n, r);
  };
  for (let o = 0; o < t.length; o += 1)
    Ua(t.charCodeAt(o), s, i);
  return e.join("");
}
function Fh(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(192 | t >> 6), e(128 | t & 63);
    return;
  } else if (t <= 65535) {
    e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  } else if (t <= 1114111) {
    e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function Wh(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    let n = t.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const s = (n - 55296) * 1024 & 65535;
      n = (t.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536, r += 1;
    }
    Fh(n, e);
  }
}
function Kh(t, e, r) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      r(t);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if ((t >> 7 - n & 1) === 0) {
        e.utf8seq = n;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = t & 31;
    else if (e.utf8seq === 3)
      e.codepoint = t & 15;
    else if (e.utf8seq === 4)
      e.codepoint = t & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && r(e.codepoint);
  }
}
function pr(t) {
  const e = [], r = { queue: 0, queuedBits: 0 }, n = (s) => {
    e.push(s);
  };
  for (let s = 0; s < t.length; s += 1)
    Ua(t.charCodeAt(s), r, n);
  return new Uint8Array(e);
}
function Vh(t) {
  const e = [];
  return Wh(t, (r) => e.push(r)), new Uint8Array(e);
}
function qt(t) {
  const e = [], r = { queue: 0, queuedBits: 0 }, n = (s) => {
    e.push(s);
  };
  return t.forEach((s) => Zi(s, r, n)), Zi(null, r, n), e.join("");
}
function zh(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function Jh() {
  return Symbol("auth-callback");
}
const Ae = () => typeof window < "u" && typeof document < "u", Dt = {
  tested: !1,
  writable: !1
}, Ma = () => {
  if (!Ae())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Dt.tested)
    return Dt.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Dt.tested = !0, Dt.writable = !0;
  } catch {
    Dt.tested = !0, Dt.writable = !1;
  }
  return Dt.writable;
};
function Gh(t) {
  const e = {}, r = new URL(t);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((s, i) => {
        e[i] = s;
      });
    } catch {
    }
  return r.searchParams.forEach((n, s) => {
    e[s] = n;
  }), e;
}
const Ba = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), Yh = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", ar = async (t, e, r) => {
  await t.setItem(e, JSON.stringify(r));
}, Ut = async (t, e) => {
  const r = await t.getItem(e);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return null;
  }
}, Re = async (t, e) => {
  await t.removeItem(e);
};
class Vn {
  constructor() {
    this.promise = new Vn.promiseConstructor((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
}
Vn.promiseConstructor = Promise;
function pn(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new js("Invalid JWT structure");
  for (let n = 0; n < e.length; n++)
    if (!Nh.test(e[n]))
      throw new js("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(eo(e[0])),
    payload: JSON.parse(eo(e[1])),
    signature: pr(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Xh(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function Qh(t, e) {
  return new Promise((n, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await t(i);
          if (!e(i, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function Zh(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function ed() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let s = "";
    for (let i = 0; i < 56; i++)
      s += r.charAt(Math.floor(Math.random() * n));
    return s;
  }
  return crypto.getRandomValues(e), Array.from(e, Zh).join("");
}
async function td(t) {
  const r = new TextEncoder().encode(t), n = await crypto.subtle.digest("SHA-256", r), s = new Uint8Array(n);
  return Array.from(s).map((i) => String.fromCharCode(i)).join("");
}
async function rd(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const r = await td(t);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function er(t, e, r = !1) {
  const n = ed();
  let s = n;
  r && (s += "/recovery"), await ar(t, `${e}-code-verifier`, s);
  const i = await rd(n);
  return [i, n === i ? "plain" : "s256"];
}
const nd = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function sd(t) {
  const e = t.headers.get($s);
  if (!e || !e.match(nd))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function id(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function od(t) {
  switch (t) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const ad = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function pt(t) {
  if (!ad.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Ke(t) {
  if (!t.passkey)
    throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function is() {
  const t = {};
  return new Proxy(t, {
    get: (e, r) => {
      if (r === "__isUserNotAvailableProxy")
        return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function ld(t, e) {
  return new Proxy(t, {
    get: (r, n, s) => {
      if (n === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof n == "symbol") {
        const i = n.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, n, s);
      }
      return !e.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(r, n, s);
    }
  });
}
function to(t) {
  return JSON.parse(JSON.stringify(t));
}
const Ht = (t) => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string")
      return e.msg;
    if (typeof e.message == "string")
      return e.message;
    if (typeof e.error_description == "string")
      return e.error_description;
    if (typeof e.error == "string")
      return e.error;
  }
  return JSON.stringify(t);
}, cd = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function ro(t) {
  var e;
  if (!Yh(t))
    throw new Is(Ht(t), 0);
  if (cd.includes(t.status))
    throw new Is(Ht(t), t.status);
  let r;
  try {
    r = await t.json();
  } catch (i) {
    throw new Je(Ht(i), i);
  }
  let n;
  const s = sd(t);
  if (s && s.getTime() >= Da["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new Xi(Ht(r), t.status, ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (n === "session_not_found")
      throw new Ce();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new Xi(Ht(r), t.status, r.weak_password.reasons);
  throw new Uh(Ht(r), t.status || 500, n);
}
const ud = (t, e, r, n) => {
  const s = { method: t, headers: e?.headers || {} };
  return t === "GET" ? s : (s.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e?.headers), s.body = JSON.stringify(n), Object.assign(Object.assign({}, s), r));
};
async function F(t, e, r, n) {
  var s;
  const i = Object.assign({}, n?.headers);
  i[$s] || (i[$s] = Da["2024-01-01"].name), n?.jwt && (i.Authorization = `Bearer ${n.jwt}`);
  const o = (s = n?.query) !== null && s !== void 0 ? s : {};
  n?.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await hd(t, e, r + a, {
    headers: i,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function hd(t, e, r, n, s, i) {
  const o = ud(e, n, s, i);
  let a;
  try {
    a = await t(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new Is(Ht(l), 0);
  }
  if (a.ok || await ro(a), n?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await ro(l);
  }
}
function qe(t) {
  var e;
  let r = null;
  pd(t) && (r = Object.assign({}, t), t.expires_at || (r.expires_at = zh(t.expires_in)));
  const n = (e = t.user) !== null && e !== void 0 ? e : null;
  return { data: { session: r, user: n }, error: null };
}
function no(t) {
  const e = qe(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function Rt(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function dd(t) {
  return { data: t, error: null };
}
function fd(t) {
  const { action_link: e, email_otp: r, hashed_token: n, redirect_to: s, verification_type: i } = t, o = Fn(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: r,
    hashed_token: n,
    redirect_to: s,
    verification_type: i
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function so(t) {
  return t;
}
function pd(t) {
  return !!t.access_token && !!t.refresh_token && !!t.expires_in;
}
const os = ["global", "local", "others"];
class gd {
  _encodePathSegment(e) {
    if (e === "." || e === "..")
      throw new yr("Invalid path segment");
    return encodeURIComponent(e);
  }
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-secret-key')
   * const { data, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}` },
   * })
   * ```
   */
  constructor({ url: e = "", headers: r = {}, fetch: n, experimental: s }) {
    this.url = e, this.headers = r, this.fetch = Ba(n), this.experimental = s ?? {}, this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    }, this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    }, this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   *
   * @category Auth
   * @subcategory Auth Admin
   */
  async signOut(e, r = os[0]) {
    if (os.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${os.join(", ")}`);
    try {
      return await F(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (M(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Sends an invite link to the user's email address.
   * - The `inviteUserByEmail()` method is typically used by administrators to invite users to join the application.
   * - Note that PKCE is not supported when using `inviteUserByEmail`. This is because the browser initiating the invite is often different from the browser accepting the invite which makes it difficult to provide the security guarantees required of the PKCE flow.
   *
   * @example Invite a user
   * ```js
   * const { data, error } = await supabase.auth.admin.inviteUserByEmail('email@example.com')
   * ```
   *
   * @exampleResponse Invite a user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "invited_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async inviteUserByEmail(e, r = {}) {
    try {
      return await F(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Rt
      });
    } catch (n) {
      if (M(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `email_change_current`, `email_change_new`, `phone_change`.
   * - `generateLink()` only generates the email link for `email_change_email` if the **Secure email change** is enabled in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   * - `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.
   *
   * @example Generate a signup link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   password: 'secret'
   * })
   * ```
   *
   * @exampleResponse Generate a signup link
   * ```json
   * {
   *   "data": {
   *     "properties": {
   *       "action_link": "<LINK_TO_SEND_TO_USER>",
   *       "email_otp": "999999",
   *       "hashed_token": "<HASHED_TOKEN",
   *       "redirect_to": "<REDIRECT_URL>",
   *       "verification_type": "signup"
   *     },
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "email@example.com",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "email@example.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Generate an invite link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'invite',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a magic link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'magiclink',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a recovery link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'recovery',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate links to change current email address
   * ```js
   * // generate an email change link to be sent to the current email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_current',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   *
   * // generate an email change link to be sent to the new email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_new',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   * ```
   */
  async generateLink(e) {
    try {
      const { options: r } = e, n = Fn(e, ["options"]), s = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (s.new_email = n?.newEmail, delete s.newEmail), await F(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: s,
        headers: this.headers,
        xform: fd,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (M(r))
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      throw r;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
   * - `createUser()` will not send a confirmation email to the user. You can use [`inviteUserByEmail()`](/docs/reference/javascript/auth-admin-inviteuserbyemail) if you want to send them an email invite instead.
   * - If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.
   *
   * @example With custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   password: 'password',
   *   user_metadata: { name: 'Yoda' }
   * })
   * ```
   *
   * @exampleResponse With custom user metadata
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   *
   * @example Auto-confirm the user's email
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   email_confirm: true
   * })
   * ```
   *
   * @example Auto-confirm the user's phone number
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   phone: '1234567890',
   *   phone_confirm: true
   * })
   * ```
   */
  async createUser(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Rt
      });
    } catch (r) {
      if (M(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Defaults to return 50 users per page.
   *
   * @example Get a page of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Paginated list of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers({
   *   page: 1,
   *   perPage: 1000
   * })
   * ```
   */
  async listUsers(e) {
    var r, n, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await F(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = e?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (i = (s = e?.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: so
      });
      if (u.error)
        throw u.error;
      const h = await u.json(), d = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, f = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return f.length > 0 && (f.forEach((g) => {
        const v = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), y = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${y}Page`] = v;
      }), c.total = parseInt(d)), { data: Object.assign(Object.assign({}, h), c), error: null };
    } catch (c) {
      if (M(c))
        return { data: { users: [] }, error: c };
      throw c;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Fetches the user object from the database based on the user's id.
   * - The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.
   *
   * @example Fetch the user object using the access_token jwt
   * ```js
   * const { data, error } = await supabase.auth.admin.getUserById(1)
   * ```
   *
   * @exampleResponse Fetch the user object using the access_token jwt
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   */
  async getUserById(e) {
    pt(e);
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Rt
      });
    } catch (r) {
      if (M(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param uid The user's unique identifier
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @remarks
   * **Important:** This is a server-side operation and does **not** trigger client-side
   * `onAuthStateChange` listeners. The admin API has no connection to client state.
   *
   * To sync changes to the client after calling this method:
   * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
   * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
   *
   * @example
   * ```typescript
   * // Server-side (Edge Function)
   * const { data, error } = await supabase.auth.admin.updateUserById(
   *   userId,
   *   { user_metadata: { preferences: { theme: 'dark' } } }
   * )
   *
   * // Client-side (to sync the changes)
   * const { data, error } = await supabase.auth.refreshSession()
   * // onAuthStateChange listeners will now be notified with updated user
   * ```
   *
   * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
   * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @example Updates a user's email
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '11111111-1111-1111-1111-111111111111',
   *   { email: 'new@email.com' }
   * )
   * ```
   *
   * @exampleResponse Updates a user's email
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "new@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Updates a user's password
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { password: 'new_password' }
   * )
   * ```
   *
   * @example Updates a user's metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { user_metadata: { hello: 'world' } }
   * )
   * ```
   *
   * @example Updates a user's app_metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { app_metadata: { plan: 'trial' } }
   * )
   * ```
   *
   * @example Confirms a user's email address
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { email_confirm: true }
   * )
   * ```
   *
   * @example Confirms a user's phone number
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { phone_confirm: true }
   * )
   * ```
   *
   * @example Ban a user for 100 years
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { ban_duration: '876000h' }
   * )
   * ```
   */
  async updateUserById(e, r) {
    pt(e);
    try {
      return await F(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: r,
        headers: this.headers,
        xform: Rt
      });
    } catch (n) {
      if (M(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.
   *
   * @example Removes a user
   * ```js
   * const { data, error } = await supabase.auth.admin.deleteUser(
   *   '715ed5db-f090-4b8c-a067-640ecee36aa0'
   * )
   * ```
   *
   * @exampleResponse Removes a user
   * ```json
   * {
   *   "data": {
   *     "user": {}
   *   },
   *   "error": null
   * }
   * ```
   */
  async deleteUser(e, r = !1) {
    pt(e);
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Rt
      });
    } catch (n) {
      if (M(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(e) {
    pt(e.userId);
    try {
      const { data: r, error: n } = await F(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (s) => ({ data: { factors: s }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(e) {
    pt(e.userId), pt(e.id);
    try {
      return { data: await F(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(e) {
    var r, n, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await F(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = e?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (i = (s = e?.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: so
      });
      if (u.error)
        throw u.error;
      const h = await u.json(), d = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, f = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return f.length > 0 && (f.forEach((g) => {
        const v = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), y = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${y}Page`] = v;
      }), c.total = parseInt(d)), { data: Object.assign(Object.assign({}, h), c), error: null };
    } catch (c) {
      if (M(c))
        return { data: { clients: [] }, error: c };
      throw c;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(e) {
    try {
      const r = this._encodePathSegment(e);
      return await F(this.fetch, "GET", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(e, r) {
    try {
      const n = this._encodePathSegment(e);
      return await F(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${n}`, {
        body: r,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (n) {
      if (M(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(e) {
    try {
      const r = this._encodePathSegment(e);
      return await F(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(e) {
    try {
      const r = this._encodePathSegment(e);
      return await F(this.fetch, "POST", `${this.url}/admin/oauth/clients/${r}/regenerate_secret`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all custom providers with optional type filter.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listCustomProviders(e) {
    try {
      const r = {};
      return e?.type && (r.type = e.type), await F(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: r,
        xform: (n) => {
          var s;
          return { data: { providers: (s = n?.providers) !== null && s !== void 0 ? s : [] }, error: null };
        }
      });
    } catch (r) {
      if (M(r))
        return { data: { providers: [] }, error: r };
      throw r;
    }
  }
  /**
   * Creates a new custom OIDC/OAuth provider.
   *
   * For OIDC providers, the server fetches and validates the OpenID Connect discovery document
   * from the issuer's well-known endpoint (or the provided `discovery_url`) at creation time.
   * This may return a validation error (`error_code: "validation_failed"`) if the discovery
   * document is unreachable, not valid JSON, missing required fields, or if the issuer
   * in the document does not match the expected issuer.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createCustomProvider(e) {
    try {
      return await F(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Gets details of a specific custom provider by identifier.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getCustomProvider(e) {
    try {
      const r = this._encodePathSegment(e);
      return await F(this.fetch, "GET", `${this.url}/admin/custom-providers/${r}`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Updates an existing custom provider.
   *
   * When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and
   * validates the discovery document before persisting. This may return a validation error
   * (`error_code: "validation_failed"`) if the discovery document is unreachable, invalid, or
   * the issuer does not match.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateCustomProvider(e, r) {
    try {
      const n = this._encodePathSegment(e);
      return await F(this.fetch, "PUT", `${this.url}/admin/custom-providers/${n}`, {
        body: r,
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (n) {
      if (M(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes a custom provider.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteCustomProvider(e) {
    try {
      const r = this._encodePathSegment(e);
      return await F(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all passkeys for a user.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminListPasskeys(e) {
    Ke(this.experimental), pt(e.userId);
    try {
      return await F(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, { headers: this.headers, xform: (r) => ({ data: r, error: null }) });
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes a user's passkey.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   *
   * Requires `auth.experimental.passkey: true`.
   */
  async _adminDeletePasskey(e) {
    Ke(this.experimental), pt(e.userId), pt(e.passkeyId);
    try {
      return await F(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, { headers: this.headers, noResolveJson: !0 }), { data: null, error: null };
    } catch (r) {
      if (M(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function io(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, r) => {
      t[e] = r;
    },
    removeItem: (e) => {
      delete t[e];
    }
  };
}
const st = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Ma() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ha extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class oo extends Ha {
}
async function md(t, e, r) {
  st.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const n = new globalThis.AbortController();
  let s;
  e > 0 && (s = setTimeout(() => {
    n.abort(), st.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e)), await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(t, e === 0 ? {
      mode: "exclusive",
      ifAvailable: !0
    } : {
      mode: "exclusive",
      signal: n.signal
    }, async (i) => {
      if (i) {
        clearTimeout(s), st.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, i.name);
        try {
          return await r();
        } finally {
          st.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, i.name);
        }
      } else {
        if (e === 0)
          throw st.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new oo(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
        if (st.debug)
          try {
            const o = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "));
          } catch (o) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(s), await r();
      }
    });
  } catch (i) {
    if (e > 0 && clearTimeout(s), i !== null && typeof i == "object" && "name" in i && i.name === "AbortError" && e > 0) {
      if (n.signal.aborted)
        return st.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", t), console.warn(`@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, {
          mode: "exclusive",
          steal: !0
        }, async (o) => {
          if (o) {
            st.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", t, o.name);
            try {
              return await r();
            } finally {
              st.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", t, o.name);
            }
          } else
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await r();
        }));
      throw st.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", t), new oo(`Lock "${t}" was released because another request stole it`);
    }
    throw i;
  }
}
function vd() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function qa(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function yd(t) {
  return parseInt(t, 16);
}
function wd(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function bd(t) {
  var e;
  const { chainId: r, domain: n, expirationTime: s, issuedAt: i = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: c, scheme: u, uri: h, version: d } = t;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!h)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (d !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
    if (!((e = t.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`);
  }
  const f = qa(t.address), g = u ? `${u}://${n}` : n, v = t.statement ? `${t.statement}
` : "", y = `${g} wants you to sign in with your Ethereum account:
${f}

${v}`;
  let b = `URI: ${h}
Version: ${d}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
  if (s && (b += `
Expiration Time: ${s.toISOString()}`), a && (b += `
Not Before: ${a.toISOString()}`), l && (b += `
Request ID: ${l}`), c) {
    let w = `
Resources:`;
    for (const S of c) {
      if (!S || typeof S != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${S}`);
      w += `
- ${S}`;
    }
    b += w;
  }
  return `${y}
${b}`;
}
class be extends Error {
  constructor({ message: e, code: r, cause: n, name: s }) {
    var i;
    super(e, { cause: n }), this.__isWebAuthnError = !0, this.name = (i = s ?? (n instanceof Error ? n.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class Pn extends be {
  constructor(e, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function _d({ error: t, options: e }) {
  var r, n, s;
  const { publicKey: i } = e;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new be({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else if (t.name === "ConstraintError") {
    if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new be({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new be({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t
      });
    if (((s = i.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required")
      return new be({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t
      });
  } else {
    if (t.name === "InvalidStateError")
      return new be({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t
      });
    if (t.name === "NotAllowedError")
      return new be({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new be({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: t
      }) : new be({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: t
      });
    if (t.name === "SecurityError") {
      const o = window.location.hostname;
      if (Fa(o)) {
        if (i.rp.id !== o)
          return new be({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new be({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new be({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t
        });
    } else if (t.name === "UnknownError")
      return new be({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new be({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
function Sd({ error: t, options: e }) {
  const { publicKey: r } = e;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new be({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else {
    if (t.name === "NotAllowedError")
      return new be({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "SecurityError") {
      const n = window.location.hostname;
      if (Fa(n)) {
        if (r.rpId !== n)
          return new be({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new be({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "UnknownError")
      return new be({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new be({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
class kd {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      r.name = "AbortError", this.controller.abort(r);
    }
    const e = new AbortController();
    return this.controller = e, e.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
    }
  }
}
const Ls = new kd();
function ao(t) {
  if (!t)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      t
    );
  const { challenge: e, user: r, excludeCredentials: n } = t, s = Fn(
    t,
    ["challenge", "user", "excludeCredentials"]
  ), i = pr(e).buffer, o = Object.assign(Object.assign({}, r), { id: pr(r.id).buffer }), a = Object.assign(Object.assign({}, s), {
    challenge: i,
    user: o
  });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const c = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: pr(c.id).buffer,
        type: c.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: c.transports
      });
    }
  }
  return a;
}
function lo(t) {
  if (!t)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: r } = t, n = Fn(
    t,
    ["challenge", "allowCredentials"]
  ), s = pr(e).buffer, i = Object.assign(Object.assign({}, n), { challenge: s });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: pr(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return i;
}
function co(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const r = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: qt(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: qt(new Uint8Array(t.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function uo(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const r = t, n = t.getClientExtensionResults(), s = t.response;
  return {
    id: t.id,
    rawId: t.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: qt(new Uint8Array(s.authenticatorData)),
      clientDataJSON: qt(new Uint8Array(s.clientDataJSON)),
      signature: qt(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? qt(new Uint8Array(s.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Fa(t) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
  );
}
function $n() {
  var t, e;
  return !!(Ae() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function Wa(t) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Pn("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Pn("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: _d({
        error: e,
        options: t
      })
    };
  }
}
async function Ka(t) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Pn("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Pn("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: Sd({
        error: e,
        options: t
      })
    };
  }
}
const Ed = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, Td = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function In(...t) {
  const e = (s) => s !== null && typeof s == "object" && !Array.isArray(s), r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s), n = {};
  for (const s of t)
    if (s)
      for (const i in s) {
        const o = s[i];
        if (o !== void 0)
          if (Array.isArray(o))
            n[i] = o;
          else if (r(o))
            n[i] = o;
          else if (e(o)) {
            const a = n[i];
            e(a) ? n[i] = In(a, o) : n[i] = In(o);
          } else
            n[i] = o;
      }
  return n;
}
function Cd(t, e) {
  return In(Ed, t, e || {});
}
function Rd(t, e) {
  return In(Td, t, e || {});
}
class Ad {
  constructor(e) {
    this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: e, webauthn: r, friendlyName: n, signal: s }, i) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: r
      });
      if (!a)
        return { data: null, error: l };
      const c = s ?? Ls.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: u } = a.webauthn.credential_options.publicKey;
        if (!u.name) {
          const h = n;
          if (h)
            u.name = `${u.id}:${h}`;
          else {
            const f = (await this.client.getUser()).data.user, g = ((o = f?.user_metadata) === null || o === void 0 ? void 0 : o.name) || f?.email || f?.id || "User";
            u.name = `${u.id}:${g}`;
          }
        }
        u.displayName || (u.displayName = u.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const u = Cd(a.webauthn.credential_options.publicKey, i?.create), { data: h, error: d } = await Wa({
            publicKey: u,
            signal: c
          });
          return h ? {
            data: {
              factorId: e,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: h
              }
            },
            error: null
          } : { data: null, error: d };
        }
        case "request": {
          const u = Rd(a.webauthn.credential_options.publicKey, i?.request), { data: h, error: d } = await Ka(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: u, signal: c }));
          return h ? {
            data: {
              factorId: e,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: h
              }
            },
            error: null
          } : { data: null, error: d };
        }
      }
    } catch (a) {
      return M(a) ? { data: null, error: a } : {
        data: null,
        error: new Je("Unexpected error in challenge", a)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: e, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: e,
      webauthn: n
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: e, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: s } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new yr("rpId is required for WebAuthn authentication")
      };
    try {
      if (!$n())
        return {
          data: null,
          error: new Je("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this.challenge({
        factorId: e,
        webauthn: { rpId: r, rpOrigins: n },
        signal: s
      }, { request: i });
      if (!o)
        return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return M(o) ? { data: null, error: o } : {
        data: null,
        error: new Je("Unexpected error in authenticate", o)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: e, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: s } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new yr("rpId is required for WebAuthn registration")
      };
    try {
      if (!$n())
        return {
          data: null,
          error: new Je("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: e
      });
      if (!o)
        return await this.client.mfa.listFactors().then((u) => {
          var h;
          return (h = u.data) === null || h === void 0 ? void 0 : h.all.find((d) => d.factor_type === "webauthn" && d.friendly_name === e && d.status !== "unverified");
        }).then((u) => u ? this.client.mfa.unenroll({ factorId: u?.id }) : void 0), { data: null, error: a };
      const { data: l, error: c } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: r, rpOrigins: n },
        signal: s
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: r,
          rpOrigins: n,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: c };
    } catch (o) {
      return M(o) ? { data: null, error: o } : {
        data: null,
        error: new Je("Unexpected error in register", o)
      };
    }
  }
}
vd();
const Od = {
  url: Ih,
  storageKey: jh,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Lh,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1,
  experimental: {}
};
async function ho(t, e, r) {
  return await r();
}
const tr = {};
class Yr {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, r;
    return (r = (e = tr[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(e) {
    tr[this.storageKey] = Object.assign(Object.assign({}, tr[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, r;
    return (r = (e = tr[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    tr[this.storageKey] = Object.assign(Object.assign({}, tr[this.storageKey]), { cachedAt: e });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.auth.getUser()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'your-publishable-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(e) {
    var r, n, s, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const o = Object.assign(Object.assign({}, Od), e);
    if (this.storageKey = o.storageKey, this.instanceID = (r = Yr.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Yr.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!o.debug, typeof o.debug == "function" && (this.logger = o.debug), this.instanceID > 0 && Ae()) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(a), this.logDebugMessages && console.trace(a);
    }
    if (this.persistSession = o.persistSession, this.autoRefreshToken = o.autoRefreshToken, this.experimental = (n = o.experimental) !== null && n !== void 0 ? n : {}, this.admin = new gd({
      url: o.url,
      headers: o.headers,
      fetch: o.fetch,
      experimental: this.experimental
    }), this.url = o.url, this.headers = o.headers, this.fetch = Ba(o.fetch), this.lock = o.lock || ho, this.detectSessionInUrl = o.detectSessionInUrl, this.flowType = o.flowType, this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader, this.throwOnError = o.throwOnError, this.lockAcquireTimeout = o.lockAcquireTimeout, o.lock ? this.lock = o.lock : this.persistSession && Ae() && (!((s = globalThis?.navigator) === null || s === void 0) && s.locks) ? this.lock = md : this.lock = ho, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Ad(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    }, this.persistSession ? (o.storage ? this.storage = o.storage : Ma() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = io(this.memoryStorage)), o.userStorage && (this.userStorage = o.userStorage)) : (this.memoryStorage = {}, this.storage = io(this.memoryStorage)), Ae() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (a) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", a);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (a) => {
        this._debug("received broadcast notification from other tab or client", a);
        try {
          await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
        } catch (l) {
          this._debug("#broadcastChannel", "error", l);
        }
      });
    }
    o.skipAutoInitialize || this.initialize().catch((a) => {
      this._debug("#initialize()", "error", a);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(e) {
    if (this.throwOnError && e && e.error)
      throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Na}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   *
   * @category Auth
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      let r = {}, n = "none";
      if (Ae() && (r = Gh(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), Ae() && this.detectSessionInUrl && n !== "none") {
        const { data: s, error: i } = await this._getSessionFromURL(r, n);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), Bh(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = s;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return M(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new Je("Unexpected error during initialization", r)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   *
   * @category Auth
   *
   * @remarks
   * - Returns an anonymous user
   * - It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.
   *
   * @example Create an anonymous user
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     captchaToken
   *   }
   * });
   * ```
   *
   * @exampleResponse Create an anonymous user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {},
   *       "user_metadata": {},
   *       "identities": [],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": true
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {},
   *         "user_metadata": {},
   *         "identities": [],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": true
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create an anonymous user with custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     data
   *   }
   * })
   * ```
   */
  async signInAnonymously(e) {
    var r, n, s;
    try {
      const i = await F(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = e?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (s = e?.options) === null || s === void 0 ? void 0 : s.captchaToken }
        },
        xform: qe
      }), { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (M(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   *
   * @category Auth
   *
   * @remarks
   * - By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](/dashboard/project/_/auth/providers).
   * - **Confirm email** determines if users need to confirm their email address after signing up.
   *   - If **Confirm email** is enabled, a `user` is returned but `session` is null.
   *   - If **Confirm email** is disabled, both a `user` and a `session` are returned.
   * - When the user confirms their email address, they are redirected to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](/dashboard/project/_/auth/url-configuration).
   * - If signUp() is called for an existing confirmed user:
   *   - When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in [your project](/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
   *   - When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.
   * - To fetch the currently logged-in user, refer to [`getUser()`](/docs/reference/javascript/auth-getuser).
   *
   * @example Sign up with an email and password
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign up with an email and password
   * ```json
   * // Some fields may be null if "confirm email" is enabled.
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign up with a phone number and password (SMS)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'sms'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign up with a phone number and password (whatsapp)
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign up with a phone number and password (whatsapp)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'whatsapp'
   *   }
   * })
   * ```
   *
   * @example Sign up with additional user metadata
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       data: {
   *         first_name: 'John',
   *         age: 27,
   *       }
   *     }
   *   }
   * )
   * ```
   *
   * @exampleDescription Sign up with a redirect URL
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign up with a redirect URL
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       emailRedirectTo: 'https://example.com/welcome'
   *     }
   *   }
   * )
   * ```
   */
  async signUp(e) {
    var r, n, s;
    try {
      let i;
      if ("email" in e) {
        const { email: u, password: h, options: d } = e;
        let f = null, g = null;
        this.flowType === "pkce" && ([f, g] = await er(this.storage, this.storageKey)), i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: d?.emailRedirectTo,
          body: {
            email: u,
            password: h,
            data: (r = d?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: d?.captchaToken },
            code_challenge: f,
            code_challenge_method: g
          },
          xform: qe
        });
      } else if ("phone" in e) {
        const { phone: u, password: h, options: d } = e;
        i = await F(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: h,
            data: (n = d?.data) !== null && n !== void 0 ? n : {},
            channel: (s = d?.channel) !== null && s !== void 0 ? s : "sms",
            gotrue_meta_security: { captcha_token: d?.captchaToken }
          },
          xform: qe
        });
      } else
        throw new dn("You must provide either an email or phone number and a password");
      const { data: o, error: a } = i;
      if (a || !o)
        return await Re(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email and password or a phone number and password.
   *
   * @example Sign in with email and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign in with email and password
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign in with phone and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   phone: '+13334445555',
   *   password: 'some-password',
   * })
   * ```
   */
  async signInWithPassword(e) {
    try {
      let r;
      if ("email" in e) {
        const { email: i, password: o, options: a } = e;
        r = await F(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: no
        });
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        r = await F(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: no
        });
      } else
        throw new dn("You must provide either an email or phone number and a password");
      const { data: n, error: s } = r;
      if (s)
        return this._returnResult({ data: { user: null, session: null }, error: s });
      if (!n || !n.session || !n.user) {
        const i = new Zt();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: s
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used for signing in using [Social Login (OAuth) providers](/docs/guides/auth#configure-third-party-providers).
   * - It works by redirecting your application to the provider's authorization screen, before bringing back the user to your app.
   *
   * @example Sign in using a third-party provider
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Sign in using a third-party provider
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   *
   * @exampleDescription Sign in using a third-party provider with redirect
   * - When the OAuth provider successfully authenticates the user, they are redirected to the URL specified in the `redirectTo` parameter. This parameter defaults to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls). It does not redirect the user immediately after invoking this method.
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign in using a third-party provider with redirect
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     redirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign in with scopes and access provider tokens
   * If you need additional access from an OAuth provider, in order to access provider specific APIs in the name of the user, you can do this by passing in the scopes the user should authorize for your application. Note that the `scopes` option takes in **a space-separated list** of scopes.
   *
   * Because OAuth sign-in often includes redirects, you should register an `onAuthStateChange` callback immediately after you create the Supabase client. This callback will listen for the presence of `provider_token` and `provider_refresh_token` properties on the `session` object and store them in local storage. The client library will emit these values **only once** immediately after the user signs in. You can then access them by looking them up in local storage, or send them to your backend servers for further processing.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Sign in with scopes and access provider tokens
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   *
   * // Call this on your Sign in with GitHub button to initiate OAuth
   * // with GitHub with the requested elevated scopes.
   * await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     scopes: 'repo gist notifications'
   *   }
   * })
   * ```
   */
  async signInWithOAuth(e) {
    var r, n, s, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - Used when `flowType` is set to `pkce` in client options.
   *
   * @example Exchange Auth Code
   * ```js
   * supabase.auth.exchangeCodeForSession('34e770dd-9ff9-416c-87fa-43b31d7ef225')
   * ```
   *
   * @exampleResponse Exchange Auth Code
   * ```json
   * {
   *   "data": {
   *     session: {
   *       access_token: '<ACCESS_TOKEN>',
   *       token_type: 'bearer',
   *       expires_in: 3600,
   *       expires_at: 1700000000,
   *       refresh_token: '<REFRESH_TOKEN>',
   *       user: {
   *         id: '11111111-1111-1111-1111-111111111111',
   *         aud: 'authenticated',
   *         role: 'authenticated',
   *         email: 'example@email.com'
   *         email_confirmed_at: '2024-01-01T00:00:00Z',
   *         phone: '',
   *         confirmation_sent_at: '2024-01-01T00:00:00Z',
   *         confirmed_at: '2024-01-01T00:00:00Z',
   *         last_sign_in_at: '2024-01-01T00:00:00Z',
   *         app_metadata: {
   *           "provider": "email",
   *           "providers": [
   *             "email",
   *             "<OTHER_PROVIDER>"
   *           ]
   *         },
   *         user_metadata: {
   *           email: 'email@email.com',
   *           email_verified: true,
   *           full_name: 'User Name',
   *           iss: '<ISS>',
   *           name: 'User Name',
   *           phone_verified: false,
   *           provider_id: '<PROVIDER_ID>',
   *           sub: '<SUB>'
   *         },
   *         identities: [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "email@example.com"
   *           },
   *           {
   *             "identity_id": "33333333-3333-3333-3333-333333333333",
   *             "id": "<ID>",
   *             "user_id": "<USER_ID>",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": true,
   *               "full_name": "User Name",
   *               "iss": "<ISS>",
   *               "name": "User Name",
   *               "phone_verified": false,
   *               "provider_id": "<PROVIDER_ID>",
   *               "sub": "<SUB>"
   *             },
   *             "provider": "<PROVIDER>",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         created_at: '2024-01-01T00:00:00Z',
   *         updated_at: '2024-01-01T00:00:00Z',
   *         is_anonymous: false
   *       },
   *       provider_token: '<PROVIDER_TOKEN>',
   *       provider_refresh_token: '<PROVIDER_REFRESH_TOKEN>'
   *     },
   *     user: {
   *       id: '11111111-1111-1111-1111-111111111111',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {
   *         provider: 'email',
   *         providers: [
   *           "email",
   *           "<OTHER_PROVIDER>"
   *         ]
   *       },
   *       user_metadata: {
   *         email: 'email@email.com',
   *         email_verified: true,
   *         full_name: 'User Name',
   *         iss: '<ISS>',
   *         name: 'User Name',
   *         phone_verified: false,
   *         provider_id: '<PROVIDER_ID>',
   *         sub: '<SUB>'
   *       },
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *         {
   *           "identity_id": "33333333-3333-3333-3333-333333333333",
   *           "id": "<ID>",
   *           "user_id": "<USER_ID>",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "full_name": "User Name",
   *             "iss": "<ISS>",
   *             "name": "User Name",
   *             "phone_verified": false,
   *             "provider_id": "<PROVIDER_ID>",
   *             "sub": "<SUB>"
   *           },
   *           "provider": "<PROVIDER>",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false
   *     },
   *     redirectType: null
   *   },
   *   "error": null
   * }
   * ```
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   *
   * @category Auth
   *
   * @remarks
   * - Uses a Web3 (Ethereum, Solana) wallet to sign a user in.
   * - Read up on the [potential for abuse](/docs/guides/auth/auth-web3#potential-for-abuse) before using it.
   *
   * @example Sign in with Solana or Ethereum (Window API)
   * ```js
   *   // uses window.ethereum for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   *
   *   // uses window.solana for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   * ```
   *
   * @example Sign in with Ethereum (Message and Signature)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     message: '<sign in with ethereum message>',
   *     signature: '<hex of the ethereum signature over the message>',
   *   })
   * ```
   *
   * @example Sign in with Solana (Brave)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos',
   *     wallet: window.braveSolana
   *   })
   * ```
   *
   * @example Sign in with Solana (Wallet Adapter)
   * ```jsx
   *   function SignInButton() {
   *   const wallet = useWallet()
   *
   *   return (
   *     <>
   *       {wallet.connected ? (
   *         <button
   *           onClick={() => {
   *             supabase.auth.signInWithWeb3({
   *               chain: 'solana',
   *               statement: 'I accept the Terms of Service at https://example.com/tos',
   *               wallet,
   *             })
   *           }}
   *         >
   *           Sign in with Solana
   *         </button>
   *       ) : (
   *         <WalletMultiButton />
   *       )}
   *     </>
   *   )
   * }
   *
   * function App() {
   *   const endpoint = clusterApiUrl('devnet')
   *   const wallets = useMemo(() => [], [])
   *
   *   return (
   *     <ConnectionProvider endpoint={endpoint}>
   *       <WalletProvider wallets={wallets}>
   *         <WalletModalProvider>
   *           <SignInButton />
   *         </WalletModalProvider>
   *       </WalletProvider>
   *     </ConnectionProvider>
   *   )
   * }
   * ```
   */
  async signInWithWeb3(e) {
    const { chain: r } = e;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(e) {
    var r, n, s, i, o, a, l, c, u, h, d;
    let f, g;
    if ("message" in e)
      f = e.message, g = e.signature;
    else {
      const { chain: v, wallet: y, statement: b, options: w } = e;
      let S;
      if (Ae())
        if (typeof y == "object")
          S = y;
        else {
          const k = window;
          if ("ethereum" in k && typeof k.ethereum == "object" && "request" in k.ethereum && typeof k.ethereum.request == "function")
            S = k.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof y != "object" || !w?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        S = y;
      }
      const C = new URL((r = w?.url) !== null && r !== void 0 ? r : window.location.href), H = await S.request({
        method: "eth_requestAccounts"
      }).then((k) => k).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!H || H.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const j = qa(H[0]);
      let E = (n = w?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!E) {
        const k = await S.request({
          method: "eth_chainId"
        });
        E = yd(k);
      }
      const T = {
        domain: C.host,
        address: j,
        statement: b,
        uri: C.href,
        version: "1",
        chainId: E,
        nonce: (s = w?.signInWithEthereum) === null || s === void 0 ? void 0 : s.nonce,
        issuedAt: (o = (i = w?.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = w?.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = w?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (c = w?.signInWithEthereum) === null || c === void 0 ? void 0 : c.requestId,
        resources: (u = w?.signInWithEthereum) === null || u === void 0 ? void 0 : u.resources
      };
      f = bd(T), g = await S.request({
        method: "personal_sign",
        params: [wd(f), j]
      });
    }
    try {
      const { data: v, error: y } = await F(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: f,
          signature: g
        }, !((h = e.options) === null || h === void 0) && h.captchaToken ? { gotrue_meta_security: { captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: qe
      });
      if (y)
        throw y;
      if (!v || !v.session || !v.user) {
        const b = new Zt();
        return this._returnResult({ data: { user: null, session: null }, error: b });
      }
      return v.session && (await this._saveSession(v.session), await this._notifyAllSubscribers("SIGNED_IN", v.session)), this._returnResult({ data: Object.assign({}, v), error: y });
    } catch (v) {
      if (M(v))
        return this._returnResult({ data: { user: null, session: null }, error: v });
      throw v;
    }
  }
  async signInWithSolana(e) {
    var r, n, s, i, o, a, l, c, u, h, d, f;
    let g, v;
    if ("message" in e)
      g = e.message, v = e.signature;
    else {
      const { chain: y, wallet: b, statement: w, options: S } = e;
      let C;
      if (Ae())
        if (typeof b == "object")
          C = b;
        else {
          const j = window;
          if ("solana" in j && typeof j.solana == "object" && ("signIn" in j.solana && typeof j.solana.signIn == "function" || "signMessage" in j.solana && typeof j.solana.signMessage == "function"))
            C = j.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof b != "object" || !S?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        C = b;
      }
      const H = new URL((r = S?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in C && C.signIn) {
        const j = await C.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, S?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: H.host,
          uri: H.href
        }), w ? { statement: w } : null));
        let E;
        if (Array.isArray(j) && j[0] && typeof j[0] == "object")
          E = j[0];
        else if (j && typeof j == "object" && "signedMessage" in j && "signature" in j)
          E = j;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in E && "signature" in E && (typeof E.signedMessage == "string" || E.signedMessage instanceof Uint8Array) && E.signature instanceof Uint8Array)
          g = typeof E.signedMessage == "string" ? E.signedMessage : new TextDecoder().decode(E.signedMessage), v = E.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in C) || typeof C.signMessage != "function" || !("publicKey" in C) || typeof C != "object" || !C.publicKey || !("toBase58" in C.publicKey) || typeof C.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        g = [
          `${H.host} wants you to sign in with your Solana account:`,
          C.publicKey.toBase58(),
          ...w ? ["", w, ""] : [""],
          "Version: 1",
          `URI: ${H.href}`,
          `Issued At: ${(s = (n = S?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = S?.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${S.signInWithSolana.notBefore}`] : [],
          ...!((o = S?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${S.signInWithSolana.expirationTime}`] : [],
          ...!((a = S?.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${S.signInWithSolana.chainId}`] : [],
          ...!((l = S?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${S.signInWithSolana.nonce}`] : [],
          ...!((c = S?.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${S.signInWithSolana.requestId}`] : [],
          ...!((h = (u = S?.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || h === void 0) && h.length ? [
            "Resources",
            ...S.signInWithSolana.resources.map((E) => `- ${E}`)
          ] : []
        ].join(`
`);
        const j = await C.signMessage(new TextEncoder().encode(g), "utf8");
        if (!j || !(j instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        v = j;
      }
    }
    try {
      const { data: y, error: b } = await F(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: g, signature: qt(v) }, !((d = e.options) === null || d === void 0) && d.captchaToken ? { gotrue_meta_security: { captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: qe
      });
      if (b)
        throw b;
      if (!y || !y.session || !y.user) {
        const w = new Zt();
        return this._returnResult({ data: { user: null, session: null }, error: w });
      }
      return y.session && (await this._saveSession(y.session), await this._notifyAllSubscribers("SIGNED_IN", y.session)), this._returnResult({ data: Object.assign({}, y), error: b });
    } catch (y) {
      if (M(y))
        return this._returnResult({ data: { user: null, session: null }, error: y });
      throw y;
    }
  }
  async _exchangeCodeForSession(e) {
    const r = await Ut(this.storage, `${this.storageKey}-code-verifier`), [n, s] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce")
        throw new Hh();
      const { data: i, error: o } = await F(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: n
        },
        xform: qe
      });
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new Zt();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers(s === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: s ?? null }), error: o });
    } catch (i) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(i))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i
        });
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   *
   * @category Auth
   *
   * @remarks
   * - Use an ID token to sign in.
   * - Especially useful when implementing sign in using native platform dialogs in mobile or desktop apps using Sign in with Apple or Sign in with Google on iOS and Android.
   * - You can also use Google's [One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) and [Automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) via this API.
   *
   * @example Sign In using ID Token
   * ```js
   * const { data, error } = await supabase.auth.signInWithIdToken({
   *   provider: 'google',
   *   token: 'your-id-token'
   * })
   * ```
   *
   * @exampleResponse Sign In using ID Token
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         ...
   *       },
   *       "user_metadata": {
   *         ...
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "provider": "google",
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           ...
   *         },
   *         "user_metadata": {
   *           ...
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "provider": "google",
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async signInWithIdToken(e) {
    try {
      const { options: r, provider: n, token: s, access_token: i, nonce: o } = e, a = await F(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: s,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: qe
      }), { data: l, error: c } = a;
      if (c)
        return this._returnResult({ data: { user: null, session: null }, error: c });
      if (!l || !l.session || !l.user) {
        const u = new Zt();
        return this._returnResult({ data: { user: null, session: null }, error: u });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: c });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email or phone number.
   * - This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
   * - If the user doesn't exist, `signInWithOtp()` will signup the user instead. To restrict this behavior, you can set `shouldCreateUser` in `SignInWithPasswordlessCredentials.options` to `false`.
   * - If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
   * - If you're using phone, you can configure whether you want the user to receive a OTP.
   * - The magic link's destination URL is determined by the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls).
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.
   * - See our [Twilio Phone Auth Guide](/docs/guides/auth/phone-login?showSMSProvider=Twilio) for details about configuring WhatsApp sign in.
   *
   * @exampleDescription Sign in with email
   * The user will be sent an email which contains either a magiclink or a OTP or both. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with email
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   email: 'example@email.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleResponse Sign in with email
   * ```json
   * {
   *   "data": {
   *     "user": null,
   *     "session": null
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Sign in with SMS OTP
   * The user will be sent a SMS which contains a OTP. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with SMS OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   * })
   * ```
   *
   * @exampleDescription Sign in with WhatsApp OTP
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign in with WhatsApp OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   *   options: {
   *     channel:'whatsapp',
   *   }
   * })
   * ```
   */
  async signInWithOtp(e) {
    var r, n, s, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await er(this.storage, this.storageKey));
        const { error: h } = await F(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (r = l?.data) !== null && r !== void 0 ? r : {},
            create_user: (n = l?.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: h });
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: c, error: u } = await F(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (s = l?.data) !== null && s !== void 0 ? s : {},
            create_user: (i = l?.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (o = l?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: c?.message_id },
          error: u
        });
      }
      throw new dn("You must provide either an email or phone number.");
    } catch (a) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   *
   * @category Auth
   *
   * @remarks
   * - The `verifyOtp` method takes in different verification types.
   * - If a phone number is used, the type can either be:
   *   1. `sms` – Used when verifying a one-time password (OTP) sent via SMS during sign-up or sign-in.
   *   2. `phone_change` – Used when verifying an OTP sent to a new phone number during a phone number update process.
   * - If an email address is used, the type can be one of the following (note: `signup` and `magiclink` types are deprecated):
   *   1. `email` – Used when verifying an OTP sent to the user's email during sign-up or sign-in.
   *   2. `recovery` – Used when verifying an OTP sent for account recovery, typically after a password reset request.
   *   3. `invite` – Used when verifying an OTP sent as part of an invitation to join a project or organization.
   *   4. `email_change` – Used when verifying an OTP sent to a new email address during an email update process.
   * - The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up / sign-in a user.
   * - The `TokenHash` is contained in the [email templates](/docs/guides/auth/auth-email-templates) and can be used to sign in.  You may wish to use the hash for the PKCE flow for Server Side Auth. Read [the Password-based Auth guide](/docs/guides/auth/passwords) for more details.
   *
   * @example Verify Signup One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})
   * ```
   *
   * @exampleResponse Verify Signup One-Time Password (OTP)
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "recovery_sent_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Verify SMS One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms'})
   * ```
   *
   * @example Verify Email Auth (Token Hash)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'email'})
   * ```
   */
  async verifyOtp(e) {
    var r, n;
    try {
      let s, i;
      "options" in e && (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo, i = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: o, error: a } = await F(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: s,
        xform: qe
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, c = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (s) {
      if (M(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   *
   * @category Auth
   *
   * @remarks
   * - Before you can call this method you need to [establish a connection](/docs/guides/auth/sso/auth-sso-saml#managing-saml-20-connections) to an identity provider. Use the [CLI commands](/docs/reference/cli/supabase-sso) to do this.
   * - If you've associated an email domain to the identity provider, you can use the `domain` property to start a sign-in flow.
   * - In case you need to use a different way to start the authentication flow with an identity provider, you can use the `providerId` property. For example:
   *     - Mapping specific user email addresses with an identity provider.
   *     - Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
   *
   * @example Sign in with email domain
   * ```js
   *   // You can extract the user's email domain and use it to trigger the
   *   // authentication flow with the correct identity provider.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     domain: 'company.com'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   *
   * @example Sign in with provider UUID
   * ```js
   *   // Useful when you need to map a user's sign in request according
   *   // to different rules that can't use email domains.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     providerId: '21648a9d-8d5a-4555-a9d1-d6375dc14e92'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   */
  async signInWithSSO(e) {
    var r, n, s, i, o;
    try {
      let a = null, l = null;
      this.flowType === "pkce" && ([a, l] = await er(this.storage, this.storageKey));
      const c = await F(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((s = e?.options) === null || s === void 0) && s.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: dd
      });
      return !((i = c.data) === null || i === void 0) && i.url && Ae() && !(!((o = e.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(c.data.url), this._returnResult(c);
    } catch (a) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used together with `updateUser()` when a user's password needs to be updated.
   * - If you require your user to reauthenticate before updating their password, you need to enable the **Secure password change** option in your [project's email provider settings](/dashboard/project/_/auth/providers).
   * - A user is only require to reauthenticate before updating their password if **Secure password change** is enabled and the user **hasn't recently signed in**. A user is deemed recently signed in if the session was created in the last 24 hours.
   * - This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.
   * - After receiving the OTP, include it as the `nonce` in your `updateUser()` call to finalize the password change.
   *
   * @exampleDescription Send reauthentication nonce
   * Sends a reauthentication nonce to the user's email or phone number.
   *
   * @example Send reauthentication nonce
   * ```js
   * const { error } = await supabase.auth.reauthenticate()
   * ```
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: n } = e;
        if (n)
          throw n;
        if (!r)
          throw new Ce();
        const { error: s } = await F(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: s });
      });
    } catch (e) {
      if (M(e))
        return this._returnResult({ data: { user: null, session: null }, error: e });
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   *
   * @category Auth
   *
   * @remarks
   * - Resends a signup confirmation, email change or phone change email to the user.
   * - Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
   * - Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
   * - This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made(note: For existing users signing in with OTP, you should use `signInWithOtp()` again to resend the OTP).
   * - You can specify a redirect url when you resend an email link using the `emailRedirectTo` option.
   *
   * @exampleDescription Resend an email signup confirmation
   * Resends the email signup confirmation to the user
   *
   * @example Resend an email signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Resend a phone signup confirmation
   * Resends the phone signup confirmation email to the user
   *
   * @example Resend a phone signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'sms',
   *   phone: '1234567890'
   * })
   * ```
   *
   * @exampleDescription Resend email change email
   * Resends the email change email to the user
   *
   * @example Resend email change email
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'email_change',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @exampleDescription Resend phone change OTP
   * Resends the phone change OTP to the user
   *
   * @example Resend phone change OTP
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'phone_change',
   *   phone: '1234567890'
   * })
   * ```
   */
  async resend(e) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in e) {
        const { email: n, type: s, options: i } = e, { error: o } = await F(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: n,
            type: s,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in e) {
        const { phone: n, type: s, options: i } = e, { data: o, error: a } = await F(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: n,
            type: s,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: a
        });
      }
      throw new dn("You must provide either an email or phone number and a type");
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   *
   * @category Auth
   *
   * @remarks
   * - Since the introduction of [asymmetric JWT signing keys](/docs/guides/auth/signing-keys), this method is considered low-level and we encourage you to use `getClaims()` or `getUser()` instead.
   * - Retrieves the current [user session](/docs/guides/auth/sessions) from the storage medium (local storage, cookies).
   * - The session contains an access token (signed JWT), a refresh token and the user object.
   * - If the session's access token is expired or is about to expire, this method will use the refresh token to refresh the session.
   * - When using in a browser, or you've called `startAutoRefresh()` in your environment (React Native, etc.) this function always returns a valid access token without refreshing the session itself, as this is done in the background. This function returns very fast.
   * - **IMPORTANT SECURITY NOTICE:** If using an insecure storage medium, such as cookies or request headers, the user object returned by this function **must not be trusted**. Always verify the JWT using `getClaims()` or your own JWT verification library to securely establish the user's identity and access. You can also use `getUser()` to fetch the user object directly from the Auth server for this purpose.
   * - When using in a browser, this function is synchronized across all tabs using the [LockManager](https://developer.mozilla.org/en-US/docs/Web/API/LockManager) API. In other environments make sure you've defined a proper `lock` property, if necessary, to make sure there are no race conditions while the session is being refreshed.
   *
   * @example Get the session data
   * ```js
   * const { data, error } = await supabase.auth.getSession()
   * ```
   *
   * @exampleResponse Get the session data
   * ```json
   * {
   *   "data": {
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (r) => r));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, r) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), s = (async () => (await n, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await s;
          } catch {
          }
        })()), s;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const n = r();
          for (this.pendingInLock.push((async () => {
            try {
              await n;
            } catch {
            }
          })()), await n; this.pendingInLock.length; ) {
            const s = [...this.pendingInLock];
            await Promise.all(s), this.pendingInLock.splice(0, s.length);
          }
          return await n;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await e(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const r = await Ut(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < ns : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
        if (this.userStorage) {
          const o = await Ut(this.userStorage, this.storageKey + "-user");
          o?.user ? e.user = o.user : e.user = is();
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          e.user = ld(e.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   *
   * @category Auth
   *
   * @remarks
   * - This method fetches the user object from the database instead of local session.
   * - This method is useful for checking if the user is authorized because it validates the user's access token JWT on the server.
   * - Should always be used when checking for user authorization on the server. On the client, you can instead use `getSession().session.user` for faster results. `getSession` is insecure on the server.
   *
   * @example Get the logged in user with the current existing session
   * ```js
   * const { data: { user } } = await supabase.auth.getUser()
   * ```
   *
   * @exampleResponse Get the logged in user with the current existing session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Get the logged in user with a custom access token jwt
   * ```js
   * const { data: { user } } = await supabase.auth.getUser(jwt)
   * ```
   */
  async getUser(e) {
    if (e)
      return await this._getUser(e);
    await this.initializePromise;
    const r = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    return r.data.user && (this.suppressGetSessionWarning = !0), r;
  }
  async _getUser(e) {
    try {
      return e ? await F(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: Rt
      }) : await this._useSession(async (r) => {
        var n, s, i;
        const { data: o, error: a } = r;
        if (a)
          throw a;
        return !(!((n = o.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Ce() } : await F(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
          xform: Rt
        });
      });
    } catch (r) {
      if (M(r))
        return hn(r) && (await this._removeSession(), await Re(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Updates user data for a logged in user.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `updateUser()` method, the user needs to be signed in first.
   * - By default, email updates sends a confirmation link to both the user's current and new email.
   * To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   *
   * @exampleDescription Update the email for an authenticated user
   * Sends a "Confirm Email Change" email to the new address. If **Secure Email Change** is enabled (default), confirmation is also required from the **old email** before the change is applied. To skip dual confirmation and apply the change after only the new email is verified, disable **Secure Email Change** in the [Email Auth Provider settings](/dashboard/project/_/auth/providers?provider=Email).
   *
   * @example Update the email for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   email: 'new@email.com'
   * })
   * ```
   *
   * @exampleResponse Update the email for an authenticated user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "new_email": "new@email.com",
   *       "email_change_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Update the phone number for an authenticated user
   * Sends a one-time password (OTP) to the new phone number.
   *
   * @example Update the phone number for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   phone: '123456789'
   * })
   * ```
   *
   * @example Update the password for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password'
   * })
   * ```
   *
   * @exampleDescription Update the user's metadata
   * Updates the user's custom metadata.
   *
   * **Note**: The `data` field maps to the `auth.users.raw_user_meta_data` column in your Supabase database. When calling `getUser()`, the data will be available as `user.user_metadata`.
   *
   * @example Update the user's metadata
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   data: { hello: 'world' }
   * })
   * ```
   *
   * @exampleDescription Update the user's password with a nonce
   * If **Secure password change** is enabled in your [project's email provider settings](/dashboard/project/_/auth/providers), updating the user's password would require a nonce if the user **hasn't recently signed in**. The nonce is sent to the user's email or phone number. A user is deemed recently signed in if the session was created in the last 24 hours.
   *
   * @example Update the user's password with a nonce
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password',
   *   nonce: '123456'
   * })
   * ```
   */
  async updateUser(e, r = {}) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, r));
  }
  async _updateUser(e, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: s, error: i } = n;
        if (i)
          throw i;
        if (!s.session)
          throw new Ce();
        const o = s.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await er(this.storage, this.storageKey));
        const { data: c, error: u } = await F(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: Rt
        });
        if (u)
          throw u;
        return o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (n) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(n))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method sets the session using an `access_token` and `refresh_token`.
   * - If successful, a `SIGNED_IN` event is emitted.
   *
   * @exampleDescription Set the session
   * Sets the session data from an access_token and refresh_token, then returns an auth response or error.
   *
   * @example Set the session
   * ```js
   *   const { data, error } = await supabase.auth.setSession({
   *     access_token,
   *     refresh_token
   *   })
   * ```
   *
   * @exampleResponse Set the session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "11111111-1111-1111-1111-111111111111",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "2024-01-01T00:00:00Z",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       },
   *       "token_type": "bearer",
   *       "expires_in": 3500,
   *       "expires_at": 1700000000
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new Ce();
      const r = Date.now() / 1e3;
      let n = r, s = !0, i = null;
      const { payload: o } = pn(e.access_token);
      if (o.exp && (n = o.exp, s = n <= r), s) {
        const { data: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!a)
          return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method will refresh and return a new session whether the current one is expired or not.
   *
   * @example Refresh session using the current session
   * ```js
   * const { data, error } = await supabase.auth.refreshSession()
   * const { session, user } = data
   * ```
   *
   * @exampleResponse Refresh session using the current session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Refresh session using a refresh token
   * ```js
   * const { data, error } = await supabase.auth.refreshSession({ refresh_token })
   * const { session, user } = data
   * ```
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!e) {
          const { data: o, error: a } = r;
          if (a)
            throw a;
          e = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!e?.refresh_token)
          throw new Ce();
        const { data: s, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : s ? this._returnResult({ data: { user: s.user, session: s }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, r) {
    var n;
    try {
      if (!Ae())
        throw new fn("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new fn(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Yi("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new fn("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Yi("No code detected.");
        const { data: S, error: C } = await this._exchangeCodeForSession(e.code);
        if (C)
          throw C;
        const H = new URL(window.location.href);
        return H.searchParams.delete("code"), window.history.replaceState(window.history.state, "", H.toString()), {
          data: { session: S.session, redirectType: (n = S.redirectType) !== null && n !== void 0 ? n : null },
          error: null
        };
      }
      const { provider_token: s, provider_refresh_token: i, access_token: o, refresh_token: a, expires_in: l, expires_at: c, token_type: u } = e;
      if (!o || !l || !a || !u)
        throw new fn("No session defined in URL");
      const h = Math.round(Date.now() / 1e3), d = parseInt(l);
      let f = h + d;
      c && (f = parseInt(c));
      const g = f - h;
      g * 1e3 <= or && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);
      const v = f - d;
      h - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, f, h) : h - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, f, h);
      const { data: y, error: b } = await this._getUser(o);
      if (b)
        throw b;
      const w = {
        provider_token: s,
        provider_refresh_token: i,
        access_token: o,
        expires_in: d,
        expires_at: f,
        refresh_token: a,
        token_type: u,
        user: y.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: w, redirectType: e.type }, error: null });
    } catch (s) {
      if (M(s))
        return this._returnResult({ data: { session: null, redirectType: null }, error: s });
      throw s;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const r = await Ut(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && r);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   *
   * **Warning:** the default `scope` is `'global'`. This signs the user out of
   * **every device they are currently signed in on**, not just the current
   * tab/session. If you only want to sign the user out of the current session
   * (the behavior most other auth libraries default to), pass
   * `{ scope: 'local' }` explicitly.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `signOut()` method, the user needs to be signed in first.
   * - By default, `signOut()` uses the **global** scope, which signs out the user
   *   on every device they are signed in on (not just the current one). Pass
   *   `{ scope: 'local' }` to only sign out the current session. This is
   *   usually what apps want on a "Sign out" button, especially when users
   *   sign in from multiple devices and do not expect signing out of one to
   *   terminate the others.
   * - Since Supabase Auth uses JWTs for authentication, the access token JWT will be valid until it's expired. When the user signs out, Supabase revokes the refresh token and deletes the JWT from the client-side. This does not revoke the JWT and it will still be valid until it expires.
   *
   * @example Sign out of every device (global – default)
   * ```js
   * const { error } = await supabase.auth.signOut()
   * ```
   *
   * @example Sign out only the current session (recommended for most apps)
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'local' })
   * ```
   *
   * @example Sign out of all other sessions, keep the current one
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'others' })
   * ```
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: s, error: i } = r;
      if (i && !hn(i))
        return this._returnResult({ error: i });
      const o = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(Mh(a) && (a.status === 404 || a.status === 401 || a.status === 403) || hn(a)))
          return this._returnResult({ error: a });
      }
      return e !== "others" && (await this._removeSession(), await Re(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - Subscribes to important events occurring on the user's session.
   * - Use on the frontend/client. It is less useful on the server.
   * - Events are emitted across tabs to keep your application's UI up-to-date. Some events can fire very frequently, based on the number of tabs open. Use a quick and efficient callback function, and defer or debounce as many operations as you can to be performed outside of the callback.
   * - **Important:** A callback can be an `async` function and it runs synchronously during the processing of the changes causing the event. You can easily create a dead-lock by using `await` on a call to another method of the Supabase library.
   *   - Avoid using `async` functions as callbacks.
   *   - Limit the number of `await` calls in `async` callbacks.
   *   - Do not use other Supabase functions in the callback function. If you must, dispatch the functions once the callback has finished executing. Use this as a quick way to achieve this:
   *     ```js
   *     supabase.auth.onAuthStateChange((event, session) => {
   *       setTimeout(async () => {
   *         // await on other Supabase function here
   *         // this runs right after the callback has finished
   *       }, 0)
   *     })
   *     ```
   * - Emitted events:
   *   - `INITIAL_SESSION`
   *     - Emitted right after the Supabase client is constructed and the initial session from storage is loaded.
   *   - `SIGNED_IN`
   *     - Emitted each time a user session is confirmed or re-established, including on user sign in and when refocusing a tab.
   *     - Avoid making assumptions as to when this event is fired, this may occur even when the user is already signed in. Instead, check the user object attached to the event to see if a new user has signed in and update your application's UI.
   *     - This event can fire very frequently depending on the number of tabs open in your application.
   *   - `SIGNED_OUT`
   *     - Emitted when the user signs out. This can be after:
   *       - A call to `supabase.auth.signOut()`.
   *       - After the user's session has expired for any reason:
   *         - User has signed out on another device.
   *         - The session has reached its timebox limit or inactivity timeout.
   *         - User has signed in on another device with single session per user enabled.
   *         - Check the [User Sessions](/docs/guides/auth/sessions) docs for more information.
   *     - Use this to clean up any local storage your application has associated with the user.
   *   - `TOKEN_REFRESHED`
   *     - Emitted each time a new access and refresh token are fetched for the signed in user.
   *     - It's best practice and highly recommended to extract the access token (JWT) and store it in memory for further use in your application.
   *       - Avoid frequent calls to `supabase.auth.getSession()` for the same purpose.
   *     - There is a background process that keeps track of when the session should be refreshed so you will always receive valid tokens by listening to this event.
   *     - The frequency of this event is related to the JWT expiry limit configured on your project.
   *   - `USER_UPDATED`
   *     - Emitted each time the `supabase.auth.updateUser()` method finishes successfully. Listen to it to update your application's UI based on new profile information.
   *   - `PASSWORD_RECOVERY`
   *     - Emitted instead of the `SIGNED_IN` event when the user lands on a page that includes a password recovery link in the URL.
   *     - Use it to show a UI to the user where they can [reset their password](/docs/guides/auth/passwords#resetting-a-users-password-forgot-password).
   *
   * @example Listen to auth changes
   * ```js
   * const { data } = supabase.auth.onAuthStateChange((event, session) => {
   *   console.log(event, session)
   *
   *   if (event === 'INITIAL_SESSION') {
   *     // handle initial session
   *   } else if (event === 'SIGNED_IN') {
   *     // handle sign in event
   *   } else if (event === 'SIGNED_OUT') {
   *     // handle sign out event
   *   } else if (event === 'PASSWORD_RECOVERY') {
   *     // handle password recovery event
   *   } else if (event === 'TOKEN_REFRESHED') {
   *     // handle token refreshed event
   *   } else if (event === 'USER_UPDATED') {
   *     // handle user updated event
   *   }
   * })
   *
   * // call unsubscribe to remove the callback
   * data.subscription.unsubscribe()
   * ```
   *
   * @exampleDescription Listen to sign out
   * Make sure you clear out any local data, such as local and session storage, after the client library has detected the user's sign out.
   *
   * @example Listen to sign out
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_OUT') {
   *     console.log('SIGNED_OUT', session)
   *
   *     // clear local and session storage
   *     [
   *       window.localStorage,
   *       window.sessionStorage,
   *     ].forEach((storage) => {
   *       Object.entries(storage)
   *         .forEach(([key]) => {
   *           storage.removeItem(key)
   *         })
   *     })
   *   }
   * })
   * ```
   *
   * @exampleDescription Store OAuth provider tokens on sign in
   * When using [OAuth (Social Login)](/docs/guides/auth/social-login) you sometimes wish to get access to the provider's access token and refresh token, in order to call provider APIs in the name of the user.
   *
   * For example, if you are using [Sign in with Google](/docs/guides/auth/social-login/auth-google) you may want to use the provider token to call Google APIs on behalf of the user. Supabase Auth does not keep track of the provider access and refresh token, but does return them for you once, immediately after sign in. You can use the `onAuthStateChange` method to listen for the presence of the provider tokens and store them in local storage. You can further send them to your server's APIs for use on the backend.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Store OAuth provider tokens on sign in
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   * ```
   *
   * @exampleDescription Use React Context for the User's session
   * Instead of relying on `supabase.auth.getSession()` within your React components, you can use a [React Context](https://react.dev/reference/react/createContext) to store the latest session information from the `onAuthStateChange` callback and access it that way.
   *
   * @example Use React Context for the User's session
   * ```js
   * const SessionContext = React.createContext(null)
   *
   * function main() {
   *   const [session, setSession] = React.useState(null)
   *
   *   React.useEffect(() => {
   *     const {data: { subscription }} = supabase.auth.onAuthStateChange(
   *       (event, session) => {
   *         if (event === 'SIGNED_OUT') {
   *           setSession(null)
   *         } else if (session) {
   *           setSession(session)
   *         }
   *       })
   *
   *     return () => {
   *       subscription.unsubscribe()
   *     }
   *   }, [])
   *
   *   return (
   *     <SessionContext.Provider value={session}>
   *       <App />
   *     </SessionContext.Provider>
   *   )
   * }
   * ```
   *
   * @example Listen to password recovery events
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'PASSWORD_RECOVERY') {
   *     console.log('PASSWORD_RECOVERY', session)
   *     // show screen to update user's password
   *     showPasswordResetScreen(true)
   *   }
   * })
   * ```
   *
   * @example Listen to sign in
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
   * })
   * ```
   *
   * @example Listen to token refresh
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'TOKEN_REFRESHED') console.log('TOKEN_REFRESHED', session)
   * })
   * ```
   *
   * @example Listen to user updates
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'USER_UPDATED') console.log('USER_UPDATED', session)
   * })
   * ```
   */
  onAuthStateChange(e) {
    const r = Jh(), n = {
      id: r,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: n } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (r) => {
      var n, s;
      try {
        const { data: { session: i }, error: o } = r;
        if (o)
          throw o;
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), hn(i) ? console.warn(i) : console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   *
   * @category Auth
   *
   * @remarks
   * - The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
   * - The `resetPasswordForEmail()` only sends a password reset link to the user's email.
   * To update the user's password, see [`updateUser()`](/docs/reference/javascript/auth-updateuser).
   * - A `PASSWORD_RECOVERY` event will be emitted when the password recovery link is clicked.
   * You can use [`onAuthStateChange()`](/docs/reference/javascript/auth-onauthstatechange) to listen and invoke a callback function on these events.
   * - When the user clicks the reset link in the email they are redirected back to your application.
   * You can configure the URL that the user is redirected to with the `redirectTo` parameter.
   * See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - After the user has been redirected successfully, prompt them for a new password and call `updateUser()`:
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: new_password
   * })
   * ```
   *
   * @example Reset password
   * ```js
   * const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
   *   redirectTo: 'https://example.com/update-password',
   * })
   * ```
   *
   * @exampleResponse Reset password
   * ```json
   * {
   *   data: {}
   *   error: null
   * }
   * ```
   *
   * @example Reset password (React)
   * ```js
   * /**
   *  * Step 1: Send the user an email to get a password reset token.
   *  * This email contains a link which sends the user back to your application.
   *  *\/
   * const { data, error } = await supabase.auth
   *   .resetPasswordForEmail('user@email.com')
   *
   * /**
   *  * Step 2: Once the user is redirected back to your application,
   *  * ask the user to reset their password.
   *  *\/
   *  useEffect(() => {
   *    supabase.auth.onAuthStateChange(async (event, session) => {
   *      if (event == "PASSWORD_RECOVERY") {
   *        const newPassword = prompt("What would you like your new password to be?");
   *        const { data, error } = await supabase.auth
   *          .updateUser({ password: newPassword })
   *
   *        if (data) alert("Password updated successfully!")
   *        if (error) alert("There was an error updating your password.")
   *      }
   *    })
   *  }, [])
   * ```
   */
  async resetPasswordForEmail(e, r = {}) {
    let n = null, s = null;
    this.flowType === "pkce" && ([n, s] = await er(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await F(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: n,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (i) {
      if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   *
   * @category Auth
   *
   * @remarks
   * - The user needs to be signed in to call `getUserIdentities()`.
   *
   * @example Returns a list of identities linked to the user
   * ```js
   * const { data, error } = await supabase.auth.getUserIdentities()
   * ```
   *
   * @exampleResponse Returns a list of identities linked to the user
   * ```json
   * {
   *   "data": {
   *     "identities": [
   *       {
   *         "identity_id": "22222222-2222-2222-2222-222222222222",
   *         "id": "2024-01-01T00:00:00Z",
   *         "user_id": "2024-01-01T00:00:00Z",
   *         "identity_data": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "provider": "email",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "email": "example@email.com"
   *       }
   *     ]
   *   },
   *   "error": null
   * }
   * ```
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n)
        throw n;
      return this._returnResult({ data: { identities: (e = r.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `linkIdentity()`.
   * - If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.
   * - If `linkIdentity` is run in the browser, the user is automatically redirected to the returned URL. On the server, you should handle the redirect.
   *
   * @example Link an identity to a user
   * ```js
   * const { data, error } = await supabase.auth.linkIdentity({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Link an identity to a user
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>
   *   },
   *   error: null
   * }
   * ```
   */
  async linkIdentity(e) {
    return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var r;
    try {
      const { data: n, error: s } = await this._useSession(async (i) => {
        var o, a, l, c, u;
        const { data: h, error: d } = i;
        if (d)
          throw d;
        const f = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await F(this.fetch, "GET", f, {
          headers: this.headers,
          jwt: (u = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (s)
        throw s;
      return Ae() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: e.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (M(n))
        return this._returnResult({ data: { provider: e.provider, url: null }, error: n });
      throw n;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const { error: s, data: { session: i } } = r;
        if (s)
          throw s;
        const { options: o, provider: a, token: l, access_token: c, nonce: u } = e, h = await F(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n = i?.access_token) !== null && n !== void 0 ? n : void 0,
          body: {
            provider: a,
            id_token: l,
            access_token: c,
            nonce: u,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: qe
        }), { data: d, error: f } = h;
        return f ? this._returnResult({ data: { user: null, session: null }, error: f }) : !d || !d.session || !d.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Zt()
        }) : (d.session && (await this._saveSession(d.session), await this._notifyAllSubscribers("USER_UPDATED", d.session)), this._returnResult({ data: d, error: f }));
      } catch (s) {
        if (await Re(this.storage, `${this.storageKey}-code-verifier`), M(s))
          return this._returnResult({ data: { user: null, session: null }, error: s });
        throw s;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `unlinkIdentity()`.
   * - The user must have at least 2 identities in order to unlink an identity.
   * - The identity to be unlinked must belong to the user.
   *
   * @example Unlink an identity
   * ```js
   * // retrieve all identities linked to a user
   * const identities = await supabase.auth.getUserIdentities()
   *
   * // find the google identity
   * const googleIdentity = identities.find(
   *   identity => identity.provider === 'google'
   * )
   *
   * // unlink the google identity
   * const { error } = await supabase.auth.unlinkIdentity(googleIdentity)
   * ```
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o)
          throw o;
        return await F(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
        });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await Qh(async (s) => (s > 0 && await Xh(200 * Math.pow(2, s - 1)), this._debug(r, "refreshing attempt", s), await F(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: qe
      })), (s, i) => {
        const o = 200 * Math.pow(2, s);
        return i && ss(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - n < or;
      });
    } catch (n) {
      if (this._debug(r, "error", n), M(n))
        return this._returnResult({ data: { session: null, user: null }, error: n });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", n), Ae() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: e, url: n }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const s = await Ut(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await Ut(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: s.user }, await ar(this.userStorage, this.storageKey + "-user", o)), s.user = (e = o?.user) !== null && e !== void 0 ? e : is();
      } else if (s && !s.user && !s.user) {
        const o = await Ut(this.storage, this.storageKey + "-user");
        o && o?.user ? (s.user = o.user, await Re(this.storage, this.storageKey + "-user"), await ar(this.storage, this.storageKey, s)) : s.user = is();
      }
      if (this._debug(n, "session from storage", s), !this._isValidSession(s)) {
        this._debug(n, "session is not valid"), s !== null && await this._removeSession();
        return;
      }
      const i = ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < ns;
      if (this._debug(n, `session has${i ? "" : " not"} expired with margin of ${ns}s`), i) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o && (console.error(o), ss(o) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(s.access_token);
          !a && o?.user ? (s.user = o.user, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(n, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(n, "error", s), console.error(s);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(e) {
    var r, n;
    if (!e)
      throw new Ce();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Vn();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!i.session)
        throw new Ce();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if (this._debug(s, "error", i), M(i)) {
        const o = { data: null, error: i };
        return ss(i) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(s, "end");
    }
  }
  async _notifyAllSubscribers(e, r, n = !0) {
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: e, session: r });
      const i = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, r);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(o), i.length > 0) {
        for (let a = 0; a < i.length; a += 1)
          console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Re(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, e), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await ar(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const s = Object.assign({}, r);
      delete s.user;
      const i = to(s);
      await ar(this.storage, this.storageKey, i);
    } else {
      const s = to(r);
      await ar(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await Re(this.storage, this.storageKey), await Re(this.storage, this.storageKey + "-code-verifier"), await Re(this.storage, this.storageKey + "-user"), this.userStorage && await Re(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && Ae() && window?.removeEventListener && window.removeEventListener("visibilitychange", e);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), or);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e);
    const r = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
    const r = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, r && clearTimeout(r);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - To give this hint to the application, you should be calling this method when the app is in focus and calling `supabase.auth.stopAutoRefresh()` when it's out of focus.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - When your application goes in the background or out of focus, call this method to stop the proactive refreshing of the session.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (r) => {
              const { data: { session: n } } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((n.expires_at * 1e3 - e) / or);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${or}ms, refresh threshold is ${Ps} ticks`), s <= Ps && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e instanceof Ha)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !Ae() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const r = `#_onVisibilityChanged(${e})`;
    this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, r, n) {
    const s = [`provider=${encodeURIComponent(r)}`];
    if (n?.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await er(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      s.push(a.toString());
    }
    if (n?.queryParams) {
      const i = new URLSearchParams(n.queryParams);
      s.push(i.toString());
    }
    return n?.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${s.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: s, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : await F(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: c } = await F(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return c ? this._returnResult({ data: null, error: c }) : (e.factorType === "totp" && l.type === "totp" && (!((s = l?.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? co(e.webauthn.credential_response) : uo(e.webauthn.credential_response) })
          } : { code: e.code }), { data: a, error: l } = await F(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (M(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = await F(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          if (o.error)
            return o;
          const { data: a } = o;
          if (a.type !== "webauthn")
            return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: ao(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: lo(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (M(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: r, error: n } = await this._challenge({
      factorId: e.factorId
    });
    return n ? this._returnResult({ data: null, error: n }) : await this._verify({
      factorId: e.factorId,
      challengeId: r.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var e;
    const { data: { user: r }, error: n } = await this.getUser();
    if (n)
      return { data: null, error: n };
    const s = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (e = r?.factors) !== null && e !== void 0 ? e : [])
      s.all.push(i), i.status === "verified" && s[i.factor_type].push(i);
    return {
      data: s,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(e) {
    var r, n, s, i;
    if (e)
      try {
        const { payload: f } = pn(e);
        let g = null;
        f.aal && (g = f.aal);
        let v = g;
        const { data: { user: y }, error: b } = await this.getUser(e);
        if (b)
          return this._returnResult({ data: null, error: b });
        ((n = (r = y?.factors) === null || r === void 0 ? void 0 : r.filter((C) => C.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (v = "aal2");
        const S = f.amr || [];
        return { data: { currentLevel: g, nextLevel: v, currentAuthenticationMethods: S }, error: null };
      } catch (f) {
        if (M(f))
          return this._returnResult({ data: null, error: f });
        throw f;
      }
    const { data: { session: o }, error: a } = await this.getSession();
    if (a)
      return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = pn(o.access_token);
    let c = null;
    l.aal && (c = l.aal);
    let u = c;
    ((i = (s = o.user.factors) === null || s === void 0 ? void 0 : s.filter((f) => f.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (u = "aal2");
    const d = l.amr || [];
    return { data: { currentLevel: c, nextLevel: u, currentAuthenticationMethods: d }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: s } = r;
        return s ? this._returnResult({ data: null, error: s }) : n ? await F(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new Ce() });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(e, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: s }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!s)
          return this._returnResult({ data: null, error: new Ce() });
        const o = await F(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: s.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && Ae() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (M(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: s }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!s)
          return this._returnResult({ data: null, error: new Ce() });
        const o = await F(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: s.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && Ae() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (n) {
      if (M(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: n } = e;
        return n ? this._returnResult({ data: null, error: n }) : r ? await F(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (s) => ({ data: s, error: null })
        }) : this._returnResult({ data: null, error: new Ce() });
      });
    } catch (e) {
      if (M(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: s } = r;
        return s ? this._returnResult({ data: null, error: s }) : n ? (await F(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: e.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new Ce() });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(e, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === e);
    if (n)
      return n;
    const s = Date.now();
    if (n = this.jwks.keys.find((a) => a.kid === e), n && this.jwks_cached_at + Dh > s)
      return n;
    const { data: i, error: o } = await F(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = s, n = i.keys.find((a) => a.kid === e), !n) ? null : n;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
   * - The returned claims can be customized per project using the [Custom Access Token Hook](/docs/guides/auth/auth-hooks/custom-access-token-hook).
   *
   * @example Get JWT claims, header and signature
   * ```js
   * const { data, error } = await supabase.auth.getClaims()
   * ```
   *
   * @exampleResponse Get JWT claims, header and signature
   * ```json
   * {
   *   "data": {
   *     "claims": {
   *       "aal": "aal1",
   *       "amr": [{
   *         "method": "email",
   *         "timestamp": 1715766000
   *       }],
   *       "app_metadata": {},
   *       "aud": "authenticated",
   *       "email": "example@email.com",
   *       "exp": 1715769600,
   *       "iat": 1715766000,
   *       "is_anonymous": false,
   *       "iss": "https://project-id.supabase.co/auth/v1",
   *       "phone": "+13334445555",
   *       "role": "authenticated",
   *       "session_id": "11111111-1111-1111-1111-111111111111",
   *       "sub": "11111111-1111-1111-1111-111111111111",
   *       "user_metadata": {}
   *     },
   *     "header": {
   *       "alg": "RS256",
   *       "typ": "JWT",
   *       "kid": "11111111-1111-1111-1111-111111111111"
   *     },
   *     "signature": [/** Uint8Array *\/],
   *   },
   *   "error": null
   * }
   * ```
   */
  async getClaims(e, r = {}) {
    try {
      let n = e;
      if (!n) {
        const { data: f, error: g } = await this.getSession();
        if (g || !f.session)
          return this._returnResult({ data: null, error: g });
        n = f.session.access_token;
      }
      const { header: s, payload: i, signature: o, raw: { header: a, payload: l } } = pn(n);
      r?.allowExpired || id(i.exp);
      const c = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(s.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!c) {
        const { error: f } = await this.getUser(n);
        if (f)
          throw f;
        return {
          data: {
            claims: i,
            header: s,
            signature: o
          },
          error: null
        };
      }
      const u = od(s.alg), h = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, h, o, Vh(`${a}.${l}`)))
        throw new js("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: s,
          signature: o
        },
        error: null
      };
    } catch (n) {
      if (M(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  // --- Passkey Methods ---
  /**
   * Sign in with a passkey. Handles the full WebAuthn ceremony:
   * 1. Fetches authentication challenge from server
   * 2. Prompts user via navigator.credentials.get()
   * 3. Verifies credential with server and creates session
   *
   * Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async signInWithPasskey(e) {
    var r, n, s;
    Ke(this.experimental);
    try {
      if (!$n())
        return this._returnResult({
          data: null,
          error: new Je("Browser does not support WebAuthn", null)
        });
      const { data: i, error: o } = await this._startPasskeyAuthentication({
        options: { captchaToken: (r = e?.options) === null || r === void 0 ? void 0 : r.captchaToken }
      });
      if (o || !i)
        return this._returnResult({ data: null, error: o });
      const a = lo(i.options), l = (s = (n = e?.options) === null || n === void 0 ? void 0 : n.signal) !== null && s !== void 0 ? s : Ls.createNewAbortSignal(), { data: c, error: u } = await Ka({
        publicKey: a,
        signal: l
      });
      if (u || !c)
        return this._returnResult({
          data: null,
          error: u ?? new Je("WebAuthn ceremony failed", null)
        });
      const h = uo(c);
      return this._verifyPasskeyAuthentication({
        challengeId: i.challenge_id,
        credential: h
      });
    } catch (i) {
      if (M(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Register a passkey for the current authenticated user. Handles the full WebAuthn ceremony:
   * 1. Fetches registration challenge from server
   * 2. Prompts user via navigator.credentials.create()
   * 3. Verifies credential with server
   *
   * Requires an active session. Requires `auth.experimental.passkey: true`.
   *
   * @category Auth
   */
  async registerPasskey(e) {
    var r, n;
    Ke(this.experimental);
    try {
      if (!$n())
        return this._returnResult({
          data: null,
          error: new Je("Browser does not support WebAuthn", null)
        });
      const { data: s, error: i } = await this._startPasskeyRegistration();
      if (i || !s)
        return this._returnResult({ data: null, error: i });
      const o = ao(s.options), a = (n = (r = e?.options) === null || r === void 0 ? void 0 : r.signal) !== null && n !== void 0 ? n : Ls.createNewAbortSignal(), { data: l, error: c } = await Wa({
        publicKey: o,
        signal: a
      });
      if (c || !l)
        return this._returnResult({
          data: null,
          error: c ?? new Je("WebAuthn ceremony failed", null)
        });
      const u = co(l);
      return this._verifyPasskeyRegistration({
        challengeId: s.challenge_id,
        credential: u
      });
    } catch (s) {
      if (M(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Start passkey registration for the current authenticated user.
   * Returns WebAuthn credential creation options to pass to navigator.credentials.create().
   */
  async _startPasskeyRegistration() {
    Ke(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: n } = e;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!r)
          return this._returnResult({ data: null, error: new Ce() });
        const { data: s, error: i } = await F(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: r.access_token,
          body: {}
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (M(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Verify passkey registration with the credential response.
   * The credentialResponse should be the serialized output of navigator.credentials.create().
   */
  async _verifyPasskeyRegistration(e) {
    Ke(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: s } = r;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!n)
          return this._returnResult({ data: null, error: new Ce() });
        const { data: i, error: o } = await F(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: n.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        return o ? this._returnResult({ data: null, error: o }) : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Start passkey authentication.
   * Returns WebAuthn credential request options to pass to navigator.credentials.get().
   */
  async _startPasskeyAuthentication(e) {
    var r;
    Ke(this.experimental);
    try {
      const { data: n, error: s } = await F(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: { captcha_token: (r = e?.options) === null || r === void 0 ? void 0 : r.captchaToken }
        }
      });
      return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: n, error: null });
    } catch (n) {
      if (M(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Verify passkey authentication and create a session.
   * The credential should be the serialized output of navigator.credentials.get().
   */
  async _verifyPasskeyAuthentication(e) {
    Ke(this.experimental);
    try {
      const { data: r, error: n } = await F(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: qe
      });
      return n ? this._returnResult({ data: null, error: n }) : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({ data: r, error: null }));
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * List all passkeys for the current user.
   */
  async _listPasskeys() {
    Ke(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: n } = e;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!r)
          return this._returnResult({ data: null, error: new Ce() });
        const { data: s, error: i } = await F(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (o) => ({ data: o, error: null })
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (M(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Update a passkey.
   */
  async _updatePasskey(e) {
    Ke(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: s } = r;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!n)
          return this._returnResult({ data: null, error: new Ce() });
        const { data: i, error: o } = await F(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { friendly_name: e.friendlyName }
        });
        return o ? this._returnResult({ data: null, error: o }) : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Delete a passkey.
   */
  async _deletePasskey(e) {
    Ke(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: s } = r;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!n)
          return this._returnResult({ data: null, error: new Ce() });
        const { error: i } = await F(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: n.access_token,
          noResolveJson: !0
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: null, error: null });
      });
    } catch (r) {
      if (M(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
Yr.nextInstanceID = {};
const xd = Yr, Pd = "2.106.1";
let xr = "";
typeof Deno < "u" ? xr = "deno" : typeof document < "u" ? xr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? xr = "react-native" : xr = "node";
const $d = { "X-Client-Info": `supabase-js-${xr}/${Pd}` }, Id = { headers: $d }, jd = { schema: "public" }, Ld = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Nd = {}, Dd = {
  enabled: !1,
  respectSamplingDecision: !0
};
function Ud(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? i(u.value) : s(u.value).then(a, l);
    }
    c((n = n.apply(t, [])).next());
  });
}
let as = null;
const Md = "@opentelemetry/api";
function Bd() {
  return as === null && (as = import(
    /* webpackIgnore: true */
    /* turbopackIgnore: true */
    /* @vite-ignore */
    Md
  ).catch(() => null)), as;
}
function Hd() {
  return Ud(this, void 0, void 0, function* () {
    try {
      const t = yield Bd();
      if (!t || !t.propagation || !t.context) return null;
      const e = {};
      t.propagation.inject(t.context.active(), e);
      const r = e.traceparent;
      return r ? {
        traceparent: r,
        tracestate: e.tracestate,
        baggage: e.baggage
      } : null;
    } catch {
      return null;
    }
  });
}
function qd(t) {
  if (!t || typeof t != "string") return null;
  const e = t.split("-");
  if (e.length !== 4) return null;
  const [r, n, s, i] = e;
  if (r.length !== 2 || n.length !== 32 || s.length !== 16 || i.length !== 2) return null;
  const o = /^[0-9a-f]+$/i;
  return !o.test(r) || !o.test(n) || !o.test(s) || !o.test(i) || n === "00000000000000000000000000000000" || s === "0000000000000000" ? null : {
    version: r,
    traceId: n,
    parentId: s,
    traceFlags: i,
    isSampled: (parseInt(i, 16) & 1) === 1
  };
}
function Fd(t, e) {
  if (!t || !e || e.length === 0) return !1;
  let r;
  if (t instanceof URL) r = t;
  else try {
    r = new URL(t);
  } catch {
    return !1;
  }
  for (const n of e) try {
    if (typeof n == "string") {
      if (Wd(r.hostname, n)) return !0;
    } else if (n instanceof RegExp) {
      if (n.test(r.hostname)) return !0;
    } else if (typeof n == "function" && n(r))
      return !0;
  } catch {
    continue;
  }
  return !1;
}
function Wd(t, e) {
  if (e === t) return !0;
  if (e.startsWith("*.")) {
    const r = e.slice(2);
    if (t.endsWith(r) && (t === r || t.endsWith("." + r)))
      return !0;
  }
  return !1;
}
function Kd(t) {
  const e = [];
  try {
    const r = new URL(t);
    e.push(r.hostname);
  } catch {
  }
  return e.push("*.supabase.co", "*.supabase.in"), e.push("localhost", "127.0.0.1", "[::1]"), e;
}
function Xr(t) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xr(t);
}
function Vd(t, e) {
  if (Xr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function zd(t) {
  var e = Vd(t, "string");
  return Xr(e) == "symbol" ? e : e + "";
}
function Jd(t, e, r) {
  return (e = zd(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function fo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function we(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fo(Object(r), !0).forEach(function(n) {
      Jd(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
const Gd = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), Yd = () => Headers, Xd = (t, e, r, n, s) => {
  const i = Gd(n), o = Yd(), a = s?.enabled === !0, l = s?.respectSamplingDecision !== !1, c = a ? Kd(e) : null;
  return async (u, h) => {
    var d;
    const f = (d = await r()) !== null && d !== void 0 ? d : t;
    let g = new o(h?.headers);
    if (g.has("apikey") || g.set("apikey", t), g.has("Authorization") || g.set("Authorization", `Bearer ${f}`), c) {
      const v = await Qd(u, c, l);
      v && (v.traceparent && !g.has("traceparent") && g.set("traceparent", v.traceparent), v.tracestate && !g.has("tracestate") && g.set("tracestate", v.tracestate), v.baggage && !g.has("baggage") && g.set("baggage", v.baggage));
    }
    return i(u, we(we({}, h), {}, { headers: g }));
  };
};
async function Qd(t, e, r) {
  if (!Fd(typeof t == "string" || t instanceof URL ? t : t.url, e)) return null;
  const n = await Hd();
  if (!n || !n.traceparent) return null;
  if (r) {
    const s = qd(n.traceparent);
    if (s && !s.isSampled) return null;
  }
  return n;
}
function po(t) {
  return typeof t == "boolean" ? { enabled: t } : t;
}
function Zd(t) {
  return t.endsWith("/") ? t : t + "/";
}
function ef(t, e) {
  var r, n, s, i, o, a;
  const { db: l, auth: c, realtime: u, global: h } = t, { db: d, auth: f, realtime: g, global: v } = e, y = po(t.tracePropagation), b = po(e.tracePropagation), w = {
    db: we(we({}, d), l),
    auth: we(we({}, f), c),
    realtime: we(we({}, g), u),
    storage: {},
    global: we(we(we({}, v), h), {}, { headers: we(we({}, (r = v?.headers) !== null && r !== void 0 ? r : {}), (n = h?.headers) !== null && n !== void 0 ? n : {}) }),
    tracePropagation: {
      enabled: (s = (i = y?.enabled) !== null && i !== void 0 ? i : b?.enabled) !== null && s !== void 0 ? s : !1,
      respectSamplingDecision: (o = (a = y?.respectSamplingDecision) !== null && a !== void 0 ? a : b?.respectSamplingDecision) !== null && o !== void 0 ? o : !0
    },
    accessToken: async () => ""
  };
  return t.accessToken ? w.accessToken = t.accessToken : delete w.accessToken, w;
}
function tf(t) {
  const e = t?.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Zd(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var rf = class extends xd {
  constructor(t) {
    super(t);
  }
}, nf = class {
  /**
  * Create a new client for use in the browser.
  *
  * @category Initializing
  *
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
  * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
  * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
  * @param options.realtime Options passed along to realtime-js constructor.
  * @param options.storage Options passed along to the storage-js constructor.
  * @param options.global.fetch A custom fetch implementation.
  * @param options.global.headers Any additional headers to send with each network request.
  *
  * @example Creating a client
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Create a single supabase client for interacting with your database
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * ```
  *
  * @example With a custom domain
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Use a custom domain as the supabase URL
  * const supabase = createClient('https://my-custom-domain.com', 'your-publishable-key')
  * ```
  *
  * @example With additional parameters
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const options = {
  *   db: {
  *     schema: 'public',
  *   },
  *   auth: {
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: true
  *   },
  *   global: {
  *     headers: { 'x-my-custom-header': 'my-app-name' },
  *   },
  * }
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", options)
  * ```
  *
  * @exampleDescription With custom schemas
  * By default the API server points to the `public` schema. You can enable other database schemas within the Dashboard.
  * Go to [Settings > API > Exposed schemas](/dashboard/project/_/settings/api) and add the schema which you want to expose to the API.
  *
  * Note: each client connection can only access a single schema, so the code above can access the `other_schema` schema but cannot access the `public` schema.
  *
  * @example With custom schemas
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   // Provide a custom schema. Defaults to "public".
  *   db: { schema: 'other_schema' }
  * })
  * ```
  *
  * @exampleDescription Custom fetch implementation
  * `supabase-js` uses the [`cross-fetch`](https://www.npmjs.com/package/cross-fetch) library to make HTTP requests,
  * but an alternative `fetch` implementation can be provided as an option.
  * This is most useful in environments where `cross-fetch` is not compatible (for instance Cloudflare Workers).
  *
  * @example Custom fetch implementation
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   global: { fetch: fetch.bind(globalThis) }
  * })
  * ```
  *
  * @exampleDescription React Native options with AsyncStorage
  * For React Native we recommend using `AsyncStorage` as the storage implementation for Supabase Auth.
  *
  * @example React Native options with AsyncStorage
  * ```js
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from "@react-native-async-storage/async-storage";
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: AsyncStorage,
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @exampleDescription React Native options with Expo SecureStore
  * If you wish to encrypt the user's session information, you can use `aes-js` and store the encryption key in Expo SecureStore.
  * The `aes-js` library, a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode.
  * A new 256-bit encryption key is generated using the `react-native-get-random-values` library.
  * This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.
  *
  * Please make sure that:
  * - You keep the `expo-secure-store`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
  * - Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs.
  *   E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
  * - Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.
  *
  * @example React Native options with Expo SecureStore
  * ```ts
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from '@react-native-async-storage/async-storage';
  * import * as SecureStore from 'expo-secure-store';
  * import * as aesjs from 'aes-js';
  * import 'react-native-get-random-values';
  *
  * // As Expo's SecureStore does not support values larger than 2048
  * // bytes, an AES-256 key is generated and stored in SecureStore, while
  * // it is used to encrypt/decrypt values stored in AsyncStorage.
  * class LargeSecureStore {
  *   private async _encrypt(key: string, value: string) {
  *     const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
  *     const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
  *
  *     await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));
  *
  *     return aesjs.utils.hex.fromBytes(encryptedBytes);
  *   }
  *
  *   private async _decrypt(key: string, value: string) {
  *     const encryptionKeyHex = await SecureStore.getItemAsync(key);
  *     if (!encryptionKeyHex) {
  *       return encryptionKeyHex;
  *     }
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
  *     const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
  *
  *     return aesjs.utils.utf8.fromBytes(decryptedBytes);
  *   }
  *
  *   async getItem(key: string) {
  *     const encrypted = await AsyncStorage.getItem(key);
  *     if (!encrypted) { return encrypted; }
  *
  *     return await this._decrypt(key, encrypted);
  *   }
  *
  *   async removeItem(key: string) {
  *     await AsyncStorage.removeItem(key);
  *     await SecureStore.deleteItemAsync(key);
  *   }
  *
  *   async setItem(key: string, value: string) {
  *     const encrypted = await this._encrypt(key, value);
  *
  *     await AsyncStorage.setItem(key, encrypted);
  *   }
  * }
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: new LargeSecureStore(),
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @example With a database query
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  *
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  */
  constructor(t, e, r) {
    var n, s;
    this.supabaseUrl = t, this.supabaseKey = e;
    const i = tf(t);
    if (!e) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", i), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", i), this.storageUrl = new URL("storage/v1", i), this.functionsUrl = new URL("functions/v1", i);
    const o = `sb-${i.hostname.split(".")[0]}-auth-token`, a = {
      db: jd,
      realtime: Nd,
      auth: we(we({}, Ld), {}, { storageKey: o }),
      global: Id,
      tracePropagation: Dd
    }, l = ef(r ?? {}, a);
    if (this.settings = l, this.storageKey = (n = l.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (s = l.global.headers) !== null && s !== void 0 ? s : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (u, h) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`);
      } });
    else {
      var c;
      this.auth = this._initSupabaseAuthClient((c = l.auth) !== null && c !== void 0 ? c : {}, this.headers, l.global.fetch);
    }
    this.fetch = Xd(e, t, this._getAccessToken.bind(this), l.global.fetch, l.tracePropagation), this.realtime = this._initRealtimeClient(we({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((u) => this.realtime.setAuth(u)).catch((u) => console.warn("Failed to set initial Realtime auth token:", u)), this.rest = new wu(new URL("rest/v1", i).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new $h(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new cu(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    return this.rest.from(t);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(t) {
    return this.rest.schema(t);
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(t, e = {}, r = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(t, e, r);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  * @category Realtime
  */
  channel(t, e = { config: {} }) {
    return this.realtime.channel(t, e);
  }
  /**
  * Returns all Realtime channels.
  *
  * @category Realtime
  *
  * @example Get all channels
  * ```js
  * const channels = supabase.getChannels()
  * ```
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  *
  * @category Realtime
  *
  * @remarks
  * - Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Removes a channel
  * ```js
  * supabase.removeChannel(myChannel)
  * ```
  */
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  *
  * @category Realtime
  *
  * @remarks
  * - Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Remove all channels
  * ```js
  * supabase.removeAllChannels()
  * ```
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var t = this, e, r;
    if (t.accessToken) return await t.accessToken();
    const { data: n } = await t.auth.getSession();
    return (e = (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !== null && e !== void 0 ? e : t.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: e, detectSessionInUrl: r, storage: n, userStorage: s, storageKey: i, flowType: o, lock: a, debug: l, throwOnError: c, experimental: u, lockAcquireTimeout: h, skipAutoInitialize: d }, f, g) {
    const v = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new rf({
      url: this.authUrl.href,
      headers: we(we({}, v), f),
      storageKey: i,
      autoRefreshToken: t,
      persistSession: e,
      detectSessionInUrl: r,
      storage: n,
      userStorage: s,
      flowType: o,
      lock: a,
      debug: l,
      throwOnError: c,
      experimental: u,
      fetch: g,
      lockAcquireTimeout: h,
      skipAutoInitialize: d,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((y) => y.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new th(this.realtimeUrl.href, we(we({}, t), {}, { params: we(we({}, { apikey: this.supabaseKey }), t?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, e) => {
      this._handleTokenChanged(t, "CLIENT", e?.access_token);
    });
  }
  _handleTokenChanged(t, e, r) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : t === "SIGNED_OUT" && (this.realtime.setAuth(), e == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const sf = (t, e, r) => new nf(t, e, r);
function of() {
  if (typeof window < "u") return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const r = e.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
of() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
function af(t, e) {
  return sf(t, e, {
    auth: {
      persistSession: !0,
      autoRefreshToken: !0,
      detectSessionInUrl: !0
    },
    realtime: {
      params: {
        // Reasonable default for a comment widget — clients sending at most
        // one event per few seconds.
        eventsPerSecond: 5
      }
    }
  });
}
function lf(t, e, r) {
  const n = `comment-widget:${e}`, s = t.channel(n).on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "threads",
      filter: `project_id=eq.${e}`
    },
    (i) => {
      const o = i.eventType, a = o === "DELETE" ? i.old : i.new;
      r({ table: "threads", type: o, row: a });
    }
  ).on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      // Comments aren't filtered server-side by project_id because they
      // reference a thread, not a project. The client filters by known
      // thread membership in useThreads.
      table: "comments"
    },
    (i) => {
      const o = i.eventType, a = o === "DELETE" ? i.old : i.new;
      r({ table: "comments", type: o, row: a });
    }
  ).on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "mentionables",
      filter: `project_id=eq.${e}`
    },
    (i) => {
      const o = i.eventType, a = o === "DELETE" ? i.old : i.new;
      r({ table: "mentionables", type: o, row: a });
    }
  ).subscribe((i, o) => {
    (i === "CHANNEL_ERROR" || i === "TIMED_OUT") && console.warn("[comment-widget] realtime channel error:", i, o);
  });
  return {
    unsubscribe() {
      t.removeChannel(s);
    }
  };
}
function ls(t, e) {
  const r = t, n = r?.message ?? (t instanceof Error ? t.message : String(t ?? "")), s = n.toLowerCase();
  return s.includes("rate limit") || r?.status === 429 ? "Too many sign-in requests. Wait a minute and try again." : s.includes("invalid api key") || s.includes("jwt") ? "Invalid Supabase anon key. Double-check the credentials." : s.includes("failed to fetch") || s.includes("networkerror") ? "Couldn't reach Supabase. Check the project URL and your connection." : s.includes("not allowed") ? "This email is not allowed for this Supabase project." : s.includes("expired") || s.includes("invalid") || s.includes("otp") ? "That code is invalid or has expired. Request a new one." : n ? `${e} (${n})` : e;
}
function cf(t) {
  if (!t) return "";
  const e = t.user_metadata?.name;
  if (typeof e == "string" && e.trim()) return e.trim();
  const r = t.email ?? "", n = r.split("@")[0] ?? "";
  return n ? n.charAt(0).toUpperCase() + n.slice(1) : r;
}
const uf = "__cw_dev_bypass_auth";
function hf() {
  try {
    const t = typeof localStorage < "u" ? localStorage.getItem(uf) : null;
    if (!t) return null;
    const e = JSON.parse(t);
    if (typeof e.email != "string" || !e.email.includes("@")) return null;
    const r = typeof e.name == "string" && e.name.trim() ? e.name.trim() : e.email.split("@")[0];
    return console.warn("[comment-widget] dev auth bypass active for", e.email, "— remove __cw_dev_bypass_auth before deploying."), { email: e.email, name: r };
  } catch {
    return null;
  }
}
function df(t) {
  const e = /* @__PURE__ */ Y(null), r = /* @__PURE__ */ Y(null), n = /* @__PURE__ */ Y(!1), s = hf(), i = oe(() => {
    if (s) return { name: s.name, email: s.email };
    const d = r.value;
    return !d || !d.email ? null : { name: cf(d), email: d.email };
  }), o = oe(() => s ? !0 : !!r.value);
  let a = null;
  s && (n.value = !0), t.auth.getSession().then(({ data: d }) => {
    e.value = d.session ?? null, r.value = d.session?.user ?? null, n.value = !0;
  });
  const { data: l } = t.auth.onAuthStateChange((d, f) => {
    e.value = f ?? null, r.value = f?.user ?? null, n.value || (n.value = !0);
  });
  a = l;
  async function c(d, f) {
    const g = d.trim();
    if (!g) throw new Error("Email is required.");
    const v = f?.trim();
    try {
      const { error: y } = await t.auth.signInWithOtp({
        email: g,
        options: {
          data: v ? { name: v } : void 0
        }
      });
      if (y) throw y;
    } catch (y) {
      throw new Error(ls(y, "Couldn't send the sign-in code."));
    }
  }
  async function u(d, f) {
    const g = d.trim(), v = f.trim();
    if (!g) throw new Error("Email is required.");
    if (!v) throw new Error("Enter the six-digit code from the email.");
    try {
      const { error: y } = await t.auth.verifyOtp({
        email: g,
        token: v,
        type: "email"
      });
      if (y) throw y;
    } catch (y) {
      throw new Error(ls(y, "Couldn't verify the sign-in code."));
    }
  }
  async function h() {
    try {
      const { error: d } = await t.auth.signOut();
      if (d) throw d;
    } catch (d) {
      throw new Error(ls(d, "Couldn't sign out."));
    }
  }
  return br(() => {
    a?.subscription.unsubscribe(), a = null;
  }), {
    session: e,
    user: r,
    identity: i,
    signedIn: o,
    ready: n,
    requestEmailCode: c,
    verifyEmailCode: u,
    signOut: h
  };
}
function ff() {
  const t = new URL(window.location.href);
  return t.hash = "", t.toString();
}
class Vt extends Error {
  constructor(r, n) {
    super(r);
    xe(this, "hint");
    this.name = "WidgetError", this.hint = r, n !== void 0 && (this.cause = n);
  }
}
function Mt(t, e) {
  const r = t, n = r?.message ?? (t instanceof Error ? t.message : String(t ?? "")), s = n.toLowerCase();
  let i = e;
  return s.includes("row-level security") || s.includes("rls") ? i = "You need to be signed in to do that. Sign in and try again." : s.includes("invalid api key") || s.includes("jwt") || r?.status === 401 ? i = "Invalid Supabase anon key. Double-check the credentials." : s.includes("failed to fetch") || s.includes("networkerror") ? i = "Couldn't reach Supabase. Check the project URL and your connection." : s.includes("not found") || r?.status === 404 ? i = "Supabase URL or table not found. Check the project URL and that the schema was run." : n && (i = `${e} (${n})`), new Vt(i, t);
}
function pf(t, e) {
  const r = ff(), n = /* @__PURE__ */ ys([]), s = /* @__PURE__ */ ys({}), i = /* @__PURE__ */ Y(!0), o = /* @__PURE__ */ Y(null);
  let a = null;
  const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  async function u() {
    var E;
    i.value = !0, o.value = null;
    try {
      const { data: T, error: k } = await t.from("threads").select("*").eq("project_id", e).eq("page_url", r).order("created_at", { ascending: !0 });
      if (k) throw k;
      const D = T ?? [];
      if (n.value = D, D.length === 0)
        s.value = {};
      else {
        const K = D.map((Z) => Z.id), { data: se, error: re } = await t.from("comments").select("*").in("thread_id", K).order("created_at", { ascending: !0 });
        if (re) throw re;
        const Q = {};
        for (const Z of K) Q[Z] = [];
        for (const Z of se ?? [])
          (Q[E = Z.thread_id] ?? (Q[E] = [])).push(Z);
        s.value = Q;
      }
    } catch (T) {
      const k = Mt(T, "Could not load comments.");
      o.value = k.hint, console.error("[comment-widget] failed to load threads:", T);
    } finally {
      i.value = !1;
    }
  }
  function h() {
    a = lf(t, e, (E) => {
      E.table === "threads" ? d(E.type, E.row) : E.table === "comments" && f(E.type, E.row);
    });
  }
  function d(E, T) {
    if (!(E !== "DELETE" && T.page_url !== r)) {
      if (E === "INSERT") {
        if (l.has(T.id)) {
          l.delete(T.id);
          return;
        }
        if (n.value.some((k) => k.id === T.id)) return;
        n.value = [...n.value, T], s.value = {
          ...s.value,
          [T.id]: s.value[T.id] ?? []
        };
      } else if (E === "UPDATE")
        n.value = n.value.map((k) => k.id === T.id ? T : k);
      else if (E === "DELETE") {
        n.value = n.value.filter((D) => D.id !== T.id);
        const k = { ...s.value };
        delete k[T.id], s.value = k;
      }
    }
  }
  function f(E, T) {
    if (E === "INSERT") {
      if (c.has(T.id)) {
        c.delete(T.id);
        return;
      }
      if (!n.value.some((D) => D.id === T.thread_id)) return;
      const k = s.value[T.thread_id] ?? [];
      if (k.some((D) => D.id === T.id)) return;
      s.value = {
        ...s.value,
        [T.thread_id]: [...k, T].sort(
          (D, K) => D.created_at < K.created_at ? -1 : 1
        )
      };
    } else if (E === "DELETE") {
      const k = s.value[T.thread_id];
      if (!k) return;
      s.value = {
        ...s.value,
        [T.thread_id]: k.filter((D) => D.id !== T.id)
      };
    }
  }
  async function g(E, T) {
    if (T.length === 0) return;
    const k = T.map((K) => ({
      comment_id: E,
      mentioned_email: K.email,
      mentioned_name: K.name
    })), { error: D } = await t.from("comment_mentions").insert(k);
    D && console.warn("[comment-widget] failed to persist mentions:", D);
  }
  async function v(E, T, k, D = []) {
    const { data: K, error: se } = await t.from("threads").insert({
      project_id: e,
      page_url: r,
      selector_path: E.selector,
      anchor_x_pct: E.x_pct,
      anchor_y_pct: E.y_pct,
      status: "open",
      created_by_name: k.name,
      created_by_email: k.email
    }).select().single();
    if (se || !K)
      throw console.error("[comment-widget] failed to create thread:", se), Mt(se, "Could not save comment.");
    const re = K;
    l.add(re.id), n.value = [...n.value, re], s.value = { ...s.value, [re.id]: [] };
    try {
      await y(re.id, T, k, D);
    } catch (Q) {
      throw Q;
    }
    return re;
  }
  async function y(E, T, k, D = []) {
    const { data: K, error: se } = await t.from("comments").insert({
      thread_id: E,
      body: T,
      author_name: k.name,
      author_email: k.email
    }).select().single();
    if (se || !K)
      throw console.error("[comment-widget] failed to insert comment:", se), Mt(se, "Could not post reply.");
    const re = K;
    c.add(re.id);
    const Q = s.value[E] ?? [];
    return s.value = {
      ...s.value,
      [E]: [...Q, re]
    }, await g(re.id, D), re;
  }
  async function b(E, T) {
    const k = n.value.find((re) => re.id === E);
    k && k.status !== T && (n.value = n.value.map((re) => re.id === E ? { ...re, status: T } : re));
    const { data: D, error: K } = await t.from("threads").update({ status: T }).eq("id", E).select().single();
    if (K || !D)
      throw k && (n.value = n.value.map((re) => re.id === E ? k : re)), console.error("[comment-widget] failed to update thread status:", K), Mt(K, "Could not change status.");
    const se = D;
    return n.value = n.value.map((re) => re.id === E ? se : re), se;
  }
  async function w(E, T) {
    const k = n.value.find((Q) => Q.id === E);
    if (!k) throw new Vt("Pin no longer exists.");
    const D = {
      ...k,
      selector_path: T.selector,
      anchor_x_pct: T.x_pct,
      anchor_y_pct: T.y_pct
    };
    n.value = n.value.map((Q) => Q.id === E ? D : Q);
    const { data: K, error: se } = await t.from("threads").update({
      selector_path: T.selector,
      anchor_x_pct: T.x_pct,
      anchor_y_pct: T.y_pct
    }).eq("id", E).select().single();
    if (se || !K)
      throw n.value = n.value.map((Q) => Q.id === E ? k : Q), console.error("[comment-widget] failed to update thread anchor:", se), Mt(se, "Could not move the pin.");
    const re = K;
    return n.value = n.value.map((Q) => Q.id === E ? re : Q), re;
  }
  async function S(E, T) {
    const k = s.value[E];
    if (!k) throw new Vt("Comment no longer exists.");
    if (!k.find((se) => se.id === T)) throw new Vt("Comment no longer exists.");
    s.value = {
      ...s.value,
      [E]: k.filter((se) => se.id !== T)
    };
    const { error: K } = await t.from("comments").delete().eq("id", T);
    if (K)
      throw s.value = {
        ...s.value,
        [E]: k
      }, console.error("[comment-widget] failed to delete comment:", K), Mt(K, "Could not delete reply.");
  }
  async function C(E) {
    const T = n.value, k = s.value[E];
    n.value = T.filter((se) => se.id !== E);
    const D = { ...s.value };
    delete D[E], s.value = D;
    const { error: K } = await t.from("threads").delete().eq("id", E);
    if (K)
      throw n.value = T, k && (s.value = { ...s.value, [E]: k }), console.error("[comment-widget] failed to delete thread:", K), Mt(K, "Could not delete thread.");
  }
  const H = oe(
    () => n.value.filter((E) => E.status === "open").length
  ), j = oe(() => n.value.length);
  return br(() => {
    a?.unsubscribe(), a = null;
  }), {
    pageUrl: r,
    threads: n,
    commentsByThread: s,
    loading: i,
    loadError: o,
    openThreadCount: H,
    totalThreadCount: j,
    load: u,
    startRealtime: h,
    createThread: v,
    replyToThread: y,
    updateThreadStatus: b,
    updateThreadAnchor: w,
    deleteComment: S,
    deleteThread: C
  };
}
function gf(t) {
  if (!t) return { message: "", code: "" };
  if (t instanceof Error) return { message: t.message, code: "" };
  if (typeof t == "string") return { message: t, code: "" };
  if (typeof t == "object") {
    const e = t, r = [];
    typeof e.message == "string" && e.message && r.push(e.message), typeof e.details == "string" && e.details && r.push(e.details), typeof e.hint == "string" && e.hint && r.push(e.hint);
    const n = typeof e.code == "string" ? e.code : "";
    return { message: r.join(" — ") || JSON.stringify(e), code: n };
  }
  return { message: String(t), code: "" };
}
function cs(t, e) {
  const { message: r, code: n } = gf(t), s = r.toLowerCase();
  let i = e;
  return n === "42P01" || s.includes("does not exist") ? i = "Tables missing. Re-run supabase/schema.sql to add the v0.2 tables." : n === "42501" || s.includes("permission denied") ? i = "Permission denied. Re-run supabase/schema.sql so the v0.2 policies are in place." : s.includes("row-level security") || s.includes("rls") ? i = "You need to be signed in to manage the team." : n === "23505" || s.includes("duplicate key") || s.includes("unique constraint") ? i = "That email is already on the team." : s.includes("failed to fetch") || s.includes("networkerror") ? i = "Couldn't reach Supabase. Check your connection." : r && (i = `${e} (${r})`), new Vt(i, t);
}
function mf(t) {
  const e = /* @__PURE__ */ ys([]), r = /* @__PURE__ */ Y(!1), n = /* @__PURE__ */ Y(null);
  let s = null;
  async function i() {
    if (!t.signedIn.value) {
      e.value = [], r.value = !1;
      return;
    }
    n.value = null;
    try {
      const { data: g, error: v } = await t.client.from("mentionables").select("*").eq("project_id", t.projectId).order("name", { ascending: !0 });
      if (v) throw v;
      e.value = g ?? [], r.value = !0;
    } catch (g) {
      const v = cs(g, "Could not load team list.");
      n.value = v.hint, console.error("[comment-widget] failed to load mentionables:", g);
    }
  }
  function o(g) {
    const v = g.eventType, y = v === "DELETE" ? g.old : g.new;
    if (y)
      if (v === "INSERT") {
        if (e.value.some((b) => b.id === y.id)) return;
        e.value = [...e.value, y].sort((b, w) => b.name.localeCompare(w.name));
      } else v === "UPDATE" ? e.value = e.value.map((b) => b.id === y.id ? y : b) : v === "DELETE" && (e.value = e.value.filter((b) => b.id !== y.id));
  }
  function a() {
    s || (s = t.client.channel(`comment-widget:${t.projectId}:mentionables`).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "mentionables",
        filter: `project_id=eq.${t.projectId}`
      },
      o
    ).subscribe((g, v) => {
      (g === "CHANNEL_ERROR" || g === "TIMED_OUT") && console.warn("[comment-widget] mentionables realtime error:", g, v);
    }));
  }
  function l() {
    s && (t.client.removeChannel(s), s = null);
  }
  const c = kt(
    () => t.signedIn.value,
    (g) => {
      g ? (i(), a()) : (e.value = [], r.value = !1, l());
    },
    { immediate: !0 }
  ), u = oe(() => {
    const g = /* @__PURE__ */ new Map(), v = (t.currentEmail.value ?? "").toLowerCase();
    for (const y of t.threads.value) {
      if (!y.created_by_email) continue;
      const b = y.created_by_email.toLowerCase();
      b !== v && (g.has(b) || g.set(b, { email: y.created_by_email, name: y.created_by_name, source: "author" }));
    }
    for (const y of Object.values(t.commentsByThread.value))
      for (const b of y) {
        if (!b.author_email) continue;
        const w = b.author_email.toLowerCase();
        w !== v && (g.has(w) || g.set(w, { email: b.author_email, name: b.author_name, source: "author" }));
      }
    return Array.from(g.values());
  }), h = oe(() => {
    const g = /* @__PURE__ */ new Map();
    for (const v of u.value) g.set(v.email.toLowerCase(), v);
    for (const v of e.value) {
      const y = v.email.toLowerCase(), b = (t.currentEmail.value ?? "").toLowerCase();
      y !== b && g.set(y, { email: v.email, name: v.name, source: "team" });
    }
    return Array.from(g.values()).sort((v, y) => v.name.localeCompare(y.name));
  });
  async function d(g, v) {
    const y = g.trim(), b = (v ?? "").trim() || y.split("@")[0];
    if (!y) throw new Vt("Email is required.");
    try {
      const { data: w, error: S } = await t.client.from("mentionables").insert({
        project_id: t.projectId,
        email: y,
        name: b,
        added_by_email: t.currentEmail.value
      }).select().single();
      if (S || !w) throw S ?? new Error("No row returned.");
      const C = w;
      return e.value.some((H) => H.id === C.id) || (e.value = [...e.value, C].sort((H, j) => H.name.localeCompare(j.name))), C;
    } catch (w) {
      throw cs(w, "Could not add team member.");
    }
  }
  async function f(g) {
    const v = e.value;
    e.value = e.value.filter((y) => y.id !== g);
    try {
      const { error: y } = await t.client.from("mentionables").delete().eq("id", g);
      if (y) throw y;
    } catch (y) {
      throw e.value = v, cs(y, "Could not remove team member.");
    }
  }
  return br(() => {
    c(), l();
  }), { list: e, pool: h, loaded: r, loadError: n, load: i, add: d, remove: f };
}
const vf = /^(.*\/rounds\/)(r\d+)\/(.*)$/;
function yf() {
  if (typeof window > "u") return null;
  const { origin: t, pathname: e } = window.location, r = e.match(vf);
  return r ? { baseUrl: t + r[1], roundId: r[2], subPath: r[3] } : null;
}
function wf() {
  const t = yf(), e = /* @__PURE__ */ Y([]), r = /* @__PURE__ */ Y(null), n = /* @__PURE__ */ Y(!1), s = t?.roundId ?? null, i = oe(
    () => t !== null && n.value && e.value.length > 0
  ), o = oe(
    () => e.value.find((h) => h.id === s) ?? null
  ), a = oe(
    () => e.value.findIndex((h) => h.id === s)
  ), l = oe(
    () => r.value !== null && s === r.value
  );
  async function c() {
    if (t)
      try {
        const h = await fetch(`${t.baseUrl}index.json`, { cache: "no-store" });
        if (!h.ok) return;
        const d = await h.json();
        if (!Array.isArray(d.rounds) || d.rounds.length === 0) return;
        e.value = d.rounds, r.value = d.latest ?? d.rounds[d.rounds.length - 1]?.id ?? null, n.value = !0;
      } catch (h) {
        console.warn(
          "[comment-widget] rounds manifest unavailable; round switcher disabled.",
          h
        );
      }
  }
  function u(h) {
    if (!t || h.id === s) return;
    const d = `${t.baseUrl}${h.id}/${t.subPath}${window.location.search}${window.location.hash}`;
    window.location.assign(d);
  }
  return {
    enabled: i,
    rounds: e,
    currentRoundId: s,
    currentRound: o,
    currentIndex: a,
    isLatest: l,
    load: c,
    switchTo: u
  };
}
const ni = "__comment-widget-root";
function bf(t) {
  const e = [];
  let r = t;
  for (; r && r !== document.body && r !== document.documentElement; ) {
    if (r.id && r.id !== ni)
      return e.unshift(`#${CSS.escape(r.id)}`), e.join(" > ");
    const n = r.getAttribute("data-comment-anchor");
    if (n)
      return e.unshift(`[data-comment-anchor="${CSS.escape(n)}"]`), e.join(" > ");
    let s = r.tagName.toLowerCase();
    const i = r.parentElement;
    if (i) {
      const o = Array.from(i.children).filter(
        (a) => a.tagName === r.tagName
      );
      o.length > 1 && (s += `:nth-of-type(${o.indexOf(r) + 1})`);
    }
    e.unshift(s), r = i;
  }
  return e.join(" > ");
}
function go(t) {
  const e = mo(t);
  if (e)
    return { element: e, approximate: !1 };
  const r = t.split(" > ");
  for (let n = r.length - 1; n > 0; n--) {
    const s = r.slice(0, n).join(" > "), i = mo(s);
    if (i)
      return { element: i, approximate: !0 };
  }
  return null;
}
function mo(t) {
  try {
    return document.querySelector(t);
  } catch {
    return null;
  }
}
function vo(t) {
  if (!(t instanceof Element)) return null;
  let e = t;
  for (; e; )
    return e.closest(`#${ni}`) ? null : e;
  return null;
}
const _f = `#${ni}`;
function Sf(t, e) {
  const r = t.getBoundingClientRect();
  return {
    x: r.left + r.width * e.anchor_x_pct,
    y: r.top + r.height * e.anchor_y_pct
  };
}
class kf {
  constructor(e) {
    xe(this, "listeners", /* @__PURE__ */ new Set());
    xe(this, "element", null);
    xe(this, "approximate", !1);
    xe(this, "resizeObserver", null);
    xe(this, "current", null);
    xe(this, "disposed", !1);
    // Stored as a mutable field (not readonly) so updateAnchor() can swap it
    // when a pin is repositioned via drag.
    xe(this, "thread");
    this.thread = e, this.resolve();
  }
  subscribe(e) {
    return this.listeners.add(e), e(this.current), () => {
      this.listeners.delete(e);
    };
  }
  // Replace the watched thread's anchor data and re-resolve. Called when the
  // user drags a pin onto a new element; the existing ResizeObserver on the
  // old element is torn down and a fresh one attaches to the new target.
  updateAnchor(e) {
    this.disposed || (this.thread = e, this.teardownElement(), this.resolve());
  }
  // Called by the central scheduler on scroll / resize / RAF.
  recompute() {
    if (!this.disposed) {
      if (!this.element) {
        this.resolve();
        return;
      }
      if (!this.element.isConnected) {
        this.teardownElement(), this.resolve();
        return;
      }
      this.publishFromElement();
    }
  }
  // Called by the central scheduler when MutationObserver fires.
  onDomMutated() {
    if (!this.disposed) {
      if (!this.element) {
        this.resolve();
        return;
      }
      if (this.approximate) {
        const e = go(this.thread.selector_path);
        e && !e.approximate && e.element !== this.element && (this.teardownElement(), this.attachElement(e.element, !1));
      } else this.element.isConnected || (this.teardownElement(), this.resolve());
    }
  }
  dispose() {
    this.disposed = !0, this.listeners.clear(), this.teardownElement();
  }
  resolve() {
    const e = go(this.thread.selector_path);
    if (!e) {
      this.current = null, this.publish();
      return;
    }
    this.attachElement(e.element, e.approximate);
  }
  attachElement(e, r) {
    this.element = e, this.approximate = r, typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(() => this.publishFromElement()), this.resizeObserver.observe(e)), this.publishFromElement();
  }
  teardownElement() {
    this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), this.element = null, this.approximate = !1;
  }
  publishFromElement() {
    if (!this.element)
      this.current = null;
    else {
      const { x: e, y: r } = Sf(this.element, this.thread);
      this.current = { x: e, y: r, approximate: this.approximate, element: this.element };
    }
    this.publish();
  }
  publish() {
    for (const e of this.listeners)
      e(this.current);
  }
}
class Ef {
  constructor() {
    xe(this, "watchers", /* @__PURE__ */ new Set());
    xe(this, "mutationObserver", null);
    xe(this, "rafPending", !1);
    xe(this, "resizeDebounceTimer", null);
    xe(this, "mutationDebounceTimer", null);
    // Bound handlers, kept as instance fields so add/removeEventListener match.
    xe(this, "onScroll", () => this.scheduleRecompute());
    xe(this, "onResize", () => {
      this.resizeDebounceTimer !== null && window.clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.resizeDebounceTimer = null, this.recomputeAll();
      }, 120);
    });
  }
  start() {
    window.addEventListener("scroll", this.onScroll, { passive: !0, capture: !0 }), window.addEventListener("resize", this.onResize), this.mutationObserver = new MutationObserver(() => {
      this.mutationDebounceTimer !== null && window.clearTimeout(this.mutationDebounceTimer), this.mutationDebounceTimer = window.setTimeout(() => {
        this.mutationDebounceTimer = null;
        for (const e of this.watchers) e.onDomMutated();
      }, 50);
    }), this.mutationObserver.observe(document.body, {
      subtree: !0,
      childList: !0
      // Intentionally not watching attributes / characterData — too noisy and
      // the ResizeObserver per element catches the layout consequences anyway.
    });
  }
  stop() {
    window.removeEventListener("scroll", this.onScroll, { capture: !0 }), window.removeEventListener("resize", this.onResize), this.mutationObserver?.disconnect(), this.mutationObserver = null, this.resizeDebounceTimer !== null && window.clearTimeout(this.resizeDebounceTimer), this.mutationDebounceTimer !== null && window.clearTimeout(this.mutationDebounceTimer);
  }
  register(e) {
    this.watchers.add(e);
  }
  unregister(e) {
    this.watchers.delete(e), e.dispose();
  }
  scheduleRecompute() {
    this.rafPending || (this.rafPending = !0, requestAnimationFrame(() => {
      this.rafPending = !1, this.recomputeAll();
    }));
  }
  recomputeAll() {
    for (const e of this.watchers) e.recompute();
  }
}
function yo(t) {
  return `${t.selector_path}|${t.anchor_x_pct}|${t.anchor_y_pct}`;
}
function Tf(t) {
  const e = /* @__PURE__ */ hr(/* @__PURE__ */ new Map()), r = new Ef(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ Y(!1);
  function i(a) {
    const l = n.get(a.id);
    if (l) {
      const h = yo(a);
      l.anchorKey !== h && (l.watcher.updateAnchor({
        selector_path: a.selector_path,
        anchor_x_pct: a.anchor_x_pct,
        anchor_y_pct: a.anchor_y_pct
      }), l.anchorKey = h);
      return;
    }
    const c = new kf({
      selector_path: a.selector_path,
      anchor_x_pct: a.anchor_x_pct,
      anchor_y_pct: a.anchor_y_pct
    }), u = c.subscribe((h) => {
      e.set(a.id, h);
    });
    r.register(c), n.set(a.id, { watcher: c, off: u, anchorKey: yo(a) });
  }
  function o(a) {
    const l = n.get(a);
    l && (l.off(), r.unregister(l.watcher), n.delete(a), e.delete(a));
  }
  return Ys(() => {
    r.start(), s.value = !0;
    for (const a of t.value) i(a);
  }), br(() => {
    r.stop();
    for (const a of Array.from(n.keys())) o(a);
  }), kt(
    () => t.value,
    (a) => {
      const l = new Set(a.map((c) => c.id));
      for (const c of Array.from(n.keys()))
        l.has(c) || o(c);
      for (const c of a) i(c);
    },
    { deep: !0 }
  ), { positions: e };
}
function Va(t, e) {
  const r = bf(t), n = t.getBoundingClientRect(), s = n.width || 1, i = n.height || 1;
  return {
    selector: r,
    x_pct: wo((e.clientX - n.left) / s),
    y_pct: wo((e.clientY - n.top) / i)
  };
}
function wo(t) {
  return Number.isNaN(t) ? 0.5 : t < 0 ? 0 : t > 1 ? 1 : t;
}
const Cf = {
  class: "cw-toolbar",
  role: "toolbar",
  "aria-label": "Comment widget"
}, Rf = { class: "cw-toolbar-label" }, Af = {
  key: 0,
  class: "cw-round-switcher"
}, Of = ["aria-expanded", "title"], xf = {
  key: 0,
  class: "cw-round-dot",
  "aria-hidden": "true"
}, Pf = {
  key: 1,
  class: "cw-round-menu",
  role: "listbox"
}, $f = ["aria-selected", "onClick"], If = {
  key: 0,
  class: "cw-round-check",
  "aria-hidden": "true"
}, jf = ["title", "aria-pressed"], Lf = ["fill"], Nf = ["title"], Df = { "aria-hidden": "true" }, Uf = ["aria-pressed", "title"], Mf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hf = /* @__PURE__ */ Jt({
  __name: "Toolbar",
  props: {
    active: { type: Boolean },
    openCount: {},
    totalCount: {},
    showOpenOnly: { type: Boolean },
    signedIn: { type: Boolean },
    userName: {},
    roundsEnabled: { type: Boolean },
    rounds: {},
    currentRoundId: {},
    isLatestRound: { type: Boolean }
  },
  emits: ["toggle", "toggle-filter", "open-team", "sign-in", "sign-out", "select-round"],
  setup(t, { emit: e }) {
    const r = t, n = e, s = oe(() => r.totalCount === 0 ? "No comments" : r.showOpenOnly ? r.openCount === 1 ? "1 open" : `${r.openCount} open` : `${r.openCount} of ${r.totalCount}`), i = oe(
      () => r.showOpenOnly ? "Showing open · click to show all" : "Showing all · click to show open only"
    ), o = oe(() => r.userName && r.userName.trim().charAt(0).toUpperCase() || "?"), a = /* @__PURE__ */ Y(!1);
    kt(() => r.signedIn, () => {
      a.value = !1;
    });
    const l = /* @__PURE__ */ Y(!1), c = oe(
      () => r.rounds.findIndex((d) => d.id === r.currentRoundId)
    ), u = oe(() => {
      const d = c.value;
      return d < 0 ? "Rounds" : `Round ${d + 1} of ${r.rounds.length}`;
    });
    function h(d) {
      l.value = !1, d.id !== r.currentRoundId && n("select-round", d);
    }
    return (d, f) => (q(), W("div", Cf, [
      P("span", Rf, te(s.value), 1),
      t.roundsEnabled ? (q(), W("div", Af, [
        l.value ? (q(), W("div", {
          key: 0,
          class: "cw-round-backdrop",
          onClick: f[0] || (f[0] = (g) => l.value = !1)
        })) : ae("", !0),
        P("button", {
          type: "button",
          class: Ge(["cw-btn cw-btn--ghost cw-btn--small cw-round-trigger", { "cw-round-trigger--archived": !t.isLatestRound }]),
          "aria-expanded": l.value,
          "aria-haspopup": "listbox",
          title: t.isLatestRound ? "Switch review round" : "Viewing an archived round",
          onClick: f[1] || (f[1] = (g) => l.value = !l.value)
        }, [
          t.isLatestRound ? ae("", !0) : (q(), W("span", xf)),
          P("span", null, te(u.value), 1),
          f[9] || (f[9] = P("svg", {
            class: "cw-round-chevron",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            P("polyline", { points: "6 9 12 15 18 9" })
          ], -1))
        ], 10, Of),
        l.value ? (q(), W("ul", Pf, [
          (q(!0), W(_e, null, mr(t.rounds, (g, v) => (q(), W("li", {
            key: g.id
          }, [
            P("button", {
              type: "button",
              class: Ge(["cw-round-option", { "cw-round-option--current": g.id === t.currentRoundId }]),
              role: "option",
              "aria-selected": g.id === t.currentRoundId,
              onClick: (y) => h(g)
            }, [
              P("span", null, te(g.label || `Round ${v + 1}`), 1),
              g.id === t.currentRoundId ? (q(), W("span", If, "✓")) : ae("", !0)
            ], 10, $f)
          ]))), 128))
        ])) : ae("", !0)
      ])) : ae("", !0),
      t.totalCount > 0 ? (q(), W("button", {
        key: 1,
        type: "button",
        class: Ge(["cw-btn cw-btn--ghost cw-btn--icon", { "cw-filter-active": t.showOpenOnly }]),
        title: i.value,
        "aria-pressed": t.showOpenOnly,
        onClick: f[2] || (f[2] = (g) => d.$emit("toggle-filter"))
      }, [
        (q(), W("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          fill: t.showOpenOnly ? "currentColor" : "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [...f[10] || (f[10] = [
          P("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }, null, -1)
        ])], 8, Lf))
      ], 10, jf)) : ae("", !0),
      t.signedIn ? (q(), W("button", {
        key: 2,
        type: "button",
        class: "cw-btn cw-btn--ghost cw-btn--icon",
        title: "Manage team",
        "aria-label": "Manage team",
        onClick: f[3] || (f[3] = (g) => d.$emit("open-team"))
      }, [...f[11] || (f[11] = [
        ba('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', 1)
      ])])) : ae("", !0),
      t.signedIn ? (q(), W(_e, { key: 4 }, [
        a.value ? (q(), W(_e, { key: 1 }, [
          f[12] || (f[12] = P("span", { class: "cw-toolbar-label" }, "Sign out?", -1)),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            onClick: f[6] || (f[6] = (g) => {
              d.$emit("sign-out"), a.value = !1;
            })
          }, " Sign out "),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            onClick: f[7] || (f[7] = (g) => a.value = !1)
          }, " Cancel ")
        ], 64)) : (q(), W("button", {
          key: 0,
          type: "button",
          class: "cw-btn cw-btn--ghost cw-btn--icon cw-toolbar-avatar",
          title: `Signed in as ${t.userName ?? ""}`,
          onClick: f[5] || (f[5] = (g) => a.value = !0)
        }, [
          P("span", Df, te(o.value), 1)
        ], 8, Nf))
      ], 64)) : (q(), W("button", {
        key: 3,
        type: "button",
        class: "cw-btn cw-btn--ghost cw-btn--small",
        title: "Sign in to comment",
        onClick: f[4] || (f[4] = (g) => d.$emit("sign-in"))
      }, " Sign in ")),
      P("button", {
        type: "button",
        class: Ge(["cw-btn cw-toolbar-toggle", { "cw-toolbar-toggle--on": t.active }]),
        "aria-pressed": t.active,
        title: t.active ? "Exit comment mode (C)" : "Enter comment mode (C)",
        onClick: f[8] || (f[8] = (g) => d.$emit("toggle"))
      }, [
        t.active ? (q(), W("svg", Bf, [...f[14] || (f[14] = [
          P("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }, null, -1),
          P("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          }, null, -1)
        ])])) : (q(), W("svg", Mf, [...f[13] || (f[13] = [
          P("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, null, -1)
        ])])),
        P("span", null, te(t.active ? "Cancel" : "Comment"), 1)
      ], 10, Uf)
    ]));
  }
}), qf = ["title"], Ff = { class: "cw-pin-label" }, Wf = 180, Kf = 4, Vf = /* @__PURE__ */ Jt({
  __name: "CommentPin",
  props: {
    anchor: {},
    thread: {},
    active: { type: Boolean },
    index: {},
    draggable: { type: Boolean }
  },
  emits: ["click", "reposition"],
  setup(t, { emit: e }) {
    const r = t, n = e, s = /* @__PURE__ */ Y(!1), i = /* @__PURE__ */ Y({ dx: 0, dy: 0 }), o = /* @__PURE__ */ Y({ x: 0, y: 0 }), a = /* @__PURE__ */ Y(!1);
    let l = null, c = null;
    const u = oe(() => {
      const y = [];
      return r.thread.status === "resolved" && y.push("Resolved"), r.anchor.approximate && y.push("Approximate anchor"), r.draggable && y.push("Hold and drag to reposition"), y.join(" · ");
    }), h = oe(() => s.value ? {
      left: `${i.value.dx + o.value.x}px`,
      top: `${i.value.dy + o.value.y}px`
    } : {
      left: `${r.anchor.x}px`,
      top: `${r.anchor.y}px`
    });
    function d() {
      l !== null && (window.clearTimeout(l), l = null);
    }
    function f(y) {
      if (y.button !== 0 || !r.draggable) return;
      const b = y.currentTarget;
      c = y.pointerId, o.value = { x: r.anchor.x, y: r.anchor.y }, i.value = { dx: 0, dy: 0 }, a.value = !1;
      const w = y.clientX, S = y.clientY;
      l = window.setTimeout(() => {
        l = null, T(b);
      }, Wf);
      function C(k) {
        if (k.pointerId !== c) return;
        const D = k.clientX - w, K = k.clientY - S;
        if (!s.value)
          if (Math.hypot(D, K) >= Kf)
            d(), T(b);
          else
            return;
        i.value = { dx: D, dy: K };
      }
      function H(k) {
        k.pointerId === c && (E(), s.value && g(k));
      }
      function j(k) {
        k.pointerId === c && (E(), s.value && (i.value = { dx: 0, dy: 0 }, s.value = !1, a.value = !0));
      }
      function E() {
        d(), window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", j);
        try {
          b.releasePointerCapture(y.pointerId);
        } catch {
        }
        c = null;
      }
      function T(k) {
        if (!s.value) {
          s.value = !0, a.value = !0;
          try {
            k.setPointerCapture(y.pointerId);
          } catch {
          }
        }
      }
      window.addEventListener("pointermove", C), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", j);
    }
    function g(y) {
      s.value = !1;
      const b = document.elementsFromPoint(y.clientX, y.clientY), w = b.find((H) => !H.closest(_f)) ?? null;
      if (!w) {
        i.value = { dx: 0, dy: 0 }, console.warn(
          "[comment-widget] drag dropped outside any anchorable element; snapped back.",
          { stack: b }
        );
        return;
      }
      const S = new MouseEvent("mouseup", {
        clientX: y.clientX,
        clientY: y.clientY
      }), C = Va(w, S);
      i.value = { dx: 0, dy: 0 }, n("reposition", C);
    }
    function v(y) {
      if (a.value) {
        a.value = !1, y.stopPropagation();
        return;
      }
      y.stopPropagation(), n("click");
    }
    return (y, b) => (q(), W("button", {
      type: "button",
      class: Ge(["cw-pin", {
        "cw-pin--approximate": t.anchor.approximate,
        "cw-pin--active": t.active,
        "cw-pin--resolved": t.thread.status === "resolved",
        "cw-pin--dragging": s.value,
        "cw-pin--draggable": t.draggable
      }]),
      style: wr(h.value),
      title: u.value,
      onPointerdown: f,
      onClick: v
    }, [
      P("span", Ff, te(t.index), 1)
    ], 46, qf));
  }
}), zf = { class: "cw-mention-wrap" }, Jf = ["value", "placeholder", "disabled"], Gf = ["aria-selected", "onMouseenter", "onMousedown"], Yf = { class: "cw-mention-option-name" }, Xf = { class: "cw-mention-option-email" }, za = /* @__PURE__ */ Jt({
  __name: "MentionInput",
  props: {
    modelValue: {},
    mentions: {},
    pool: {},
    placeholder: {},
    disabled: { type: Boolean },
    compact: { type: Boolean },
    resetKey: {}
  },
  emits: ["update:modelValue", "update:mentions", "submit", "cancel"],
  setup(t, { emit: e }) {
    const r = t, n = e, s = /* @__PURE__ */ Y(null), i = /* @__PURE__ */ Y(!1), o = /* @__PURE__ */ Y(""), a = /* @__PURE__ */ Y(0), l = /* @__PURE__ */ Y(0), c = oe(() => {
      const w = o.value.trim().toLowerCase();
      return w ? r.pool.filter((S) => {
        const C = S.name.toLowerCase(), H = S.email.toLowerCase();
        return C.startsWith(w) || H.startsWith(w) ? !0 : C.split(/\s+/).some((j) => j.startsWith(w));
      }).slice(0, 8) : r.pool.slice(0, 8);
    });
    kt(c, () => {
      l.value = 0;
    }), kt(
      () => r.resetKey,
      () => {
        g();
      }
    );
    function u(w) {
      const S = w.target, C = S.value;
      n("update:modelValue", C), h(C), f(S);
    }
    function h(w) {
      if (r.mentions.length === 0) return;
      const S = r.mentions.filter((C) => d(w, C.name));
      S.length !== r.mentions.length && n("update:mentions", S);
    }
    function d(w, S) {
      const C = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(`(^|\\s)@${C}(?=$|[^\\w])`).test(w);
    }
    function f(w) {
      const S = w.value, C = w.selectionStart ?? S.length;
      let H = C - 1;
      for (; H >= 0; ) {
        const j = S[H];
        if (j === "@") {
          const E = H === 0 ? "" : S[H - 1];
          if (H === 0 || /\s/.test(E)) {
            const T = S.slice(H + 1, C);
            if (/\s/.test(T)) {
              g();
              return;
            }
            a.value = H, o.value = T, i.value = !0;
            return;
          }
          g();
          return;
        }
        if (/\s/.test(j)) {
          g();
          return;
        }
        H -= 1;
      }
      g();
    }
    function g() {
      i.value = !1, o.value = "", a.value = 0, l.value = 0;
    }
    function v(w) {
      const S = s.value;
      if (!S) return;
      const C = r.modelValue, H = S.selectionStart ?? C.length, j = C.slice(0, a.value), E = C.slice(H), T = `@${w.name}`, k = `${j}${T} ${E}`;
      n("update:modelValue", k);
      const D = /* @__PURE__ */ new Map();
      for (const K of r.mentions) D.set(K.email.toLowerCase(), K);
      D.set(w.email.toLowerCase(), { email: w.email, name: w.name }), n("update:mentions", Array.from(D.values())), g(), zs(() => {
        const K = j.length + T.length + 1;
        S.focus();
        try {
          S.setSelectionRange(K, K);
        } catch {
        }
      });
    }
    function y(w) {
      if (i.value && c.value.length > 0) {
        if (w.key === "ArrowDown") {
          w.preventDefault(), l.value = (l.value + 1) % c.value.length;
          return;
        }
        if (w.key === "ArrowUp") {
          w.preventDefault(), l.value = (l.value - 1 + c.value.length) % c.value.length;
          return;
        }
        if (w.key === "Enter" || w.key === "Tab") {
          w.preventDefault(), v(c.value[l.value]);
          return;
        }
        if (w.key === "Escape") {
          w.preventDefault(), g();
          return;
        }
      }
      if (w.key === "Enter" && !w.shiftKey) {
        w.preventDefault(), n("submit");
        return;
      }
      if (w.key === "Escape") {
        w.preventDefault(), n("cancel");
        return;
      }
    }
    function b(w, S) {
      w.preventDefault(), v(S);
    }
    return (w, S) => (q(), W("div", zf, [
      P("textarea", {
        ref_key: "textareaRef",
        ref: s,
        class: Ge(["cw-composer-textarea", { "cw-composer-textarea--compact": t.compact }]),
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        onInput: u,
        onKeydown: y,
        onBlur: g
      }, null, 42, Jf),
      i.value && c.value.length > 0 ? (q(), W("ul", {
        key: 0,
        class: "cw-mention-dropdown",
        role: "listbox",
        onMousedown: S[0] || (S[0] = ze(() => {
        }, ["stop"]))
      }, [
        (q(!0), W(_e, null, mr(c.value, (C, H) => (q(), W("li", {
          key: C.email,
          class: Ge(["cw-mention-option", { "cw-mention-option--active": H === l.value }]),
          role: "option",
          "aria-selected": H === l.value,
          onMouseenter: (j) => l.value = H,
          onMousedown: (j) => b(j, C)
        }, [
          P("span", Yf, te(C.name), 1),
          P("span", Xf, te(C.email), 1)
        ], 42, Gf))), 128))
      ], 32)) : ae("", !0)
    ]));
  }
}), Qf = { class: "cw-popover-header" }, Zf = { class: "cw-popover-title" }, ep = {
  key: 0,
  class: "cw-status-pill"
}, tp = { key: 1 }, rp = { class: "cw-popover-header-actions" }, np = ["disabled", "title"], sp = ["disabled"], ip = {
  key: 0,
  class: "cw-error-banner"
}, op = {
  key: 1,
  class: "cw-error-banner"
}, ap = {
  key: 2,
  class: "cw-confirm-banner",
  role: "alertdialog"
}, lp = { class: "cw-confirm-banner-actions" }, cp = ["disabled"], up = ["disabled"], hp = { class: "cw-popover-body" }, dp = {
  key: 0,
  class: "cw-popover-empty"
}, fp = { class: "cw-comment-meta" }, pp = ["disabled", "onClick"], gp = { class: "cw-comment-body" }, mp = {
  key: 0,
  class: "cw-mention"
}, vp = {
  key: 0,
  class: "cw-confirm-banner cw-confirm-banner--inline",
  role: "alertdialog"
}, yp = { class: "cw-confirm-banner-actions" }, wp = ["disabled"], bp = ["disabled", "onClick"], _p = { class: "cw-popover-footer" }, Sp = {
  key: 0,
  class: "cw-error-banner cw-error-banner--inline"
}, kp = {
  key: 1,
  class: "cw-popover-signin-hint"
}, Ep = { class: "cw-composer-actions" }, Tp = ["disabled"], bo = 320, us = 18, Cp = /* @__PURE__ */ Jt({
  __name: "CommentThread",
  props: {
    thread: {},
    comments: {},
    anchorX: {},
    anchorY: {},
    replyBusy: { type: Boolean },
    replyError: {},
    replyResetKey: {},
    statusBusy: { type: Boolean },
    statusError: {},
    deleteBusy: { type: Boolean },
    deleteError: {},
    signedIn: { type: Boolean },
    currentEmail: {},
    mentionPool: {}
  },
  emits: ["close", "reply", "set-status", "delete-comment", "delete-thread", "sign-in-required"],
  setup(t, { emit: e }) {
    const r = t, n = e, s = /* @__PURE__ */ Y(""), i = /* @__PURE__ */ Y([]);
    kt(
      () => r.replyResetKey,
      () => {
        s.value = "", i.value = [];
      }
    );
    function o() {
      if (!r.signedIn) {
        n("sign-in-required");
        return;
      }
      const j = s.value.trim();
      !j || r.replyBusy || n("reply", { body: j, mentions: i.value });
    }
    function a() {
      if (!r.statusBusy) {
        if (!r.signedIn) {
          n("sign-in-required");
          return;
        }
        n("set-status", r.thread.status === "open" ? "resolved" : "open");
      }
    }
    const l = oe(() => {
      const j = window.innerWidth, E = window.innerHeight, k = r.anchorX + us + bo < j - 12 ? r.anchorX + us : Math.max(12, r.anchorX - us - bo), D = Math.min(
        Math.max(12, r.anchorY - 12),
        Math.max(12, E - 280)
      );
      return { left: `${k}px`, top: `${D}px` };
    }), c = oe(() => r.thread.status === "resolved"), u = oe(() => r.comments[0]?.id ?? null), h = oe(
      () => r.signedIn && r.currentEmail !== null && r.thread.created_by_email.toLowerCase() === r.currentEmail.toLowerCase()
    );
    function d(j) {
      return !r.signedIn || !r.currentEmail || j.id === u.value ? !1 : j.author_email.toLowerCase() === r.currentEmail.toLowerCase();
    }
    const f = /* @__PURE__ */ Y(null);
    function g(j) {
      f.value = j;
    }
    function v() {
      f.value = "thread";
    }
    function y() {
      f.value = null;
    }
    function b(j) {
      n("delete-comment", j), f.value = null;
    }
    function w() {
      n("delete-thread"), f.value = null;
    }
    function S(j) {
      const E = new Date(j), k = Date.now() - E.getTime(), D = Math.round(k / 6e4);
      if (D < 1) return "just now";
      if (D < 60) return `${D}m ago`;
      const K = Math.round(D / 60);
      if (K < 24) return `${K}h ago`;
      const se = Math.round(K / 24);
      return se < 7 ? `${se}d ago` : E.toLocaleDateString();
    }
    const C = oe(
      () => [...r.mentionPool].map((j) => j.name).filter((j) => !!j).sort((j, E) => E.length - j.length)
    );
    function H(j) {
      if (!j) return [];
      const E = C.value;
      if (E.length === 0) return [{ type: "text", value: j }];
      const T = E.map((re) => re.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), k = new RegExp(`(^|\\s)@(${T.join("|")})(?=$|[^\\w])`, "g"), D = [];
      let K = 0, se;
      for (; (se = k.exec(j)) !== null; ) {
        const re = se.index, Q = se[1] ?? "", Z = re + Q.length;
        Z > K && D.push({ type: "text", value: j.slice(K, Z) });
        const et = se[2];
        D.push({ type: "mention", value: `@${et}` }), K = Z + 1 + et.length;
      }
      return K < j.length && D.push({ type: "text", value: j.slice(K) }), D;
    }
    return (j, E) => (q(), W("div", {
      class: Ge(["cw-popover", { "cw-popover--resolved": c.value }]),
      style: wr(l.value),
      onMousedown: E[4] || (E[4] = ze(() => {
      }, ["stop"]))
    }, [
      P("div", Qf, [
        P("span", Zf, [
          c.value ? (q(), W("span", ep, "Resolved")) : (q(), W("span", tp, "Comment"))
        ]),
        P("div", rp, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            disabled: t.statusBusy,
            title: c.value ? "Reopen this thread" : "Mark this thread resolved",
            onClick: a
          }, te(t.statusBusy ? "Saving…" : c.value ? "Reopen" : "Resolve"), 9, np),
          h.value ? (q(), W("button", {
            key: 0,
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--icon cw-btn--danger",
            disabled: t.deleteBusy,
            "aria-label": "Delete thread",
            title: "Delete thread",
            onClick: v
          }, [...E[5] || (E[5] = [
            ba('<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>', 1)
          ])], 8, sp)) : ae("", !0),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--icon",
            "aria-label": "Close",
            onClick: E[0] || (E[0] = (T) => j.$emit("close"))
          }, [...E[6] || (E[6] = [
            P("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              P("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              P("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])])
        ])
      ]),
      t.statusError ? (q(), W("div", ip, te(t.statusError), 1)) : ae("", !0),
      t.deleteError ? (q(), W("div", op, te(t.deleteError), 1)) : ae("", !0),
      f.value === "thread" ? (q(), W("div", ap, [
        E[7] || (E[7] = P("span", null, "Delete the whole thread? This removes every reply too.", -1)),
        P("div", lp, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            disabled: t.deleteBusy,
            onClick: y
          }, " Cancel ", 8, cp),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--danger cw-btn--small",
            disabled: t.deleteBusy,
            onClick: w
          }, te(t.deleteBusy ? "Deleting…" : "Delete thread"), 9, up)
        ])
      ])) : ae("", !0),
      P("div", hp, [
        t.comments.length === 0 ? (q(), W("div", dp, " No comments yet. ")) : ae("", !0),
        (q(!0), W(_e, null, mr(t.comments, (T) => (q(), W("div", {
          key: T.id,
          class: "cw-comment"
        }, [
          P("div", fp, [
            P("strong", null, te(T.author_name), 1),
            P("span", null, te(S(T.created_at)), 1),
            d(T) ? (q(), W("button", {
              key: 0,
              type: "button",
              class: "cw-btn cw-btn--ghost cw-btn--icon cw-btn--danger cw-comment-delete",
              disabled: t.deleteBusy,
              "aria-label": "Delete reply",
              title: "Delete reply",
              onClick: (k) => g(T.id)
            }, [...E[8] || (E[8] = [
              P("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                P("polyline", { points: "3 6 5 6 21 6" }),
                P("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
                P("path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" })
              ], -1)
            ])], 8, pp)) : ae("", !0)
          ]),
          P("div", gp, [
            (q(!0), W(_e, null, mr(H(T.body), (k, D) => (q(), W(_e, { key: D }, [
              k.type === "mention" ? (q(), W("span", mp, te(k.value), 1)) : (q(), W(_e, { key: 1 }, [
                Tn(te(k.value), 1)
              ], 64))
            ], 64))), 128))
          ]),
          f.value === T.id ? (q(), W("div", vp, [
            E[9] || (E[9] = P("span", null, "Delete this reply?", -1)),
            P("div", yp, [
              P("button", {
                type: "button",
                class: "cw-btn cw-btn--ghost cw-btn--small",
                disabled: t.deleteBusy,
                onClick: y
              }, " Cancel ", 8, wp),
              P("button", {
                type: "button",
                class: "cw-btn cw-btn--danger cw-btn--small",
                disabled: t.deleteBusy,
                onClick: (k) => b(T.id)
              }, te(t.deleteBusy ? "Deleting…" : "Delete"), 9, bp)
            ])
          ])) : ae("", !0)
        ]))), 128))
      ]),
      P("div", _p, [
        t.replyError ? (q(), W("div", Sp, te(t.replyError), 1)) : ae("", !0),
        t.signedIn ? (q(), W(_e, { key: 2 }, [
          He(za, {
            modelValue: s.value,
            "onUpdate:modelValue": E[2] || (E[2] = (T) => s.value = T),
            mentions: i.value,
            "onUpdate:mentions": E[3] || (E[3] = (T) => i.value = T),
            pool: t.mentionPool,
            placeholder: c.value ? "Reply to reopen the conversation…" : "Reply…",
            disabled: t.replyBusy,
            "reset-key": t.replyResetKey,
            compact: !0,
            onSubmit: o
          }, null, 8, ["modelValue", "mentions", "pool", "placeholder", "disabled", "reset-key"]),
          P("div", Ep, [
            P("button", {
              type: "button",
              class: "cw-btn cw-btn--primary cw-btn--small",
              disabled: t.replyBusy || !s.value.trim(),
              onClick: o
            }, te(t.replyBusy ? "Posting…" : "Reply"), 9, Tp)
          ])
        ], 64)) : (q(), W("div", kp, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--primary cw-btn--small",
            onClick: E[1] || (E[1] = (T) => j.$emit("sign-in-required"))
          }, " Sign in to reply ")
        ]))
      ])
    ], 38));
  }
}), Rp = { class: "cw-modal-subtitle" }, Ap = { class: "cw-field" }, Op = ["disabled"], xp = { class: "cw-field" }, Pp = ["disabled"], $p = {
  key: 0,
  class: "cw-field-label",
  style: { color: "#c0382e" }
}, Ip = {
  key: 0,
  class: "cw-error-banner"
}, jp = { class: "cw-composer-actions" }, Lp = ["disabled"], Np = ["disabled"], Dp = { class: "cw-modal-subtitle" }, Up = { class: "cw-field" }, Mp = ["value", "disabled"], Bp = {
  key: 0,
  class: "cw-error-banner"
}, Hp = { class: "cw-composer-actions cw-signin-actions" }, qp = ["disabled"], Fp = ["disabled"], Wp = ["disabled"], _o = 3e4, So = "cw_saved_email", ko = "cw_saved_name", hs = 6, ds = 10, Kp = /* @__PURE__ */ Jt({
  __name: "SignInPrompt",
  props: {
    reason: {}
  },
  emits: ["request-code", "verify-code", "cancel"],
  setup(t, { emit: e }) {
    const r = e, n = /* @__PURE__ */ Y("email"), s = /* @__PURE__ */ Y(""), i = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y(!1), c = /* @__PURE__ */ Y(""), u = /* @__PURE__ */ Y(!1), h = /* @__PURE__ */ Y(null), d = /* @__PURE__ */ Y(0);
    let f = null;
    function g() {
      f !== null && window.clearInterval(f), d.value = _o;
      const T = Date.now();
      f = window.setInterval(() => {
        const k = Date.now() - T, D = _o - k;
        D <= 0 ? (d.value = 0, f !== null && (window.clearInterval(f), f = null)) : d.value = D;
      }, 250);
    }
    br(() => {
      f !== null && window.clearInterval(f);
    }), Ys(() => {
      try {
        const T = localStorage.getItem(So), k = localStorage.getItem(ko);
        T && (s.value = T), k && (i.value = k);
      } catch {
      }
    });
    function v() {
      try {
        localStorage.setItem(So, s.value.trim()), localStorage.setItem(ko, i.value.trim());
      } catch {
      }
    }
    const y = oe(() => Math.ceil(d.value / 1e3));
    function b(T) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T);
    }
    const w = /* @__PURE__ */ Y(null);
    kt(n, (T) => {
      T === "code" && zs(() => w.value?.focus());
    });
    async function S() {
      l.value = !0;
      const T = s.value.trim(), k = i.value.trim();
      if (!(!b(T) || !k)) {
        o.value = !0, a.value = null;
        try {
          await r("request-code", { email: T, name: k }), n.value = "code", g();
        } catch (D) {
          a.value = D instanceof Error ? D.message : "Could not send code.";
        } finally {
          o.value = !1;
        }
      }
    }
    async function C() {
      if (d.value > 0 || o.value) return;
      const T = s.value.trim(), k = i.value.trim();
      if (b(T)) {
        o.value = !0, h.value = null;
        try {
          await r("request-code", { email: T, name: k }), g();
        } catch (D) {
          h.value = D instanceof Error ? D.message : "Could not resend code.";
        } finally {
          o.value = !1;
        }
      }
    }
    async function H() {
      const T = c.value.trim();
      if (T.length < hs) return;
      const k = s.value.trim();
      if (!k) {
        n.value = "email";
        return;
      }
      u.value = !0, h.value = null;
      try {
        await r("verify-code", { email: k, code: T }), v();
      } catch (D) {
        h.value = D instanceof Error ? D.message : "Could not verify code.";
      } finally {
        u.value = !1;
      }
    }
    function j() {
      n.value = "email", c.value = "", h.value = null;
    }
    function E(T) {
      const k = T.target, D = T.inputType ?? "", K = k.value.replace(/\D+/g, "").slice(0, ds);
      K !== k.value && (k.value = K), c.value = K, (D === "insertFromPaste" || D === "insertFromDrop") && K.length >= hs && K.length <= ds && !u.value && H();
    }
    return (T, k) => (q(), W("div", {
      class: "cw-modal-backdrop",
      onMousedown: k[5] || (k[5] = ze((D) => T.$emit("cancel"), ["self"]))
    }, [
      n.value === "email" ? (q(), W("form", {
        key: 0,
        class: "cw-modal",
        onSubmit: ze(S, ["prevent"]),
        onMousedown: k[3] || (k[3] = ze(() => {
        }, ["stop"]))
      }, [
        k[8] || (k[8] = P("h2", { class: "cw-modal-title" }, "Sign in to comment", -1)),
        P("p", Rp, te(t.reason ?? "We'll email you a one-time code. Reading the page stays anonymous."), 1),
        P("label", Ap, [
          k[6] || (k[6] = P("span", { class: "cw-field-label" }, "Name", -1)),
          kn(P("input", {
            "onUpdate:modelValue": k[0] || (k[0] = (D) => i.value = D),
            class: "cw-input",
            type: "text",
            name: "name",
            autocomplete: "name",
            placeholder: "Jane Designer",
            disabled: o.value,
            required: ""
          }, null, 8, Op), [
            [Rn, i.value]
          ])
        ]),
        P("label", xp, [
          k[7] || (k[7] = P("span", { class: "cw-field-label" }, "Email", -1)),
          kn(P("input", {
            "onUpdate:modelValue": k[1] || (k[1] = (D) => s.value = D),
            class: "cw-input",
            type: "email",
            name: "email",
            autocomplete: "email",
            placeholder: "jane@example.com",
            disabled: o.value,
            required: ""
          }, null, 8, Pp), [
            [Rn, s.value]
          ]),
          l.value && s.value && !b(s.value) ? (q(), W("span", $p, " Enter a valid email address. ")) : ae("", !0)
        ]),
        a.value ? (q(), W("div", Ip, te(a.value), 1)) : ae("", !0),
        P("div", jp, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost",
            disabled: o.value,
            onClick: k[2] || (k[2] = (D) => T.$emit("cancel"))
          }, " Cancel ", 8, Lp),
          P("button", {
            type: "submit",
            class: "cw-btn cw-btn--primary",
            disabled: o.value
          }, te(o.value ? "Sending…" : "Send code"), 9, Np)
        ])
      ], 32)) : (q(), W("form", {
        key: 1,
        class: "cw-modal",
        onSubmit: ze(H, ["prevent"]),
        onMousedown: k[4] || (k[4] = ze(() => {
        }, ["stop"]))
      }, [
        k[13] || (k[13] = P("h2", { class: "cw-modal-title" }, "Enter your code", -1)),
        P("p", Dp, [
          k[9] || (k[9] = Tn(" We sent a one-time code to ", -1)),
          P("strong", null, te(s.value), 1),
          k[10] || (k[10] = Tn(". Paste it below to finish signing in. ", -1))
        ]),
        P("label", Up, [
          k[11] || (k[11] = P("span", { class: "cw-field-label" }, "Code", -1)),
          P("input", {
            ref_key: "codeRef",
            ref: w,
            value: c.value,
            class: "cw-input cw-input--code",
            type: "text",
            inputmode: "numeric",
            autocomplete: "one-time-code",
            maxlength: ds,
            placeholder: "Code from email",
            disabled: u.value,
            required: "",
            onInput: E
          }, null, 40, Mp)
        ]),
        h.value ? (q(), W("div", Bp, te(h.value), 1)) : ae("", !0),
        P("div", Hp, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            disabled: u.value,
            onClick: j
          }, " Back ", 8, qp),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            disabled: d.value > 0 || o.value || u.value,
            onClick: C
          }, te(d.value > 0 ? `Resend in ${y.value}s` : "Resend code"), 9, Fp),
          k[12] || (k[12] = P("span", { class: "cw-signin-spacer" }, null, -1)),
          P("button", {
            type: "submit",
            class: "cw-btn cw-btn--primary",
            disabled: u.value || c.value.length < hs
          }, te(u.value ? "Verifying…" : "Verify"), 9, Wp)
        ])
      ], 32))
    ], 32));
  }
}), Vp = { class: "cw-team-panel-header" }, zp = {
  key: 0,
  class: "cw-error-banner"
}, Jp = ["disabled"], Gp = ["disabled"], Yp = ["disabled"], Xp = {
  key: 1,
  class: "cw-error-banner cw-error-banner--inline"
}, Qp = {
  key: 2,
  class: "cw-team-list"
}, Zp = {
  key: 0,
  class: "cw-team-empty"
}, eg = { class: "cw-team-row-meta" }, tg = ["disabled", "title", "onClick"], rg = {
  key: 3,
  class: "cw-error-banner cw-error-banner--inline"
}, ng = /* @__PURE__ */ Jt({
  __name: "TeamPanel",
  props: {
    members: {},
    loadError: {},
    currentEmail: {}
  },
  emits: ["add", "remove", "close"],
  setup(t, { emit: e }) {
    const r = t, n = e, s = /* @__PURE__ */ Y(""), i = /* @__PURE__ */ Y(""), o = /* @__PURE__ */ Y(!1), a = /* @__PURE__ */ Y(null), l = /* @__PURE__ */ Y(null), c = /* @__PURE__ */ Y(null), u = oe(
      () => [...r.members].sort((v, y) => v.name.localeCompare(y.name))
    );
    function h(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }
    const d = oe(() => h(s.value.trim()) && !o.value);
    async function f() {
      const v = s.value.trim(), y = i.value.trim();
      if (h(v)) {
        o.value = !0, a.value = null;
        try {
          await n("add", { email: v, name: y }), s.value = "", i.value = "";
        } catch (b) {
          a.value = b instanceof Error ? b.message : "Could not add team member.";
        } finally {
          o.value = !1;
        }
      }
    }
    async function g(v) {
      l.value = v.id, c.value = null;
      try {
        await n("remove", v.id);
      } catch (y) {
        c.value = y instanceof Error ? y.message : "Could not remove team member.";
      } finally {
        l.value = null;
      }
    }
    return (v, y) => (q(), W("div", {
      class: "cw-modal-backdrop",
      onMousedown: y[4] || (y[4] = ze((b) => v.$emit("close"), ["self"]))
    }, [
      P("div", {
        class: "cw-modal cw-team-panel",
        role: "dialog",
        "aria-label": "Team",
        onMousedown: y[3] || (y[3] = ze(() => {
        }, ["stop"]))
      }, [
        P("div", Vp, [
          y[6] || (y[6] = P("h2", { class: "cw-modal-title" }, "Team", -1)),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--icon",
            "aria-label": "Close",
            onClick: y[0] || (y[0] = (b) => v.$emit("close"))
          }, [...y[5] || (y[5] = [
            P("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              P("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              P("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])])
        ]),
        y[7] || (y[7] = P("p", { class: "cw-modal-subtitle" }, " People here always appear in @-mention suggestions, even if they haven't signed in yet. ", -1)),
        t.loadError ? (q(), W("div", zp, te(t.loadError), 1)) : ae("", !0),
        P("form", {
          class: "cw-team-add",
          onSubmit: ze(f, ["prevent"])
        }, [
          kn(P("input", {
            "onUpdate:modelValue": y[1] || (y[1] = (b) => i.value = b),
            class: "cw-input",
            type: "text",
            autocomplete: "name",
            placeholder: "Name (optional)",
            disabled: o.value
          }, null, 8, Jp), [
            [Rn, i.value]
          ]),
          kn(P("input", {
            "onUpdate:modelValue": y[2] || (y[2] = (b) => s.value = b),
            class: "cw-input",
            type: "email",
            autocomplete: "email",
            placeholder: "email@example.com",
            disabled: o.value,
            required: ""
          }, null, 8, Gp), [
            [Rn, s.value]
          ]),
          P("button", {
            type: "submit",
            class: "cw-btn cw-btn--primary cw-btn--small",
            disabled: !d.value
          }, te(o.value ? "Adding…" : "Add"), 9, Yp)
        ], 32),
        a.value ? (q(), W("div", Xp, te(a.value), 1)) : ae("", !0),
        t.loadError ? ae("", !0) : (q(), W("ul", Qp, [
          u.value.length === 0 ? (q(), W("li", Zp, " No one on the team yet. Add an email above. ")) : ae("", !0),
          (q(!0), W(_e, null, mr(u.value, (b) => (q(), W("li", {
            key: b.id,
            class: "cw-team-row"
          }, [
            P("div", eg, [
              P("strong", null, te(b.name), 1),
              P("span", null, te(b.email), 1)
            ]),
            P("button", {
              type: "button",
              class: "cw-btn cw-btn--ghost cw-btn--small",
              disabled: l.value === b.id,
              title: b.email === t.currentEmail ? "Remove yourself" : "Remove",
              onClick: (w) => g(b)
            }, te(l.value === b.id ? "Removing…" : "Remove"), 9, tg)
          ]))), 128))
        ])),
        c.value ? (q(), W("div", rg, te(c.value), 1)) : ae("", !0)
      ], 32)
    ], 32));
  }
}), sg = { class: "cw-layer" }, ig = {
  key: 0,
  class: "cw-mode-veil",
  "aria-hidden": "true"
}, og = {
  key: 1,
  class: "cw-toast cw-toast--error",
  role: "alert"
}, ag = {
  key: 2,
  class: "cw-round-banner",
  role: "status"
}, lg = {
  key: 0,
  class: "cw-error-banner cw-error-banner--inline"
}, cg = { class: "cw-composer-actions" }, ug = ["disabled"], hg = ["disabled"], dg = /* @__PURE__ */ Jt({
  __name: "CommentOverlay",
  props: {
    config: {}
  },
  setup(t) {
    const e = t, r = af(e.config.supabaseUrl, e.config.supabaseAnonKey), { identity: n, signedIn: s, requestEmailCode: i, verifyEmailCode: o, signOut: a } = df(r), {
      threads: l,
      commentsByThread: c,
      loadError: u,
      openThreadCount: h,
      totalThreadCount: d,
      load: f,
      startRealtime: g,
      createThread: v,
      replyToThread: y,
      updateThreadStatus: b,
      updateThreadAnchor: w,
      deleteComment: S,
      deleteThread: C
    } = pf(r, e.config.projectId), H = oe(() => n.value?.email ?? null), j = mf({
      client: r,
      projectId: e.config.projectId,
      signedIn: s,
      threads: l,
      commentsByThread: c,
      currentEmail: H
    }), { positions: E } = Tf(l), {
      enabled: T,
      rounds: k,
      currentRoundId: D,
      isLatest: K,
      load: se,
      switchTo: re
    } = wf(), Q = /* @__PURE__ */ Y(!1), Z = /* @__PURE__ */ Y(null), et = /* @__PURE__ */ Y(!0), dt = /* @__PURE__ */ Y(!1), ee = /* @__PURE__ */ Y(null), je = /* @__PURE__ */ hr({
      busy: !1,
      error: null,
      resetKey: 0
    }), De = /* @__PURE__ */ hr({
      busy: !1,
      error: null
    }), ke = /* @__PURE__ */ hr({
      busy: !1,
      error: null
    }), Ee = /* @__PURE__ */ Y(null), tn = oe(
      () => l.value.map((I, $) => {
        const X = E.get(I.id);
        return !X || et.value && I.status !== "open" && I.id !== Z.value ? null : { thread: I, anchor: X, index: $ + 1 };
      }).filter((I) => I !== null)
    ), rn = oe(() => Z.value ? l.value.find((I) => I.id === Z.value) ?? null : null), Sr = oe(() => Z.value ? E.get(Z.value) ?? null : null), $t = oe(() => Z.value ? c.value[Z.value] ?? [] : []), Gt = oe(() => {
      const I = Ee.value;
      if (I)
        switch (I.kind) {
          case "create-thread":
            return "Sign in to post this comment.";
          case "reply":
            return "Sign in to post your reply.";
          case "status":
            return I.status === "resolved" ? "Sign in to resolve this thread." : "Sign in to reopen this thread.";
          case "reposition":
            return "Sign in to move this pin.";
          case "delete-comment":
            return "Sign in to delete your reply.";
          case "delete-thread":
            return "Sign in to delete this thread.";
          case "sign-in-only":
            return;
        }
    });
    function tt(I) {
      return I instanceof Vt ? I.hint : I instanceof Error ? I.message : "Something went wrong. Check the console.";
    }
    function kr() {
      Q.value = !Q.value, Q.value ? Z.value = null : ee.value = null;
    }
    function It() {
      et.value = !et.value;
    }
    function si(I) {
      Z.value = I, ee.value = null, je.busy = !1, je.error = null, De.busy = !1, De.error = null, ke.busy = !1, ke.error = null;
    }
    function p() {
      Z.value = null, je.busy = !1, je.error = null, De.busy = !1, De.error = null, ke.busy = !1, ke.error = null;
    }
    function m(I) {
      if (!Q.value || I.button !== 0) return;
      const $ = vo(I.target);
      if (!$ || $ === document.body || $ === document.documentElement) return;
      I.preventDefault(), I.stopPropagation();
      const X = Va($, I);
      ee.value = {
        anchor: X,
        clientX: I.clientX,
        clientY: I.clientY,
        body: "",
        mentions: [],
        submitting: !1,
        error: null,
        resetKey: 0
      };
    }
    function _(I) {
      !Q.value || !vo(I.target) || (I.preventDefault(), I.stopPropagation());
    }
    function x() {
      document.addEventListener("mousedown", m, { capture: !0 }), document.addEventListener("mouseup", _, { capture: !0 }), document.addEventListener("click", _, { capture: !0 });
    }
    function A() {
      document.removeEventListener("mousedown", m, { capture: !0 }), document.removeEventListener("mouseup", _, { capture: !0 }), document.removeEventListener("click", _, { capture: !0 });
    }
    kt(Q, (I) => {
      document.body.classList.toggle("cw-mode-on", I);
    });
    function R(I) {
      return s.value && n.value ? !1 : (Ee.value = I, !0);
    }
    async function U() {
      if (!ee.value || ee.value.submitting) return;
      const I = ee.value.body.trim();
      if (I && !R({ kind: "create-thread" })) {
        ee.value.submitting = !0, ee.value.error = null;
        try {
          const $ = await v(
            ee.value.anchor,
            I,
            n.value,
            ee.value.mentions
          );
          ee.value = null, Q.value = !1, Z.value = $.id;
        } catch ($) {
          if (!ee.value) return;
          ee.value.submitting = !1, ee.value.error = tt($);
        }
      }
    }
    function N() {
      ee.value = null, Q.value = !1;
    }
    async function L(I) {
      const $ = Z.value;
      if ($ && !R({ kind: "reply", threadId: $, body: I.body, mentions: I.mentions })) {
        je.busy = !0, je.error = null;
        try {
          await y($, I.body, n.value, I.mentions), je.resetKey += 1;
        } catch (X) {
          je.error = tt(X);
        } finally {
          je.busy = !1;
        }
      }
    }
    async function O(I) {
      const $ = Z.value;
      if ($ && !R({ kind: "status", threadId: $, status: I })) {
        De.busy = !0, De.error = null;
        try {
          await b($, I);
        } catch (X) {
          De.error = tt(X);
        } finally {
          De.busy = !1;
        }
      }
    }
    async function z(I, $) {
      if (!R({ kind: "reposition", threadId: I, anchor: $ }))
        try {
          await w(I, $);
        } catch (X) {
          u.value = tt(X);
        }
    }
    async function B(I) {
      const $ = Z.value;
      if ($ && !R({ kind: "delete-comment", threadId: $, commentId: I })) {
        ke.busy = !0, ke.error = null;
        try {
          await S($, I);
        } catch (X) {
          ke.error = tt(X);
        } finally {
          ke.busy = !1;
        }
      }
    }
    async function V() {
      const I = Z.value;
      if (I && !R({ kind: "delete-thread", threadId: I })) {
        ke.busy = !0, ke.error = null;
        try {
          await C(I), Z.value = null;
        } catch ($) {
          ke.error = tt($);
        } finally {
          ke.busy = !1;
        }
      }
    }
    async function G(I) {
      await i(I.email, I.name);
    }
    async function ie(I) {
      await o(I.email, I.code);
    }
    function le() {
      const I = Ee.value;
      Ee.value = null, I?.kind === "create-thread" && (ee.value = null, Q.value = !1);
    }
    kt(s, async (I) => {
      if (!I) return;
      const $ = Ee.value;
      Ee.value = null, $ && ($.kind === "create-thread" ? await U() : $.kind === "reply" ? (Z.value !== $.threadId && (Z.value = $.threadId), await L({ body: $.body, mentions: $.mentions })) : $.kind === "status" ? (Z.value !== $.threadId && (Z.value = $.threadId), await O($.status)) : $.kind === "reposition" ? await z($.threadId, $.anchor) : $.kind === "delete-comment" ? (Z.value !== $.threadId && (Z.value = $.threadId), await B($.commentId)) : $.kind === "delete-thread" && (Z.value !== $.threadId && (Z.value = $.threadId), await V()));
    });
    async function ue() {
      try {
        await a();
      } catch (I) {
        console.warn("[comment-widget] sign out failed:", I);
      }
    }
    function ve(I) {
      if (I.key === "c" && !I.metaKey && !I.ctrlKey && !I.altKey) {
        const $ = I.target;
        if ($.tagName !== "INPUT" && $.tagName !== "TEXTAREA" && !$.isContentEditable) {
          kr();
          return;
        }
      }
      I.key === "Escape" && (Ee.value ? le() : dt.value ? dt.value = !1 : ee.value ? N() : Z.value ? p() : Q.value && (Q.value = !1));
    }
    const Te = oe(() => {
      if (!ee.value) return {};
      const I = 320, $ = 12, X = Math.min(
        Math.max($, ee.value.clientX + 12),
        Math.max($, window.innerWidth - I - $)
      ), jt = Math.min(
        Math.max($, ee.value.clientY + 12),
        Math.max($, window.innerHeight - 240)
      );
      return { left: `${X}px`, top: `${jt}px` };
    });
    return Ys(async () => {
      x(), document.addEventListener("keydown", ve), se(), await f(), g();
    }), br(() => {
      A(), document.removeEventListener("keydown", ve), document.body.classList.remove("cw-mode-on");
    }), (I, $) => (q(), W("div", sg, [
      Q.value ? (q(), W("div", ig)) : ae("", !0),
      ye(u) ? (q(), W("div", og, [
        $[9] || ($[9] = P("strong", null, "Something went wrong.", -1)),
        P("span", null, te(ye(u)), 1)
      ])) : ae("", !0),
      ye(T) && !ye(K) ? (q(), W("div", ag, " Viewing an archived round ")) : ae("", !0),
      (q(!0), W(_e, null, mr(tn.value, (X) => (q(), Rr(Vf, {
        key: X.thread.id,
        anchor: X.anchor,
        thread: X.thread,
        active: Z.value === X.thread.id,
        index: X.index,
        draggable: ye(s),
        onClick: (jt) => si(X.thread.id),
        onReposition: (jt) => z(X.thread.id, jt)
      }, null, 8, ["anchor", "thread", "active", "index", "draggable", "onClick", "onReposition"]))), 128)),
      rn.value && Sr.value ? (q(), Rr(Cp, {
        key: 3,
        thread: rn.value,
        comments: $t.value,
        "anchor-x": Sr.value.x,
        "anchor-y": Sr.value.y,
        "reply-busy": je.busy,
        "reply-error": je.error,
        "reply-reset-key": je.resetKey,
        "status-busy": De.busy,
        "status-error": De.error,
        "delete-busy": ke.busy,
        "delete-error": ke.error,
        "signed-in": ye(s),
        "current-email": H.value,
        "mention-pool": ye(j).pool.value,
        onClose: p,
        onReply: L,
        onSetStatus: O,
        onDeleteComment: B,
        onDeleteThread: V,
        onSignInRequired: $[0] || ($[0] = (X) => Ee.value = { kind: "sign-in-only" })
      }, null, 8, ["thread", "comments", "anchor-x", "anchor-y", "reply-busy", "reply-error", "reply-reset-key", "status-busy", "status-error", "delete-busy", "delete-error", "signed-in", "current-email", "mention-pool"])) : ae("", !0),
      ee.value ? (q(), W("div", {
        key: 4,
        class: "cw-composer",
        style: wr(Te.value),
        onMousedown: $[3] || ($[3] = ze(() => {
        }, ["stop"]))
      }, [
        ee.value.error ? (q(), W("div", lg, te(ee.value.error), 1)) : ae("", !0),
        He(za, {
          modelValue: ee.value.body,
          "onUpdate:modelValue": $[1] || ($[1] = (X) => ee.value.body = X),
          mentions: ee.value.mentions,
          "onUpdate:mentions": $[2] || ($[2] = (X) => ee.value.mentions = X),
          pool: ye(j).pool.value,
          placeholder: "Leave a comment…",
          disabled: ee.value.submitting,
          "reset-key": ee.value.resetKey,
          onSubmit: U,
          onCancel: N
        }, null, 8, ["modelValue", "mentions", "pool", "disabled", "reset-key"]),
        P("div", cg, [
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost",
            disabled: ee.value.submitting,
            onClick: N
          }, " Cancel ", 8, ug),
          P("button", {
            type: "button",
            class: "cw-btn cw-btn--primary",
            disabled: ee.value.submitting || !ee.value.body.trim(),
            onClick: U
          }, te(ee.value.submitting ? "Posting…" : "Comment"), 9, hg)
        ])
      ], 36)) : ae("", !0),
      Ee.value ? (q(), Rr(Kp, {
        key: 5,
        reason: Gt.value,
        onRequestCode: G,
        onVerifyCode: ie,
        onCancel: le
      }, null, 8, ["reason"])) : ae("", !0),
      dt.value ? (q(), Rr(ng, {
        key: 6,
        members: ye(j).list.value,
        "load-error": ye(j).loadError.value,
        "current-email": H.value,
        onAdd: $[4] || ($[4] = async (X) => {
          await ye(j).add(X.email, X.name);
        }),
        onRemove: $[5] || ($[5] = async (X) => {
          await ye(j).remove(X);
        }),
        onClose: $[6] || ($[6] = (X) => dt.value = !1)
      }, null, 8, ["members", "load-error", "current-email"])) : ae("", !0),
      He(Hf, {
        active: Q.value,
        "open-count": ye(h),
        "total-count": ye(d),
        "show-open-only": et.value,
        "signed-in": ye(s),
        "user-name": ye(n)?.name ?? null,
        "rounds-enabled": ye(T),
        rounds: ye(k),
        "current-round-id": ye(D),
        "is-latest-round": ye(K),
        onToggle: kr,
        onToggleFilter: It,
        onOpenTeam: $[7] || ($[7] = (X) => dt.value = !0),
        onSignIn: $[8] || ($[8] = (X) => Ee.value = { kind: "sign-in-only" }),
        onSignOut: ue,
        onSelectRound: ye(re)
      }, null, 8, ["active", "open-count", "total-count", "show-open-only", "signed-in", "user-name", "rounds-enabled", "rounds", "current-round-id", "is-latest-round", "onSelectRound"])
    ]));
  }
}), Eo = "__comment-widget-root";
function fg() {
  const t = document.currentScript;
  if (!t) return null;
  const e = t.dataset.projectId, r = t.dataset.supabaseUrl, n = t.dataset.supabaseAnonKey;
  return !e || !r || !n ? (console.error(
    "[comment-widget] missing required data attributes. Need data-project-id, data-supabase-url, data-supabase-anon-key."
  ), null) : { projectId: e, supabaseUrl: r, supabaseAnonKey: n };
}
function wn(t) {
  if (window.__commentWidgetMounted__) {
    console.warn("[comment-widget] already mounted; ignoring duplicate mount call.");
    return;
  }
  const e = document.getElementById(Eo);
  e && e.remove();
  const r = document.createElement("div");
  r.id = Eo, document.body.appendChild(r), nu(dg, { config: t }).mount(r), window.__commentWidgetMounted__ = !0;
}
function pg() {
  const t = fg();
  t && (document.body ? wn(t) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => wn(t), { once: !0 }) : queueMicrotask(() => wn(t)));
}
window.CommentWidget = { mount: wn };
pg();
export {
  wn as mount
};
//# sourceMappingURL=widget.es.js.map
