(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.id="__comment-widget-styles",o.appendChild(document.createTextNode("#__comment-widget-root{--cw-accent: #2f6df6;--cw-accent-hover: #2456c2;--cw-text: #1a1a1a;--cw-text-muted: #6b6b6b;--cw-bg: #ffffff;--cw-bg-subtle: #f4f5f7;--cw-border: #e3e4e8;--cw-shadow: 0 8px 24px rgba(15, 23, 42, .12), 0 2px 4px rgba(15, 23, 42, .06);--cw-radius: 8px;--cw-pin-size: 24px;--cw-z: 2147483000;position:fixed;inset:0;pointer-events:none;z-index:var(--cw-z);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:14px;line-height:1.45;color:var(--cw-text)}#__comment-widget-root *,#__comment-widget-root *:before,#__comment-widget-root *:after{box-sizing:border-box}.cw-layer{position:absolute;inset:0;pointer-events:none}.cw-mode-veil{position:absolute;inset:0;background:#2f6df60a;border:2px dashed rgba(47,109,246,.35);pointer-events:none;z-index:1}.cw-pin{position:absolute;width:var(--cw-pin-size);height:var(--cw-pin-size);margin-left:calc(var(--cw-pin-size) / -2);margin-top:calc(var(--cw-pin-size) * -1);pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;background:var(--cw-accent);color:#fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px #0f172a40;border:2px solid #fff;transition:transform .12s ease,background .12s ease;font-size:11px;font-weight:600}.cw-pin>.cw-pin-label{transform:rotate(45deg)}.cw-pin:hover{background:var(--cw-accent-hover);transform:rotate(-45deg) scale(1.06)}.cw-pin.cw-pin--approximate{border-style:dashed;border-color:#f5b400;background:#f5b400}.cw-pin.cw-pin--active{background:var(--cw-accent-hover);transform:rotate(-45deg) scale(1.12)}.cw-pin.cw-pin--resolved{background:#94a3b8;border-color:#f1f5f9;opacity:.65}.cw-pin.cw-pin--resolved.cw-pin--active{background:#64748b;opacity:1}.cw-popover{position:absolute;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:320px;max-width:calc(100vw - 24px);max-height:60vh;overflow:hidden;display:flex;flex-direction:column}.cw-popover-header{padding:10px 12px;border-bottom:1px solid var(--cw-border);display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;color:var(--cw-text-muted)}.cw-popover-title{display:inline-flex;align-items:center;gap:6px}.cw-popover-header-actions{display:inline-flex;align-items:center;gap:4px}.cw-popover.cw-popover--resolved .cw-popover-header{background:var(--cw-bg-subtle)}.cw-status-pill{display:inline-flex;align-items:center;padding:2px 8px;border-radius:999px;background:#e2e8f0;color:#334155;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.cw-popover-body{overflow-y:auto;padding:6px 12px 12px}.cw-comment{padding:10px 0;border-bottom:1px solid var(--cw-border)}.cw-comment:last-child{border-bottom:none}.cw-comment-meta{display:flex;align-items:baseline;gap:8px;font-size:12px;color:var(--cw-text-muted);margin-bottom:4px}.cw-comment-meta>strong{color:var(--cw-text);font-weight:600}.cw-comment-body{white-space:pre-wrap;word-wrap:break-word}.cw-popover-empty{padding:16px 4px;text-align:center;color:var(--cw-text-muted);font-size:13px}.cw-popover-footer{padding:10px 12px 12px;border-top:1px solid var(--cw-border);background:var(--cw-bg-subtle);display:flex;flex-direction:column;gap:8px}.cw-popover.cw-popover--resolved .cw-popover-footer{background:#f8fafc}.cw-composer{position:absolute;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:320px;max-width:calc(100vw - 24px);padding:12px;display:flex;flex-direction:column;gap:10px}.cw-composer-textarea{width:100%;min-height:72px;resize:vertical;padding:8px 10px;border:1px solid var(--cw-border);border-radius:6px;font:inherit;color:inherit;background:var(--cw-bg);outline:none}.cw-composer-textarea:focus{border-color:var(--cw-accent);box-shadow:0 0 0 3px #2f6df626}.cw-composer-textarea--compact{min-height:56px}.cw-composer-actions{display:flex;justify-content:flex-end;gap:8px}.cw-error-banner{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;border-radius:6px;padding:8px 10px;font-size:12px;line-height:1.4}.cw-error-banner--inline{margin-bottom:2px}.cw-toast{position:fixed;top:16px;left:16px;pointer-events:auto;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);padding:10px 14px;max-width:360px;display:flex;flex-direction:column;gap:2px;font-size:13px}.cw-toast--error{border-color:#fecaca;background:#fef2f2;color:#991b1b}.cw-toast--error strong{color:#7f1d1d}.cw-btn{pointer-events:auto;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:6px 12px;border-radius:6px;border:1px solid var(--cw-border);background:var(--cw-bg);color:var(--cw-text);font:inherit;font-weight:500;cursor:pointer;transition:background .12s ease,border-color .12s ease}.cw-btn:hover{background:var(--cw-bg-subtle)}.cw-btn:disabled{opacity:.55;cursor:not-allowed}.cw-btn--primary{background:var(--cw-accent);border-color:var(--cw-accent);color:#fff}.cw-btn--primary:hover{background:var(--cw-accent-hover);border-color:var(--cw-accent-hover)}.cw-btn--ghost{border-color:transparent;background:transparent}.cw-btn--icon{width:28px;height:28px;padding:0}.cw-btn--small{padding:4px 10px;font-size:12px}.cw-filter-active{color:var(--cw-accent);background:#2f6df614;border-color:#2f6df64d}.cw-toolbar{position:fixed;bottom:20px;right:20px;pointer-events:auto;display:flex;align-items:center;gap:8px;padding:6px 6px 6px 14px;background:var(--cw-bg);border:1px solid var(--cw-border);border-radius:999px;box-shadow:var(--cw-shadow)}.cw-toolbar-label{font-size:13px;color:var(--cw-text-muted)}.cw-toolbar-toggle{border-radius:999px}.cw-toolbar-toggle--on{background:var(--cw-accent);color:#fff;border-color:var(--cw-accent)}.cw-toolbar-toggle--on:hover{background:var(--cw-accent-hover);border-color:var(--cw-accent-hover)}.cw-modal-backdrop{position:fixed;inset:0;pointer-events:auto;background:#0f172a59;display:flex;align-items:center;justify-content:center;z-index:2}.cw-modal{background:var(--cw-bg);border-radius:var(--cw-radius);box-shadow:var(--cw-shadow);width:360px;max-width:calc(100vw - 32px);padding:20px;display:flex;flex-direction:column;gap:14px}.cw-modal-title{font-size:16px;font-weight:600;margin:0}.cw-modal-subtitle{margin:0;font-size:13px;color:var(--cw-text-muted)}.cw-field{display:flex;flex-direction:column;gap:4px}.cw-field-label{font-size:12px;color:var(--cw-text-muted)}.cw-input{padding:8px 10px;border:1px solid var(--cw-border);border-radius:6px;font:inherit;color:inherit;background:var(--cw-bg);outline:none}.cw-input:focus{border-color:var(--cw-accent);box-shadow:0 0 0 3px #2f6df626}body.cw-mode-on,body.cw-mode-on *{cursor:crosshair!important}body.cw-mode-on #__comment-widget-root,body.cw-mode-on #__comment-widget-root *{cursor:auto!important}body.cw-mode-on #__comment-widget-root .cw-btn,body.cw-mode-on #__comment-widget-root .cw-pin{cursor:pointer!important}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var La = Object.defineProperty;
var Ua = (t, e, r) => e in t ? La(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var me = (t, e, r) => Ua(t, typeof e != "symbol" ? e + "" : e, r);
/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Rn(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const se = {}, Yt = [], xt = () => {
}, ho = () => !1, Ss = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ks = (t) => t.startsWith("onUpdate:"), He = Object.assign, fo = (t, e) => {
  const r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}, Da = Object.prototype.hasOwnProperty, G = (t, e) => Da.call(t, e), K = Array.isArray, Xt = (t) => Mr(t) === "[object Map]", po = (t) => Mr(t) === "[object Set]", Qn = (t) => Mr(t) === "[object Date]", Y = (t) => typeof t == "function", ce = (t) => typeof t == "string", et = (t) => typeof t == "symbol", ne = (t) => t !== null && typeof t == "object", go = (t) => (ne(t) || Y(t)) && Y(t.then) && Y(t.catch), mo = Object.prototype.toString, Mr = (t) => mo.call(t), Ba = (t) => Mr(t).slice(8, -1), yo = (t) => Mr(t) === "[object Object]", On = (t) => ce(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, vr = /* @__PURE__ */ Rn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Es = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((r) => e[r] || (e[r] = t(r)));
}, Ma = /-\w/g, De = Es(
  (t) => t.replace(Ma, (e) => e.slice(1).toUpperCase())
), Ha = /\B([A-Z])/g, St = Es(
  (t) => t.replace(Ha, "-$1").toLowerCase()
), vo = Es((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ms = Es(
  (t) => t ? `on${vo(t)}` : ""
), Qe = (t, e) => !Object.is(t, e), ns = (t, ...e) => {
  for (let r = 0; r < t.length; r++)
    t[r](...e);
}, wo = (t, e, r, s = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: r
  });
}, Cn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Zn;
const Ts = () => Zn || (Zn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nr(t) {
  if (K(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const s = t[r], n = ce(s) ? Wa(s) : nr(s);
      if (n)
        for (const i in n)
          e[i] = n[i];
    }
    return e;
  } else if (ce(t) || ne(t))
    return t;
}
const Fa = /;(?![^(]*\))/g, qa = /:([^]+)/, Ka = /\/\*[^]*?\*\//g;
function Wa(t) {
  const e = {};
  return t.replace(Ka, "").split(Fa).forEach((r) => {
    if (r) {
      const s = r.split(qa);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function jt(t) {
  let e = "";
  if (ce(t))
    e = t;
  else if (K(t))
    for (let r = 0; r < t.length; r++) {
      const s = jt(t[r]);
      s && (e += s + " ");
    }
  else if (ne(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
const Va = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", za = /* @__PURE__ */ Rn(Va);
function bo(t) {
  return !!t || t === "";
}
function Ja(t, e) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let s = 0; r && s < t.length; s++)
    r = xn(t[s], e[s]);
  return r;
}
function xn(t, e) {
  if (t === e) return !0;
  let r = Qn(t), s = Qn(e);
  if (r || s)
    return r && s ? t.getTime() === e.getTime() : !1;
  if (r = et(t), s = et(e), r || s)
    return t === e;
  if (r = K(t), s = K(e), r || s)
    return r && s ? Ja(t, e) : !1;
  if (r = ne(t), s = ne(e), r || s) {
    if (!r || !s)
      return !1;
    const n = Object.keys(t).length, i = Object.keys(e).length;
    if (n !== i)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !xn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const _o = (t) => !!(t && t.__v_isRef === !0), Se = (t) => ce(t) ? t : t == null ? "" : K(t) || ne(t) && (t.toString === mo || !Y(t.toString)) ? _o(t) ? Se(t.value) : JSON.stringify(t, So, 2) : String(t), So = (t, e) => _o(e) ? So(t, e.value) : Xt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (r, [s, n], i) => (r[Hs(s, i) + " =>"] = n, r),
    {}
  )
} : po(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((r) => Hs(r))
} : et(e) ? Hs(e) : ne(e) && !K(e) && !yo(e) ? String(e) : e, Hs = (t, e = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    et(t) ? `Symbol(${(r = t.description) != null ? r : e})` : t
  );
};
/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pe;
class Ga {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && pe && (pe.active ? (this.parent = pe, this.index = (pe.scopes || (pe.scopes = [])).push(
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
      const r = pe;
      try {
        return pe = this, e();
      } finally {
        pe = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (pe === this)
        pe = this.prevScope;
      else {
        let e = pe;
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
      let r, s;
      for (r = 0, s = this.effects.length; r < s; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, s = this.cleanups.length; r < s; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, s = this.scopes.length; r < s; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ya() {
  return pe;
}
let Z;
const Fs = /* @__PURE__ */ new WeakSet();
class ko {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && (pe.active ? pe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fs.has(this) && (Fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ei(this), Ao(this);
    const e = Z, r = Be;
    Z = this, Be = !0;
    try {
      return this.fn();
    } finally {
      Ro(this), Z = e, Be = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        jn(e);
      this.deps = this.depsTail = void 0, ei(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    sn(this) && this.run();
  }
  get dirty() {
    return sn(this);
  }
}
let Eo = 0, wr, br;
function To(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = br, br = t;
    return;
  }
  t.next = wr, wr = t;
}
function Pn() {
  Eo++;
}
function In() {
  if (--Eo > 0)
    return;
  if (br) {
    let e = br;
    for (br = void 0; e; ) {
      const r = e.next;
      e.next = void 0, e.flags &= -9, e = r;
    }
  }
  let t;
  for (; wr; ) {
    let e = wr;
    for (wr = void 0; e; ) {
      const r = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (s) {
          t || (t = s);
        }
      e = r;
    }
  }
  if (t) throw t;
}
function Ao(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Ro(t) {
  let e, r = t.depsTail, s = r;
  for (; s; ) {
    const n = s.prevDep;
    s.version === -1 ? (s === r && (r = n), jn(s), Xa(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = n;
  }
  t.deps = e, t.depsTail = r;
}
function sn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Oo(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Oo(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Or) || (t.globalVersion = Or, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !sn(t))))
    return;
  t.flags |= 2;
  const e = t.dep, r = Z, s = Be;
  Z = t, Be = !0;
  try {
    Ao(t);
    const n = t.fn(t._value);
    (e.version === 0 || Qe(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    Z = r, Be = s, Ro(t), t.flags &= -3;
  }
}
function jn(t, e = !1) {
  const { dep: r, prevSub: s, nextSub: n } = t;
  if (s && (s.nextSub = n, t.prevSub = void 0), n && (n.prevSub = s, t.nextSub = void 0), r.subs === t && (r.subs = s, !s && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      jn(i, !0);
  }
  !e && !--r.sc && r.map && r.map.delete(r.key);
}
function Xa(t) {
  const { prevDep: e, nextDep: r } = t;
  e && (e.nextDep = r, t.prevDep = void 0), r && (r.prevDep = e, t.nextDep = void 0);
}
let Be = !0;
const Co = [];
function vt() {
  Co.push(Be), Be = !1;
}
function wt() {
  const t = Co.pop();
  Be = t === void 0 ? !0 : t;
}
function ei(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const r = Z;
    Z = void 0;
    try {
      e();
    } finally {
      Z = r;
    }
  }
}
let Or = 0;
class Qa {
  constructor(e, r) {
    this.sub = e, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $n {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Z || !Be || Z === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Z)
      r = this.activeLink = new Qa(Z, this), Z.deps ? (r.prevDep = Z.depsTail, Z.depsTail.nextDep = r, Z.depsTail = r) : Z.deps = Z.depsTail = r, xo(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const s = r.nextDep;
      s.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = s), r.prevDep = Z.depsTail, r.nextDep = void 0, Z.depsTail.nextDep = r, Z.depsTail = r, Z.deps === r && (Z.deps = s);
    }
    return r;
  }
  trigger(e) {
    this.version++, Or++, this.notify(e);
  }
  notify(e) {
    Pn();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      In();
    }
  }
}
function xo(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let s = e.deps; s; s = s.nextDep)
        xo(s);
    }
    const r = t.dep.subs;
    r !== t && (t.prevSub = r, r && (r.nextSub = t)), t.dep.subs = t;
  }
}
const nn = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ Symbol(
  ""
), on = /* @__PURE__ */ Symbol(
  ""
), Cr = /* @__PURE__ */ Symbol(
  ""
);
function ge(t, e, r) {
  if (Be && Z) {
    let s = nn.get(t);
    s || nn.set(t, s = /* @__PURE__ */ new Map());
    let n = s.get(r);
    n || (s.set(r, n = new $n()), n.map = s, n.key = r), n.track();
  }
}
function at(t, e, r, s, n, i) {
  const o = nn.get(t);
  if (!o) {
    Or++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Pn(), e === "clear")
    o.forEach(a);
  else {
    const l = K(t), c = l && On(r);
    if (l && r === "length") {
      const u = Number(s);
      o.forEach((h, f) => {
        (f === "length" || f === Cr || !et(f) && f >= u) && a(h);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && a(o.get(r)), c && a(o.get(Cr)), e) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(Pt)), Xt(t) && a(o.get(on)));
          break;
        case "delete":
          l || (a(o.get(Pt)), Xt(t) && a(o.get(on)));
          break;
        case "set":
          Xt(t) && a(o.get(Pt));
          break;
      }
  }
  In();
}
function Ut(t) {
  const e = /* @__PURE__ */ z(t);
  return e === t ? e : (ge(e, "iterate", Cr), /* @__PURE__ */ xe(t) ? e : e.map(Me));
}
function As(t) {
  return ge(t = /* @__PURE__ */ z(t), "iterate", Cr), t;
}
function Ge(t, e) {
  return /* @__PURE__ */ ut(t) ? tr(/* @__PURE__ */ It(t) ? Me(e) : e) : Me(e);
}
const Za = {
  __proto__: null,
  [Symbol.iterator]() {
    return qs(this, Symbol.iterator, (t) => Ge(this, t));
  },
  concat(...t) {
    return Ut(this).concat(
      ...t.map((e) => K(e) ? Ut(e) : e)
    );
  },
  entries() {
    return qs(this, "entries", (t) => (t[1] = Ge(this, t[1]), t));
  },
  every(t, e) {
    return tt(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return tt(
      this,
      "filter",
      t,
      e,
      (r) => r.map((s) => Ge(this, s)),
      arguments
    );
  },
  find(t, e) {
    return tt(
      this,
      "find",
      t,
      e,
      (r) => Ge(this, r),
      arguments
    );
  },
  findIndex(t, e) {
    return tt(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return tt(
      this,
      "findLast",
      t,
      e,
      (r) => Ge(this, r),
      arguments
    );
  },
  findLastIndex(t, e) {
    return tt(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return tt(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ks(this, "includes", t);
  },
  indexOf(...t) {
    return Ks(this, "indexOf", t);
  },
  join(t) {
    return Ut(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Ks(this, "lastIndexOf", t);
  },
  map(t, e) {
    return tt(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return hr(this, "pop");
  },
  push(...t) {
    return hr(this, "push", t);
  },
  reduce(t, ...e) {
    return ti(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ti(this, "reduceRight", t, e);
  },
  shift() {
    return hr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return tt(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return hr(this, "splice", t);
  },
  toReversed() {
    return Ut(this).toReversed();
  },
  toSorted(t) {
    return Ut(this).toSorted(t);
  },
  toSpliced(...t) {
    return Ut(this).toSpliced(...t);
  },
  unshift(...t) {
    return hr(this, "unshift", t);
  },
  values() {
    return qs(this, "values", (t) => Ge(this, t));
  }
};
function qs(t, e, r) {
  const s = As(t), n = s[e]();
  return s !== t && !/* @__PURE__ */ xe(t) && (n._next = n.next, n.next = () => {
    const i = n._next();
    return i.done || (i.value = r(i.value)), i;
  }), n;
}
const el = Array.prototype;
function tt(t, e, r, s, n, i) {
  const o = As(t), a = o !== t && !/* @__PURE__ */ xe(t), l = o[e];
  if (l !== el[e]) {
    const h = l.apply(t, i);
    return a ? Me(h) : h;
  }
  let c = r;
  o !== t && (a ? c = function(h, f) {
    return r.call(this, Ge(t, h), f, t);
  } : r.length > 2 && (c = function(h, f) {
    return r.call(this, h, f, t);
  }));
  const u = l.call(o, c, s);
  return a && n ? n(u) : u;
}
function ti(t, e, r, s) {
  const n = As(t), i = n !== t && !/* @__PURE__ */ xe(t);
  let o = r, a = !1;
  n !== t && (i ? (a = s.length === 0, o = function(c, u, h) {
    return a && (a = !1, c = Ge(t, c)), r.call(this, c, Ge(t, u), h, t);
  }) : r.length > 3 && (o = function(c, u, h) {
    return r.call(this, c, u, h, t);
  }));
  const l = n[e](o, ...s);
  return a ? Ge(t, l) : l;
}
function Ks(t, e, r) {
  const s = /* @__PURE__ */ z(t);
  ge(s, "iterate", Cr);
  const n = s[e](...r);
  return (n === -1 || n === !1) && /* @__PURE__ */ Un(r[0]) ? (r[0] = /* @__PURE__ */ z(r[0]), s[e](...r)) : n;
}
function hr(t, e, r = []) {
  vt(), Pn();
  const s = (/* @__PURE__ */ z(t))[e].apply(t, r);
  return In(), wt(), s;
}
const tl = /* @__PURE__ */ Rn("__proto__,__v_isRef,__isVue"), Po = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(et)
);
function rl(t) {
  et(t) || (t = String(t));
  const e = /* @__PURE__ */ z(this);
  return ge(e, "has", t), e.hasOwnProperty(t);
}
class Io {
  constructor(e = !1, r = !1) {
    this._isReadonly = e, this._isShallow = r;
  }
  get(e, r, s) {
    if (r === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !n;
    if (r === "__v_isReadonly")
      return n;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return s === (n ? i ? dl : Lo : i ? No : $o).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    const o = K(e);
    if (!n) {
      let l;
      if (o && (l = Za[r]))
        return l;
      if (r === "hasOwnProperty")
        return rl;
    }
    const a = Reflect.get(
      e,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ we(e) ? e : s
    );
    if ((et(r) ? Po.has(r) : tl(r)) || (n || ge(e, "get", r), i))
      return a;
    if (/* @__PURE__ */ we(a)) {
      const l = o && On(r) ? a : a.value;
      return n && ne(l) ? /* @__PURE__ */ ln(l) : l;
    }
    return ne(a) ? n ? /* @__PURE__ */ ln(a) : /* @__PURE__ */ xr(a) : a;
  }
}
class jo extends Io {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, r, s, n) {
    let i = e[r];
    const o = K(e) && On(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ ut(i);
      if (!/* @__PURE__ */ xe(s) && !/* @__PURE__ */ ut(s) && (i = /* @__PURE__ */ z(i), s = /* @__PURE__ */ z(s)), !o && /* @__PURE__ */ we(i) && !/* @__PURE__ */ we(s))
        return c || (i.value = s), !0;
    }
    const a = o ? Number(r) < e.length : G(e, r), l = Reflect.set(
      e,
      r,
      s,
      /* @__PURE__ */ we(e) ? e : n
    );
    return e === /* @__PURE__ */ z(n) && (a ? Qe(s, i) && at(e, "set", r, s) : at(e, "add", r, s)), l;
  }
  deleteProperty(e, r) {
    const s = G(e, r);
    e[r];
    const n = Reflect.deleteProperty(e, r);
    return n && s && at(e, "delete", r, void 0), n;
  }
  has(e, r) {
    const s = Reflect.has(e, r);
    return (!et(r) || !Po.has(r)) && ge(e, "has", r), s;
  }
  ownKeys(e) {
    return ge(
      e,
      "iterate",
      K(e) ? "length" : Pt
    ), Reflect.ownKeys(e);
  }
}
class sl extends Io {
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
const nl = /* @__PURE__ */ new jo(), il = /* @__PURE__ */ new sl(), ol = /* @__PURE__ */ new jo(!0);
const an = (t) => t, Vr = (t) => Reflect.getPrototypeOf(t);
function al(t, e, r) {
  return function(...s) {
    const n = this.__v_raw, i = /* @__PURE__ */ z(n), o = Xt(i), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = n[t](...s), u = r ? an : e ? tr : Me;
    return !e && ge(
      i,
      "iterate",
      l ? on : Pt
    ), He(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: f } = c.next();
          return f ? { value: h, done: f } : {
            value: a ? [u(h[0]), u(h[1])] : u(h),
            done: f
          };
        }
      }
    );
  };
}
function zr(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function ll(t, e) {
  const r = {
    get(n) {
      const i = this.__v_raw, o = /* @__PURE__ */ z(i), a = /* @__PURE__ */ z(n);
      t || (Qe(n, a) && ge(o, "get", n), ge(o, "get", a));
      const { has: l } = Vr(o), c = e ? an : t ? tr : Me;
      if (l.call(o, n))
        return c(i.get(n));
      if (l.call(o, a))
        return c(i.get(a));
      i !== o && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && ge(/* @__PURE__ */ z(n), "iterate", Pt), n.size;
    },
    has(n) {
      const i = this.__v_raw, o = /* @__PURE__ */ z(i), a = /* @__PURE__ */ z(n);
      return t || (Qe(n, a) && ge(o, "has", n), ge(o, "has", a)), n === a ? i.has(n) : i.has(n) || i.has(a);
    },
    forEach(n, i) {
      const o = this, a = o.__v_raw, l = /* @__PURE__ */ z(a), c = e ? an : t ? tr : Me;
      return !t && ge(l, "iterate", Pt), a.forEach((u, h) => n.call(i, c(u), c(h), o));
    }
  };
  return He(
    r,
    t ? {
      add: zr("add"),
      set: zr("set"),
      delete: zr("delete"),
      clear: zr("clear")
    } : {
      add(n) {
        const i = /* @__PURE__ */ z(this), o = Vr(i), a = /* @__PURE__ */ z(n), l = !e && !/* @__PURE__ */ xe(n) && !/* @__PURE__ */ ut(n) ? a : n;
        return o.has.call(i, l) || Qe(n, l) && o.has.call(i, n) || Qe(a, l) && o.has.call(i, a) || (i.add(l), at(i, "add", l, l)), this;
      },
      set(n, i) {
        !e && !/* @__PURE__ */ xe(i) && !/* @__PURE__ */ ut(i) && (i = /* @__PURE__ */ z(i));
        const o = /* @__PURE__ */ z(this), { has: a, get: l } = Vr(o);
        let c = a.call(o, n);
        c || (n = /* @__PURE__ */ z(n), c = a.call(o, n));
        const u = l.call(o, n);
        return o.set(n, i), c ? Qe(i, u) && at(o, "set", n, i) : at(o, "add", n, i), this;
      },
      delete(n) {
        const i = /* @__PURE__ */ z(this), { has: o, get: a } = Vr(i);
        let l = o.call(i, n);
        l || (n = /* @__PURE__ */ z(n), l = o.call(i, n)), a && a.call(i, n);
        const c = i.delete(n);
        return l && at(i, "delete", n, void 0), c;
      },
      clear() {
        const n = /* @__PURE__ */ z(this), i = n.size !== 0, o = n.clear();
        return i && at(
          n,
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
  ].forEach((n) => {
    r[n] = al(n, t, e);
  }), r;
}
function Nn(t, e) {
  const r = ll(t, e);
  return (s, n, i) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? s : Reflect.get(
    G(r, n) && n in s ? r : s,
    n,
    i
  );
}
const cl = {
  get: /* @__PURE__ */ Nn(!1, !1)
}, ul = {
  get: /* @__PURE__ */ Nn(!1, !0)
}, hl = {
  get: /* @__PURE__ */ Nn(!0, !1)
};
const $o = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap();
function fl(t) {
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
function pl(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : fl(Ba(t));
}
// @__NO_SIDE_EFFECTS__
function xr(t) {
  return /* @__PURE__ */ ut(t) ? t : Ln(
    t,
    !1,
    nl,
    cl,
    $o
  );
}
// @__NO_SIDE_EFFECTS__
function gl(t) {
  return Ln(
    t,
    !1,
    ol,
    ul,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ln(t) {
  return Ln(
    t,
    !0,
    il,
    hl,
    Lo
  );
}
function Ln(t, e, r, s, n) {
  if (!ne(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = pl(t);
  if (i === 0)
    return t;
  const o = n.get(t);
  if (o)
    return o;
  const a = new Proxy(
    t,
    i === 2 ? s : r
  );
  return n.set(t, a), a;
}
// @__NO_SIDE_EFFECTS__
function It(t) {
  return /* @__PURE__ */ ut(t) ? /* @__PURE__ */ It(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xe(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Un(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function z(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ z(e) : t;
}
function ml(t) {
  return !G(t, "__v_skip") && Object.isExtensible(t) && wo(t, "__v_skip", !0), t;
}
const Me = (t) => ne(t) ? /* @__PURE__ */ xr(t) : t, tr = (t) => ne(t) ? /* @__PURE__ */ ln(t) : t;
// @__NO_SIDE_EFFECTS__
function we(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(t) {
  return Uo(t, !1);
}
// @__NO_SIDE_EFFECTS__
function ri(t) {
  return Uo(t, !0);
}
function Uo(t, e) {
  return /* @__PURE__ */ we(t) ? t : new yl(t, e);
}
class yl {
  constructor(e, r) {
    this.dep = new $n(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? e : /* @__PURE__ */ z(e), this._value = r ? e : Me(e), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const r = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ xe(e) || /* @__PURE__ */ ut(e);
    e = s ? e : /* @__PURE__ */ z(e), Qe(e, r) && (this._rawValue = e, this._value = s ? e : Me(e), this.dep.trigger());
  }
}
function pr(t) {
  return /* @__PURE__ */ we(t) ? t.value : t;
}
const vl = {
  get: (t, e, r) => e === "__v_raw" ? t : pr(Reflect.get(t, e, r)),
  set: (t, e, r, s) => {
    const n = t[e];
    return /* @__PURE__ */ we(n) && !/* @__PURE__ */ we(r) ? (n.value = r, !0) : Reflect.set(t, e, r, s);
  }
};
function Do(t) {
  return /* @__PURE__ */ It(t) ? t : new Proxy(t, vl);
}
class wl {
  constructor(e, r, s) {
    this.fn = e, this.setter = r, this._value = void 0, this.dep = new $n(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Or - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return To(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Oo(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function bl(t, e, r = !1) {
  let s, n;
  return Y(t) ? s = t : (s = t.get, n = t.set), new wl(s, n, r);
}
const Jr = {}, cs = /* @__PURE__ */ new WeakMap();
let Rt;
function _l(t, e = !1, r = Rt) {
  if (r) {
    let s = cs.get(r);
    s || cs.set(r, s = []), s.push(t);
  }
}
function Sl(t, e, r = se) {
  const { immediate: s, deep: n, once: i, scheduler: o, augmentJob: a, call: l } = r, c = (b) => n ? b : /* @__PURE__ */ xe(b) || n === !1 || n === 0 ? lt(b, 1) : lt(b);
  let u, h, f, p, y = !1, v = !1;
  if (/* @__PURE__ */ we(t) ? (h = () => t.value, y = /* @__PURE__ */ xe(t)) : /* @__PURE__ */ It(t) ? (h = () => c(t), y = !0) : K(t) ? (v = !0, y = t.some((b) => /* @__PURE__ */ It(b) || /* @__PURE__ */ xe(b)), h = () => t.map((b) => {
    if (/* @__PURE__ */ we(b))
      return b.value;
    if (/* @__PURE__ */ It(b))
      return c(b);
    if (Y(b))
      return l ? l(b, 2) : b();
  })) : Y(t) ? e ? h = l ? () => l(t, 2) : t : h = () => {
    if (f) {
      vt();
      try {
        f();
      } finally {
        wt();
      }
    }
    const b = Rt;
    Rt = u;
    try {
      return l ? l(t, 3, [p]) : t(p);
    } finally {
      Rt = b;
    }
  } : h = xt, e && n) {
    const b = h, I = n === !0 ? 1 / 0 : n;
    h = () => lt(b(), I);
  }
  const T = Ya(), _ = () => {
    u.stop(), T && T.active && fo(T.effects, u);
  };
  if (i && e) {
    const b = e;
    e = (...I) => {
      b(...I), _();
    };
  }
  let R = v ? new Array(t.length).fill(Jr) : Jr;
  const m = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (e) {
        const I = u.run();
        if (n || y || (v ? I.some(($, B) => Qe($, R[B])) : Qe(I, R))) {
          f && f();
          const $ = Rt;
          Rt = u;
          try {
            const B = [
              I,
              // pass undefined as the old value when it's changed for the first time
              R === Jr ? void 0 : v && R[0] === Jr ? [] : R,
              p
            ];
            R = I, l ? l(e, 3, B) : (
              // @ts-expect-error
              e(...B)
            );
          } finally {
            Rt = $;
          }
        }
      } else
        u.run();
  };
  return a && a(m), u = new ko(h), u.scheduler = o ? () => o(m, !1) : m, p = (b) => _l(b, !1, u), f = u.onStop = () => {
    const b = cs.get(u);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const I of b) I();
      cs.delete(u);
    }
  }, e ? s ? m(!0) : R = u.run() : o ? o(m.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function lt(t, e = 1 / 0, r) {
  if (e <= 0 || !ne(t) || t.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(t) || 0) >= e))
    return t;
  if (r.set(t, e), e--, /* @__PURE__ */ we(t))
    lt(t.value, e, r);
  else if (K(t))
    for (let s = 0; s < t.length; s++)
      lt(t[s], e, r);
  else if (po(t) || Xt(t))
    t.forEach((s) => {
      lt(s, e, r);
    });
  else if (yo(t)) {
    for (const s in t)
      lt(t[s], e, r);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && lt(t[s], e, r);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hr(t, e, r, s) {
  try {
    return s ? t(...s) : t();
  } catch (n) {
    Rs(n, e, r);
  }
}
function ht(t, e, r, s) {
  if (Y(t)) {
    const n = Hr(t, e, r, s);
    return n && go(n) && n.catch((i) => {
      Rs(i, e, r);
    }), n;
  }
  if (K(t)) {
    const n = [];
    for (let i = 0; i < t.length; i++)
      n.push(ht(t[i], e, r, s));
    return n;
  }
}
function Rs(t, e, r, s = !0) {
  const n = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || se;
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
      vt(), Hr(i, null, 10, [
        t,
        l,
        c
      ]), wt();
      return;
    }
  }
  kl(t, r, n, s, o);
}
function kl(t, e, r, s = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const ve = [];
let ze = -1;
const Qt = [];
let gt = null, qt = 0;
const Bo = /* @__PURE__ */ Promise.resolve();
let us = null;
function El(t) {
  const e = us || Bo;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Tl(t) {
  let e = ze + 1, r = ve.length;
  for (; e < r; ) {
    const s = e + r >>> 1, n = ve[s], i = Pr(n);
    i < t || i === t && n.flags & 2 ? e = s + 1 : r = s;
  }
  return e;
}
function Dn(t) {
  if (!(t.flags & 1)) {
    const e = Pr(t), r = ve[ve.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Pr(r) ? ve.push(t) : ve.splice(Tl(e), 0, t), t.flags |= 1, Mo();
  }
}
function Mo() {
  us || (us = Bo.then(Fo));
}
function Al(t) {
  K(t) ? Qt.push(...t) : gt && t.id === -1 ? gt.splice(qt + 1, 0, t) : t.flags & 1 || (Qt.push(t), t.flags |= 1), Mo();
}
function si(t, e, r = ze + 1) {
  for (; r < ve.length; r++) {
    const s = ve[r];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid)
        continue;
      ve.splice(r, 1), r--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ho(t) {
  if (Qt.length) {
    const e = [...new Set(Qt)].sort(
      (r, s) => Pr(r) - Pr(s)
    );
    if (Qt.length = 0, gt) {
      gt.push(...e);
      return;
    }
    for (gt = e, qt = 0; qt < gt.length; qt++) {
      const r = gt[qt];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    gt = null, qt = 0;
  }
}
const Pr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Fo(t) {
  try {
    for (ze = 0; ze < ve.length; ze++) {
      const e = ve[ze];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Hr(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; ze < ve.length; ze++) {
      const e = ve[ze];
      e && (e.flags &= -2);
    }
    ze = -1, ve.length = 0, Ho(), us = null, (ve.length || Qt.length) && Fo();
  }
}
let Ce = null, qo = null;
function hs(t) {
  const e = Ce;
  return Ce = t, qo = t && t.type.__scopeId || null, e;
}
function Rl(t, e = Ce, r) {
  if (!e || t._n)
    return t;
  const s = (...n) => {
    s._d && ui(-1);
    const i = hs(e);
    let o;
    try {
      o = t(...n);
    } finally {
      hs(i), s._d && ui(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ds(t, e) {
  if (Ce === null)
    return t;
  const r = xs(Ce), s = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [i, o, a, l = se] = e[n];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && lt(o), s.push({
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
function kt(t, e, r, s) {
  const n = t.dirs, i = e && e.dirs;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[s];
    l && (vt(), ht(l, r, 8, [
      t.el,
      a,
      t,
      e
    ]), wt());
  }
}
function Ol(t, e, r = !1) {
  const s = pc();
  if (s || Zt) {
    let n = Zt ? Zt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return r && Y(e) ? e.call(s && s.proxy) : e;
  }
}
const Cl = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => Ol(Cl);
function Bn(t, e, r) {
  return Pl(t, e, r);
}
function Pl(t, e, r = se) {
  const { immediate: s, deep: n, flush: i, once: o } = r, a = He({}, r), l = e && s || !e && i !== "post";
  let c;
  if (jr) {
    if (i === "sync") {
      const p = xl();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = xt, p.resume = xt, p.pause = xt, p;
    }
  }
  const u = _t;
  a.call = (p, y, v) => ht(p, u, y, v);
  let h = !1;
  i === "post" ? a.scheduler = (p) => {
    _e(p, u && u.suspense);
  } : i !== "sync" && (h = !0, a.scheduler = (p, y) => {
    y ? p() : Dn(p);
  }), a.augmentJob = (p) => {
    e && (p.flags |= 4), h && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const f = Sl(t, e, a);
  return jr && (c ? c.push(f) : l && f()), f;
}
const Il = /* @__PURE__ */ Symbol("_vte"), jl = (t) => t.__isTeleport, $l = /* @__PURE__ */ Symbol("_leaveCb");
function Mn(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Mn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Fr(t, e) {
  return Y(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: t.name }, e, { setup: t })
  ) : t;
}
function Nl(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function ni(t, e) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(t, e)) && !r.configurable);
}
const fs = /* @__PURE__ */ new WeakMap();
function _r(t, e, r, s, n = !1) {
  if (K(t)) {
    t.forEach(
      (v, T) => _r(
        v,
        e && (K(e) ? e[T] : e),
        r,
        s,
        n
      )
    );
    return;
  }
  if (Sr(s) && !n) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && _r(t, e, r, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? xs(s.component) : s.el, o = n ? null : i, { i: a, r: l } = t, c = e && e.r, u = a.refs === se ? a.refs = {} : a.refs, h = a.setupState, f = /* @__PURE__ */ z(h), p = h === se ? ho : (v) => ni(u, v) ? !1 : G(f, v), y = (v, T) => !(T && ni(u, T));
  if (c != null && c !== l) {
    if (ii(e), ce(c))
      u[c] = null, p(c) && (h[c] = null);
    else if (/* @__PURE__ */ we(c)) {
      const v = e;
      y(c, v.k) && (c.value = null), v.k && (u[v.k] = null);
    }
  }
  if (Y(l))
    Hr(l, a, 12, [o, u]);
  else {
    const v = ce(l), T = /* @__PURE__ */ we(l);
    if (v || T) {
      const _ = () => {
        if (t.f) {
          const R = v ? p(l) ? h[l] : u[l] : y() || !t.k ? l.value : u[t.k];
          if (n)
            K(R) && fo(R, i);
          else if (K(R))
            R.includes(i) || R.push(i);
          else if (v)
            u[l] = [i], p(l) && (h[l] = u[l]);
          else {
            const m = [i];
            y(l, t.k) && (l.value = m), t.k && (u[t.k] = m);
          }
        } else v ? (u[l] = o, p(l) && (h[l] = o)) : T && (y(l, t.k) && (l.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const R = () => {
          _(), fs.delete(t);
        };
        R.id = -1, fs.set(t, R), _e(R, r);
      } else
        ii(t), _();
    }
  }
}
function ii(t) {
  const e = fs.get(t);
  e && (e.flags |= 8, fs.delete(t));
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const Sr = (t) => !!t.type.__asyncLoader, Ll = (t) => t.type.__isKeepAlive;
function Ul(t, e, r = _t, s = !1) {
  if (r) {
    const n = r[t] || (r[t] = []), i = e.__weh || (e.__weh = (...o) => {
      vt();
      const a = Wn(r), l = ht(e, r, t, o);
      return a(), wt(), l;
    });
    return s ? n.unshift(i) : n.push(i), i;
  }
}
const Ko = (t) => (e, r = _t) => {
  (!jr || t === "sp") && Ul(t, (...s) => e(...s), r);
}, Wo = Ko("m"), Hn = Ko(
  "bum"
), Dl = /* @__PURE__ */ Symbol.for("v-ndc");
function Vo(t, e, r, s) {
  let n;
  const i = r, o = K(t);
  if (o || ce(t)) {
    const a = o && /* @__PURE__ */ It(t);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ xe(t), c = /* @__PURE__ */ ut(t), t = As(t)), n = new Array(t.length);
    for (let u = 0, h = t.length; u < h; u++)
      n[u] = e(
        l ? c ? tr(Me(t[u])) : Me(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let a = 0; a < t; a++)
      n[a] = e(a + 1, a, void 0, i);
  } else if (ne(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (a, l) => e(a, l, void 0, i)
      );
    else {
      const a = Object.keys(t);
      n = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        n[l] = e(t[u], u, l, i);
      }
    }
  else
    n = [];
  return n;
}
const cn = (t) => t ? ca(t) ? xs(t) : cn(t.parent) : null, kr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => cn(t.parent),
    $root: (t) => cn(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => t.type,
    $forceUpdate: (t) => t.f || (t.f = () => {
      Dn(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = El.bind(t.proxy)),
    $watch: (t) => xt
  })
), Ws = (t, e) => t !== se && !t.__isScriptSetup && G(t, e), Bl = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: r, setupState: s, data: n, props: i, accessCache: o, type: a, appContext: l } = t;
    if (e[0] !== "$") {
      const f = o[e];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[e];
          case 2:
            return n[e];
          case 4:
            return r[e];
          case 3:
            return i[e];
        }
      else {
        if (Ws(s, e))
          return o[e] = 1, s[e];
        if (G(i, e))
          return o[e] = 3, i[e];
        if (r !== se && G(r, e))
          return o[e] = 4, r[e];
        o[e] = 0;
      }
    }
    const c = kr[e];
    let u, h;
    if (c)
      return e === "$attrs" && ge(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[e])
    )
      return u;
    if (r !== se && G(r, e))
      return o[e] = 4, r[e];
    if (
      // global properties
      h = l.config.globalProperties, G(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, r) {
    const { data: s, setupState: n, ctx: i } = t;
    return Ws(n, e) ? (n[e] = r, !0) : G(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = r, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: r, ctx: s, appContext: n, props: i, type: o }
  }, a) {
    let l;
    return !!(r[a] || Ws(e, a) || G(i, a) || G(s, a) || G(kr, a) || G(n.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
  },
  defineProperty(t, e, r) {
    return r.get != null ? t._.accessCache[e] = 0 : G(r, "value") && this.set(t, e, r.value, null), Reflect.defineProperty(t, e, r);
  }
};
function zo() {
  return {
    app: null,
    config: {
      isNativeTag: ho,
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
let Ml = 0;
function Hl(t, e) {
  return function(s, n = null) {
    Y(s) || (s = He({}, s)), n != null && !ne(n) && (n = null);
    const i = zo(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = i.app = {
      _uid: Ml++,
      _component: s,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: bc,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(c, ...h)) : Y(u) && (o.add(u), u(c, ...h))), c;
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
      mount(u, h, f) {
        if (!l) {
          const p = c._ceVNode || Ze(s, n);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), t(p, u, f), l = !0, c._container = u, u.__vue_app__ = c, xs(p.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (ht(
          a,
          c._instance,
          16
        ), t(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, c;
      },
      runWithContext(u) {
        const h = Zt;
        Zt = c;
        try {
          return u();
        } finally {
          Zt = h;
        }
      }
    };
    return c;
  };
}
let Zt = null;
const Fl = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${De(e)}Modifiers`] || t[`${St(e)}Modifiers`];
function ql(t, e, ...r) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || se;
  let n = r;
  const i = e.startsWith("update:"), o = i && Fl(s, e.slice(7));
  o && (o.trim && (n = r.map((u) => ce(u) ? u.trim() : u)), o.number && (n = r.map(Cn)));
  let a, l = s[a = Ms(e)] || // also try camelCase event handler (#2249)
  s[a = Ms(De(e))];
  !l && i && (l = s[a = Ms(St(e))]), l && ht(
    l,
    t,
    6,
    n
  );
  const c = s[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, ht(
      c,
      t,
      6,
      n
    );
  }
}
function Kl(t, e, r = !1) {
  const s = e.emitsCache, n = s.get(t);
  if (n !== void 0)
    return n;
  const i = t.emits;
  let o = {};
  return i ? (K(i) ? i.forEach((a) => o[a] = null) : He(o, i), ne(t) && s.set(t, o), o) : (ne(t) && s.set(t, null), null);
}
function Os(t, e) {
  return !t || !Ss(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), G(t, e[0].toLowerCase() + e.slice(1)) || G(t, St(e)) || G(t, e));
}
function oi(t) {
  const {
    type: e,
    vnode: r,
    proxy: s,
    withProxy: n,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: h,
    data: f,
    setupState: p,
    ctx: y,
    inheritAttrs: v
  } = t, T = hs(t);
  let _, R;
  try {
    if (r.shapeFlag & 4) {
      const b = n || s, I = b;
      _ = Ye(
        c.call(
          I,
          b,
          u,
          h,
          p,
          f,
          y
        )
      ), R = a;
    } else {
      const b = e;
      _ = Ye(
        b.length > 1 ? b(
          h,
          { attrs: a, slots: o, emit: l }
        ) : b(
          h,
          null
        )
      ), R = e.props ? a : Wl(a);
    }
  } catch (b) {
    Er.length = 0, Rs(b, t, 1), _ = Ze(bt);
  }
  let m = _;
  if (R && v !== !1) {
    const b = Object.keys(R), { shapeFlag: I } = m;
    b.length && I & 7 && (i && b.some(ks) && (R = Vl(
      R,
      i
    )), m = rr(m, R, !1, !0));
  }
  return r.dirs && (m = rr(m, null, !1, !0), m.dirs = m.dirs ? m.dirs.concat(r.dirs) : r.dirs), r.transition && Mn(m, r.transition), _ = m, hs(T), _;
}
const Wl = (t) => {
  let e;
  for (const r in t)
    (r === "class" || r === "style" || Ss(r)) && ((e || (e = {}))[r] = t[r]);
  return e;
}, Vl = (t, e) => {
  const r = {};
  for (const s in t)
    (!ks(s) || !(s.slice(9) in e)) && (r[s] = t[s]);
  return r;
};
function zl(t, e, r) {
  const { props: s, children: n, component: i } = t, { props: o, children: a, patchFlag: l } = e, c = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? ai(s, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const f = u[h];
        if (Jo(o, s, f) && !Os(c, f))
          return !0;
      }
    }
  } else
    return (n || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? ai(s, o, c) : !0 : !!o;
  return !1;
}
function ai(t, e, r) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < s.length; n++) {
    const i = s[n];
    if (Jo(e, t, i) && !Os(r, i))
      return !0;
  }
  return !1;
}
function Jo(t, e, r) {
  const s = t[r], n = e[r];
  return r === "style" && ne(s) && ne(n) ? !xn(s, n) : s !== n;
}
function Jl({ vnode: t, parent: e, suspense: r }, s) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.suspense.vnode.el = n.el = s, t = n), n === t)
      (t = e.vnode).el = s, e = e.parent;
    else
      break;
  }
  r && r.activeBranch === t && (r.vnode.el = s);
}
const Go = {}, Yo = () => Object.create(Go), Xo = (t) => Object.getPrototypeOf(t) === Go;
function Gl(t, e, r, s = !1) {
  const n = {}, i = Yo();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Qo(t, e, n, i);
  for (const o in t.propsOptions[0])
    o in n || (n[o] = void 0);
  r ? t.props = s ? n : /* @__PURE__ */ gl(n) : t.type.props ? t.props = n : t.props = i, t.attrs = i;
}
function Yl(t, e, r, s) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, a = /* @__PURE__ */ z(n), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let f = u[h];
        if (Os(t.emitsOptions, f))
          continue;
        const p = e[f];
        if (l)
          if (G(i, f))
            p !== i[f] && (i[f] = p, c = !0);
          else {
            const y = De(f);
            n[y] = un(
              l,
              a,
              y,
              p,
              t,
              !1
            );
          }
        else
          p !== i[f] && (i[f] = p, c = !0);
      }
    }
  } else {
    Qo(t, e, n, i) && (c = !0);
    let u;
    for (const h in a)
      (!e || // for camelCase
      !G(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = St(h)) === h || !G(e, u))) && (l ? r && // for camelCase
      (r[h] !== void 0 || // for kebab-case
      r[u] !== void 0) && (n[h] = un(
        l,
        a,
        h,
        void 0,
        t,
        !0
      )) : delete n[h]);
    if (i !== a)
      for (const h in i)
        (!e || !G(e, h)) && (delete i[h], c = !0);
  }
  c && at(t.attrs, "set", "");
}
function Qo(t, e, r, s) {
  const [n, i] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (vr(l))
        continue;
      const c = e[l];
      let u;
      n && G(n, u = De(l)) ? !i || !i.includes(u) ? r[u] = c : (a || (a = {}))[u] = c : Os(t.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ z(r), c = a || se;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      r[h] = un(
        n,
        l,
        h,
        c[h],
        t,
        !G(c, h)
      );
    }
  }
  return o;
}
function un(t, e, r, s, n, i) {
  const o = t[r];
  if (o != null) {
    const a = G(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Y(l)) {
        const { propsDefaults: c } = n;
        if (r in c)
          s = c[r];
        else {
          const u = Wn(n);
          s = c[r] = l.call(
            null,
            e
          ), u();
        }
      } else
        s = l;
      n.ce && n.ce._setProp(r, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !a ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === St(r)) && (s = !0));
  }
  return s;
}
function Xl(t, e, r = !1) {
  const s = e.propsCache, n = s.get(t);
  if (n)
    return n;
  const i = t.props, o = {}, a = [];
  if (!i)
    return ne(t) && s.set(t, Yt), Yt;
  if (K(i))
    for (let c = 0; c < i.length; c++) {
      const u = De(i[c]);
      li(u) && (o[u] = se);
    }
  else if (i)
    for (const c in i) {
      const u = De(c);
      if (li(u)) {
        const h = i[c], f = o[u] = K(h) || Y(h) ? { type: h } : He({}, h), p = f.type;
        let y = !1, v = !0;
        if (K(p))
          for (let T = 0; T < p.length; ++T) {
            const _ = p[T], R = Y(_) && _.name;
            if (R === "Boolean") {
              y = !0;
              break;
            } else R === "String" && (v = !1);
          }
        else
          y = Y(p) && p.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = y, f[
          1
          /* shouldCastTrue */
        ] = v, (y || G(f, "default")) && a.push(u);
      }
    }
  const l = [o, a];
  return ne(t) && s.set(t, l), l;
}
function li(t) {
  return t[0] !== "$" && !vr(t);
}
const Fn = (t) => t === "_" || t === "_ctx" || t === "$stable", qn = (t) => K(t) ? t.map(Ye) : [Ye(t)], Ql = (t, e, r) => {
  if (e._n)
    return e;
  const s = Rl((...n) => qn(e(...n)), r);
  return s._c = !1, s;
}, Zo = (t, e, r) => {
  const s = t._ctx;
  for (const n in t) {
    if (Fn(n)) continue;
    const i = t[n];
    if (Y(i))
      e[n] = Ql(n, i, s);
    else if (i != null) {
      const o = qn(i);
      e[n] = () => o;
    }
  }
}, ea = (t, e) => {
  const r = qn(e);
  t.slots.default = () => r;
}, ta = (t, e, r) => {
  for (const s in e)
    (r || !Fn(s)) && (t[s] = e[s]);
}, Zl = (t, e, r) => {
  const s = t.slots = Yo();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (ta(s, e, r), r && wo(s, "_", n, !0)) : Zo(e, s);
  } else e && ea(t, e);
}, ec = (t, e, r) => {
  const { vnode: s, slots: n } = t;
  let i = !0, o = se;
  if (s.shapeFlag & 32) {
    const a = e._;
    a ? r && a === 1 ? i = !1 : ta(n, e, r) : (i = !e.$stable, Zo(e, n)), o = e;
  } else e && (ea(t, e), o = { default: 1 });
  if (i)
    for (const a in n)
      !Fn(a) && o[a] == null && delete n[a];
}, _e = ic;
function tc(t) {
  return rc(t);
}
function rc(t, e) {
  const r = Ts();
  r.__VUE__ = !0;
  const {
    insert: s,
    remove: n,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: h,
    nextSibling: f,
    setScopeId: p = xt,
    insertStaticContent: y
  } = t, v = (d, g, w, A = null, S = null, k = null, P = void 0, C = null, O = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !dr(d, g) && (A = Lt(d), Ie(d, S, k, !0), d = null), g.patchFlag === -2 && (O = !1, g.dynamicChildren = null);
    const { type: E, ref: U, shapeFlag: j } = g;
    switch (E) {
      case Cs:
        T(d, g, w, A);
        break;
      case bt:
        _(d, g, w, A);
        break;
      case zs:
        d == null && R(g, w, A, P);
        break;
      case Ne:
        or(
          d,
          g,
          w,
          A,
          S,
          k,
          P,
          C,
          O
        );
        break;
      default:
        j & 1 ? I(
          d,
          g,
          w,
          A,
          S,
          k,
          P,
          C,
          O
        ) : j & 6 ? Ns(
          d,
          g,
          w,
          A,
          S,
          k,
          P,
          C,
          O
        ) : (j & 64 || j & 128) && E.process(
          d,
          g,
          w,
          A,
          S,
          k,
          P,
          C,
          O,
          re
        );
    }
    U != null && S ? _r(U, d && d.ref, k, g || d, !g) : U == null && d && d.ref != null && _r(d.ref, null, k, d, !0);
  }, T = (d, g, w, A) => {
    if (d == null)
      s(
        g.el = a(g.children),
        w,
        A
      );
    else {
      const S = g.el = d.el;
      g.children !== d.children && c(S, g.children);
    }
  }, _ = (d, g, w, A) => {
    d == null ? s(
      g.el = l(g.children || ""),
      w,
      A
    ) : g.el = d.el;
  }, R = (d, g, w, A) => {
    [d.el, d.anchor] = y(
      d.children,
      g,
      w,
      A,
      d.el,
      d.anchor
    );
  }, m = ({ el: d, anchor: g }, w, A) => {
    let S;
    for (; d && d !== g; )
      S = f(d), s(d, w, A), d = S;
    s(g, w, A);
  }, b = ({ el: d, anchor: g }) => {
    let w;
    for (; d && d !== g; )
      w = f(d), n(d), d = w;
    n(g);
  }, I = (d, g, w, A, S, k, P, C, O) => {
    if (g.type === "svg" ? P = "svg" : g.type === "math" && (P = "mathml"), d == null)
      $(
        g,
        w,
        A,
        S,
        k,
        P,
        C,
        O
      );
    else {
      const E = d.el && d.el._isVueCE ? d.el : null;
      try {
        E && E._beginPatch(), W(
          d,
          g,
          S,
          k,
          P,
          C,
          O
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, $ = (d, g, w, A, S, k, P, C) => {
    let O, E;
    const { props: U, shapeFlag: j, transition: L, dirs: H } = d;
    if (O = d.el = o(
      d.type,
      k,
      U && U.is,
      U
    ), j & 8 ? u(O, d.children) : j & 16 && te(
      d.children,
      O,
      null,
      A,
      S,
      Vs(d, k),
      P,
      C
    ), H && kt(d, null, A, "created"), B(O, d, d.scopeId, P, A), U) {
      for (const J in U)
        J !== "value" && !vr(J) && i(O, J, null, U[J], k, A);
      "value" in U && i(O, "value", null, U.value, k), (E = U.onVnodeBeforeMount) && We(E, A, d);
    }
    H && kt(d, null, A, "beforeMount");
    const V = sc(S, L);
    V && L.beforeEnter(O), s(O, g, w), ((E = U && U.onVnodeMounted) || V || H) && _e(() => {
      try {
        E && We(E, A, d), V && L.enter(O), H && kt(d, null, A, "mounted");
      } finally {
      }
    }, S);
  }, B = (d, g, w, A, S) => {
    if (w && p(d, w), A)
      for (let k = 0; k < A.length; k++)
        p(d, A[k]);
    if (S) {
      let k = S.subTree;
      if (g === k || ia(k.type) && (k.ssContent === g || k.ssFallback === g)) {
        const P = S.vnode;
        B(
          d,
          P,
          P.scopeId,
          P.slotScopeIds,
          S.parent
        );
      }
    }
  }, te = (d, g, w, A, S, k, P, C, O = 0) => {
    for (let E = O; E < d.length; E++) {
      const U = d[E] = C ? ot(d[E]) : Ye(d[E]);
      v(
        null,
        U,
        g,
        w,
        A,
        S,
        k,
        P,
        C
      );
    }
  }, W = (d, g, w, A, S, k, P) => {
    const C = g.el = d.el;
    let { patchFlag: O, dynamicChildren: E, dirs: U } = g;
    O |= d.patchFlag & 16;
    const j = d.props || se, L = g.props || se;
    let H;
    if (w && Et(w, !1), (H = L.onVnodeBeforeUpdate) && We(H, w, g, d), U && kt(g, d, w, "beforeUpdate"), w && Et(w, !0), (j.innerHTML && L.innerHTML == null || j.textContent && L.textContent == null) && u(C, ""), E ? ke(
      d.dynamicChildren,
      E,
      C,
      w,
      A,
      Vs(g, S),
      k
    ) : P || lr(
      d,
      g,
      C,
      null,
      w,
      A,
      Vs(g, S),
      k,
      !1
    ), O > 0) {
      if (O & 16)
        Pe(C, j, L, w, S);
      else if (O & 2 && j.class !== L.class && i(C, "class", null, L.class, S), O & 4 && i(C, "style", j.style, L.style, S), O & 8) {
        const V = g.dynamicProps;
        for (let J = 0; J < V.length; J++) {
          const X = V[J], ae = j[X], he = L[X];
          (he !== ae || X === "value") && i(C, X, ae, he, S, w);
        }
      }
      O & 1 && d.children !== g.children && u(C, g.children);
    } else !P && E == null && Pe(C, j, L, w, S);
    ((H = L.onVnodeUpdated) || U) && _e(() => {
      H && We(H, w, g, d), U && kt(g, d, w, "updated");
    }, A);
  }, ke = (d, g, w, A, S, k, P) => {
    for (let C = 0; C < g.length; C++) {
      const O = d[C], E = g[C], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dr(O, E) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? h(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      v(
        O,
        E,
        U,
        null,
        A,
        S,
        k,
        P,
        !0
      );
    }
  }, Pe = (d, g, w, A, S) => {
    if (g !== w) {
      if (g !== se)
        for (const k in g)
          !vr(k) && !(k in w) && i(
            d,
            k,
            g[k],
            null,
            S,
            A
          );
      for (const k in w) {
        if (vr(k)) continue;
        const P = w[k], C = g[k];
        P !== C && k !== "value" && i(d, k, C, P, S, A);
      }
      "value" in w && i(d, "value", g.value, w.value, S);
    }
  }, or = (d, g, w, A, S, k, P, C, O) => {
    const E = g.el = d ? d.el : a(""), U = g.anchor = d ? d.anchor : a("");
    let { patchFlag: j, dynamicChildren: L, slotScopeIds: H } = g;
    H && (C = C ? C.concat(H) : H), d == null ? (s(E, w, A), s(U, w, A), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      w,
      U,
      S,
      k,
      P,
      C,
      O
    )) : j > 0 && j & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === L.length ? (ke(
      d.dynamicChildren,
      L,
      w,
      S,
      k,
      P,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || S && g === S.subTree) && ra(
      d,
      g,
      !0
      /* shallow */
    )) : lr(
      d,
      g,
      w,
      U,
      S,
      k,
      P,
      C,
      O
    );
  }, Ns = (d, g, w, A, S, k, P, C, O) => {
    g.slotScopeIds = C, d == null ? g.shapeFlag & 512 ? S.ctx.activate(
      g,
      w,
      A,
      P,
      O
    ) : Kr(
      g,
      w,
      A,
      S,
      k,
      P,
      O
    ) : Ls(d, g, O);
  }, Kr = (d, g, w, A, S, k, P) => {
    const C = d.component = fc(
      d,
      A,
      S
    );
    if (Ll(d) && (C.ctx.renderer = re), gc(C, !1, P), C.asyncDep) {
      if (S && S.registerDep(C, ar, P), !d.el) {
        const O = C.subTree = Ze(bt);
        _(null, O, g, w), d.placeholder = O.el;
      }
    } else
      ar(
        C,
        d,
        g,
        w,
        S,
        k,
        P
      );
  }, Ls = (d, g, w) => {
    const A = g.component = d.component;
    if (zl(d, g, w))
      if (A.asyncDep && !A.asyncResolved) {
        $t(A, g, w);
        return;
      } else
        A.next = g, A.update();
    else
      g.el = d.el, A.vnode = g;
  }, ar = (d, g, w, A, S, k, P) => {
    const C = () => {
      if (d.isMounted) {
        let { next: j, bu: L, u: H, parent: V, vnode: J } = d;
        {
          const qe = sa(d);
          if (qe) {
            j && (j.el = J.el, $t(d, j, P)), qe.asyncDep.then(() => {
              _e(() => {
                d.isUnmounted || E();
              }, S);
            });
            return;
          }
        }
        let X = j, ae;
        Et(d, !1), j ? (j.el = J.el, $t(d, j, P)) : j = J, L && ns(L), (ae = j.props && j.props.onVnodeBeforeUpdate) && We(ae, V, j, J), Et(d, !0);
        const he = oi(d), Fe = d.subTree;
        d.subTree = he, v(
          Fe,
          he,
          // parent may have changed if it's in a teleport
          h(Fe.el),
          // anchor may have changed if it's in a fragment
          Lt(Fe),
          d,
          S,
          k
        ), j.el = he.el, X === null && Jl(d, he.el), H && _e(H, S), (ae = j.props && j.props.onVnodeUpdated) && _e(
          () => We(ae, V, j, J),
          S
        );
      } else {
        let j;
        const { el: L, props: H } = g, { bm: V, m: J, parent: X, root: ae, type: he } = d, Fe = Sr(g);
        Et(d, !1), V && ns(V), !Fe && (j = H && H.onVnodeBeforeMount) && We(j, X, g), Et(d, !0);
        {
          ae.ce && ae.ce._hasShadowRoot() && ae.ce._injectChildStyle(
            he,
            d.parent ? d.parent.type : void 0
          );
          const qe = d.subTree = oi(d);
          v(
            null,
            qe,
            w,
            A,
            d,
            S,
            k
          ), g.el = qe.el;
        }
        if (J && _e(J, S), !Fe && (j = H && H.onVnodeMounted)) {
          const qe = g;
          _e(
            () => We(j, X, qe),
            S
          );
        }
        (g.shapeFlag & 256 || X && Sr(X.vnode) && X.vnode.shapeFlag & 256) && d.a && _e(d.a, S), d.isMounted = !0, g = w = A = null;
      }
    };
    d.scope.on();
    const O = d.effect = new ko(C);
    d.scope.off();
    const E = d.update = O.run.bind(O), U = d.job = O.runIfDirty.bind(O);
    U.i = d, U.id = d.uid, O.scheduler = () => Dn(U), Et(d, !0), E();
  }, $t = (d, g, w) => {
    g.component = d;
    const A = d.vnode.props;
    d.vnode = g, d.next = null, Yl(d, g.props, A, w), ec(d, g.children, w), vt(), si(d), wt();
  }, lr = (d, g, w, A, S, k, P, C, O = !1) => {
    const E = d && d.children, U = d ? d.shapeFlag : 0, j = g.children, { patchFlag: L, shapeFlag: H } = g;
    if (L > 0) {
      if (L & 128) {
        Nt(
          E,
          j,
          w,
          A,
          S,
          k,
          P,
          C,
          O
        );
        return;
      } else if (L & 256) {
        Us(
          E,
          j,
          w,
          A,
          S,
          k,
          P,
          C,
          O
        );
        return;
      }
    }
    H & 8 ? (U & 16 && pt(E, S, k), j !== E && u(w, j)) : U & 16 ? H & 16 ? Nt(
      E,
      j,
      w,
      A,
      S,
      k,
      P,
      C,
      O
    ) : pt(E, S, k, !0) : (U & 8 && u(w, ""), H & 16 && te(
      j,
      w,
      A,
      S,
      k,
      P,
      C,
      O
    ));
  }, Us = (d, g, w, A, S, k, P, C, O) => {
    d = d || Yt, g = g || Yt;
    const E = d.length, U = g.length, j = Math.min(E, U);
    let L;
    for (L = 0; L < j; L++) {
      const H = g[L] = O ? ot(g[L]) : Ye(g[L]);
      v(
        d[L],
        H,
        w,
        null,
        S,
        k,
        P,
        C,
        O
      );
    }
    E > U ? pt(
      d,
      S,
      k,
      !0,
      !1,
      j
    ) : te(
      g,
      w,
      A,
      S,
      k,
      P,
      C,
      O,
      j
    );
  }, Nt = (d, g, w, A, S, k, P, C, O) => {
    let E = 0;
    const U = g.length;
    let j = d.length - 1, L = U - 1;
    for (; E <= j && E <= L; ) {
      const H = d[E], V = g[E] = O ? ot(g[E]) : Ye(g[E]);
      if (dr(H, V))
        v(
          H,
          V,
          w,
          null,
          S,
          k,
          P,
          C,
          O
        );
      else
        break;
      E++;
    }
    for (; E <= j && E <= L; ) {
      const H = d[j], V = g[L] = O ? ot(g[L]) : Ye(g[L]);
      if (dr(H, V))
        v(
          H,
          V,
          w,
          null,
          S,
          k,
          P,
          C,
          O
        );
      else
        break;
      j--, L--;
    }
    if (E > j) {
      if (E <= L) {
        const H = L + 1, V = H < U ? g[H].el : A;
        for (; E <= L; )
          v(
            null,
            g[E] = O ? ot(g[E]) : Ye(g[E]),
            w,
            V,
            S,
            k,
            P,
            C,
            O
          ), E++;
      }
    } else if (E > L)
      for (; E <= j; )
        Ie(d[E], S, k, !0), E++;
    else {
      const H = E, V = E, J = /* @__PURE__ */ new Map();
      for (E = V; E <= L; E++) {
        const Ee = g[E] = O ? ot(g[E]) : Ye(g[E]);
        Ee.key != null && J.set(Ee.key, E);
      }
      let X, ae = 0;
      const he = L - V + 1;
      let Fe = !1, qe = 0;
      const ur = new Array(he);
      for (E = 0; E < he; E++) ur[E] = 0;
      for (E = H; E <= j; E++) {
        const Ee = d[E];
        if (ae >= he) {
          Ie(Ee, S, k, !0);
          continue;
        }
        let Ke;
        if (Ee.key != null)
          Ke = J.get(Ee.key);
        else
          for (X = V; X <= L; X++)
            if (ur[X - V] === 0 && dr(Ee, g[X])) {
              Ke = X;
              break;
            }
        Ke === void 0 ? Ie(Ee, S, k, !0) : (ur[Ke - V] = E + 1, Ke >= qe ? qe = Ke : Fe = !0, v(
          Ee,
          g[Ke],
          w,
          null,
          S,
          k,
          P,
          C,
          O
        ), ae++);
      }
      const Gn = Fe ? nc(ur) : Yt;
      for (X = Gn.length - 1, E = he - 1; E >= 0; E--) {
        const Ee = V + E, Ke = g[Ee], Yn = g[Ee + 1], Xn = Ee + 1 < U ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Yn.el || na(Yn)
        ) : A;
        ur[E] === 0 ? v(
          null,
          Ke,
          w,
          Xn,
          S,
          k,
          P,
          C,
          O
        ) : Fe && (X < 0 || E !== Gn[X] ? ft(Ke, w, Xn, 2) : X--);
      }
    }
  }, ft = (d, g, w, A, S = null) => {
    const { el: k, type: P, transition: C, children: O, shapeFlag: E } = d;
    if (E & 6) {
      ft(d.component.subTree, g, w, A);
      return;
    }
    if (E & 128) {
      d.suspense.move(g, w, A);
      return;
    }
    if (E & 64) {
      P.move(d, g, w, re);
      return;
    }
    if (P === Ne) {
      s(k, g, w);
      for (let j = 0; j < O.length; j++)
        ft(O[j], g, w, A);
      s(d.anchor, g, w);
      return;
    }
    if (P === zs) {
      m(d, g, w);
      return;
    }
    if (A !== 2 && E & 1 && C)
      if (A === 0)
        C.beforeEnter(k), s(k, g, w), _e(() => C.enter(k), S);
      else {
        const { leave: j, delayLeave: L, afterLeave: H } = C, V = () => {
          d.ctx.isUnmounted ? n(k) : s(k, g, w);
        }, J = () => {
          k._isLeaving && k[$l](
            !0
            /* cancelled */
          ), j(k, () => {
            V(), H && H();
          });
        };
        L ? L(k, V, J) : J();
      }
    else
      s(k, g, w);
  }, Ie = (d, g, w, A = !1, S = !1) => {
    const {
      type: k,
      props: P,
      ref: C,
      children: O,
      dynamicChildren: E,
      shapeFlag: U,
      patchFlag: j,
      dirs: L,
      cacheIndex: H,
      memo: V
    } = d;
    if (j === -2 && (S = !1), C != null && (vt(), _r(C, null, w, d, !0), wt()), H != null && (g.renderCache[H] = void 0), U & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const J = U & 1 && L, X = !Sr(d);
    let ae;
    if (X && (ae = P && P.onVnodeBeforeUnmount) && We(ae, g, d), U & 6)
      Wr(d.component, w, A);
    else {
      if (U & 128) {
        d.suspense.unmount(w, A);
        return;
      }
      J && kt(d, null, g, "beforeUnmount"), U & 64 ? d.type.remove(
        d,
        g,
        w,
        re,
        A
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Ne || j > 0 && j & 64) ? pt(
        E,
        g,
        w,
        !1,
        !0
      ) : (k === Ne && j & 384 || !S && U & 16) && pt(O, g, w), A && cr(d);
    }
    const he = V != null && H == null;
    (X && (ae = P && P.onVnodeUnmounted) || J || he) && _e(() => {
      ae && We(ae, g, d), J && kt(d, null, g, "unmounted"), he && (d.el = null);
    }, w);
  }, cr = (d) => {
    const { type: g, el: w, anchor: A, transition: S } = d;
    if (g === Ne) {
      Ds(w, A);
      return;
    }
    if (g === zs) {
      b(d);
      return;
    }
    const k = () => {
      n(w), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (d.shapeFlag & 1 && S && !S.persisted) {
      const { leave: P, delayLeave: C } = S, O = () => P(w, k);
      C ? C(d.el, k, O) : O();
    } else
      k();
  }, Ds = (d, g) => {
    let w;
    for (; d !== g; )
      w = f(d), n(d), d = w;
    n(g);
  }, Wr = (d, g, w) => {
    const { bum: A, scope: S, job: k, subTree: P, um: C, m: O, a: E } = d;
    ci(O), ci(E), A && ns(A), S.stop(), k && (k.flags |= 8, Ie(P, d, g, w)), C && _e(C, g), _e(() => {
      d.isUnmounted = !0;
    }, g);
  }, pt = (d, g, w, A = !1, S = !1, k = 0) => {
    for (let P = k; P < d.length; P++)
      Ie(d[P], g, w, A, S);
  }, Lt = (d) => {
    if (d.shapeFlag & 6)
      return Lt(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const g = f(d.anchor || d.el), w = g && g[Il];
    return w ? f(w) : g;
  };
  let M = !1;
  const F = (d, g, w) => {
    let A;
    d == null ? g._vnode && (Ie(g._vnode, null, null, !0), A = g._vnode.component) : v(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      w
    ), g._vnode = d, M || (M = !0, si(A), Ho(), M = !1);
  }, re = {
    p: v,
    um: Ie,
    m: ft,
    r: cr,
    mt: Kr,
    mc: te,
    pc: lr,
    pbc: ke,
    n: Lt,
    o: t
  };
  return {
    render: F,
    hydrate: void 0,
    createApp: Hl(F)
  };
}
function Vs({ type: t, props: e }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : r;
}
function Et({ effect: t, job: e }, r) {
  r ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function sc(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function ra(t, e, r = !1) {
  const s = t.children, n = e.children;
  if (K(s) && K(n))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let a = n[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = n[i] = ot(n[i]), a.el = o.el), !r && a.patchFlag !== -2 && ra(o, a)), a.type === Cs && (a.patchFlag === -1 && (a = n[i] = ot(a)), a.el = o.el), a.type === bt && !a.el && (a.el = o.el);
    }
}
function nc(t) {
  const e = t.slice(), r = [0];
  let s, n, i, o, a;
  const l = t.length;
  for (s = 0; s < l; s++) {
    const c = t[s];
    if (c !== 0) {
      if (n = r[r.length - 1], t[n] < c) {
        e[s] = n, r.push(s);
        continue;
      }
      for (i = 0, o = r.length - 1; i < o; )
        a = i + o >> 1, t[r[a]] < c ? i = a + 1 : o = a;
      c < t[r[i]] && (i > 0 && (e[s] = r[i - 1]), r[i] = s);
    }
  }
  for (i = r.length, o = r[i - 1]; i-- > 0; )
    r[i] = o, o = e[o];
  return r;
}
function sa(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : sa(e);
}
function ci(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function na(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? na(e.subTree) : null;
}
const ia = (t) => t.__isSuspense;
function ic(t, e) {
  e && e.pendingBranch ? K(t) ? e.effects.push(...t) : e.effects.push(t) : Al(t);
}
const Ne = /* @__PURE__ */ Symbol.for("v-fgt"), Cs = /* @__PURE__ */ Symbol.for("v-txt"), bt = /* @__PURE__ */ Symbol.for("v-cmt"), zs = /* @__PURE__ */ Symbol.for("v-stc"), Er = [];
let Ae = null;
function ee(t = !1) {
  Er.push(Ae = t ? null : []);
}
function oc() {
  Er.pop(), Ae = Er[Er.length - 1] || null;
}
let Ir = 1;
function ui(t, e = !1) {
  Ir += t, t < 0 && Ae && e && (Ae.hasOnce = !0);
}
function oa(t) {
  return t.dynamicChildren = Ir > 0 ? Ae || Yt : null, oc(), Ir > 0 && Ae && Ae.push(t), t;
}
function oe(t, e, r, s, n, i) {
  return oa(
    q(
      t,
      e,
      r,
      s,
      n,
      i,
      !0
    )
  );
}
function is(t, e, r, s, n) {
  return oa(
    Ze(
      t,
      e,
      r,
      s,
      n,
      !0
    )
  );
}
function aa(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function dr(t, e) {
  return t.type === e.type && t.key === e.key;
}
const la = ({ key: t }) => t ?? null, os = ({
  ref: t,
  ref_key: e,
  ref_for: r
}) => (typeof t == "number" && (t = "" + t), t != null ? ce(t) || /* @__PURE__ */ we(t) || Y(t) ? { i: Ce, r: t, k: e, f: !!r } : t : null);
function q(t, e = null, r = null, s = 0, n = null, i = t === Ne ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && la(e),
    ref: e && os(e),
    scopeId: qo,
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
    patchFlag: s,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Ce
  };
  return a ? (Kn(l, r), i & 128 && t.normalize(l)) : r && (l.shapeFlag |= ce(r) ? 8 : 16), Ir > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ae.push(l), l;
}
const Ze = ac;
function ac(t, e = null, r = null, s = 0, n = null, i = !1) {
  if ((!t || t === Dl) && (t = bt), aa(t)) {
    const a = rr(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return r && Kn(a, r), Ir > 0 && !i && Ae && (a.shapeFlag & 6 ? Ae[Ae.indexOf(t)] = a : Ae.push(a)), a.patchFlag = -2, a;
  }
  if (wc(t) && (t = t.__vccOpts), e) {
    e = lc(e);
    let { class: a, style: l } = e;
    a && !ce(a) && (e.class = jt(a)), ne(l) && (/* @__PURE__ */ Un(l) && !K(l) && (l = He({}, l)), e.style = nr(l));
  }
  const o = ce(t) ? 1 : ia(t) ? 128 : jl(t) ? 64 : ne(t) ? 4 : Y(t) ? 2 : 0;
  return q(
    t,
    e,
    r,
    s,
    n,
    o,
    i,
    !0
  );
}
function lc(t) {
  return t ? /* @__PURE__ */ Un(t) || Xo(t) ? He({}, t) : t : null;
}
function rr(t, e, r = !1, s = !1) {
  const { props: n, ref: i, patchFlag: o, children: a, transition: l } = t, c = e ? uc(n || {}, e) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && la(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? K(i) ? i.concat(os(e)) : [i, os(e)] : os(e)
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
    patchFlag: e && t.type !== Ne ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: t.ssContent && rr(t.ssContent),
    ssFallback: t.ssFallback && rr(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && s && Mn(
    u,
    l.clone(u)
  ), u;
}
function cc(t = " ", e = 0) {
  return Ze(Cs, null, t, e);
}
function Le(t = "", e = !1) {
  return e ? (ee(), is(bt, null, t)) : Ze(bt, null, t);
}
function Ye(t) {
  return t == null || typeof t == "boolean" ? Ze(bt) : K(t) ? Ze(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : aa(t) ? ot(t) : Ze(Cs, null, String(t));
}
function ot(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : rr(t);
}
function Kn(t, e) {
  let r = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (K(e))
    r = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Kn(t, n()), n._c && (n._d = !0));
      return;
    } else {
      r = 32;
      const n = e._;
      !n && !Xo(e) ? e._ctx = Ce : n === 3 && Ce && (Ce.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Y(e) ? (e = { default: e, _ctx: Ce }, r = 32) : (e = String(e), s & 64 ? (r = 16, e = [cc(e)]) : r = 8);
  t.children = e, t.shapeFlag |= r;
}
function uc(...t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    for (const n in s)
      if (n === "class")
        e.class !== s.class && (e.class = jt([e.class, s.class]));
      else if (n === "style")
        e.style = nr([e.style, s.style]);
      else if (Ss(n)) {
        const i = e[n], o = s[n];
        o && i !== o && !(K(i) && i.includes(o)) ? e[n] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ks(n) && (e[n] = o);
      } else n !== "" && (e[n] = s[n]);
  }
  return e;
}
function We(t, e, r, s = null) {
  ht(t, e, 7, [
    r,
    s
  ]);
}
const hc = zo();
let dc = 0;
function fc(t, e, r) {
  const s = t.type, n = (e ? e.appContext : t.appContext) || hc, i = {
    uid: dc++,
    vnode: t,
    type: s,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ga(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Xl(s, n),
    emitsOptions: Kl(s, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: se,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: se,
    data: se,
    props: se,
    attrs: se,
    slots: se,
    refs: se,
    setupState: se,
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
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = ql.bind(null, i), t.ce && t.ce(i), i;
}
let _t = null;
const pc = () => _t || Ce;
let ps, hn;
{
  const t = Ts(), e = (r, s) => {
    let n;
    return (n = t[r]) || (n = t[r] = []), n.push(s), (i) => {
      n.length > 1 ? n.forEach((o) => o(i)) : n[0](i);
    };
  };
  ps = e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => _t = r
  ), hn = e(
    "__VUE_SSR_SETTERS__",
    (r) => jr = r
  );
}
const Wn = (t) => {
  const e = _t;
  return ps(t), t.scope.on(), () => {
    t.scope.off(), ps(e);
  };
}, hi = () => {
  _t && _t.scope.off(), ps(null);
};
function ca(t) {
  return t.vnode.shapeFlag & 4;
}
let jr = !1;
function gc(t, e = !1, r = !1) {
  e && hn(e);
  const { props: s, children: n } = t.vnode, i = ca(t);
  Gl(t, s, i, e), Zl(t, n, r || e);
  const o = i ? mc(t, e) : void 0;
  return e && hn(!1), o;
}
function mc(t, e) {
  const r = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Bl);
  const { setup: s } = r;
  if (s) {
    vt();
    const n = t.setupContext = s.length > 1 ? vc(t) : null, i = Wn(t), o = Hr(
      s,
      t,
      0,
      [
        t.props,
        n
      ]
    ), a = go(o);
    if (wt(), i(), (a || t.sp) && !Sr(t) && Nl(t), a) {
      if (o.then(hi, hi), e)
        return o.then((l) => {
          di(t, l);
        }).catch((l) => {
          Rs(l, t, 0);
        });
      t.asyncDep = o;
    } else
      di(t, o);
  } else
    ua(t);
}
function di(t, e, r) {
  Y(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ne(e) && (t.setupState = Do(e)), ua(t);
}
function ua(t, e, r) {
  const s = t.type;
  t.render || (t.render = s.render || xt);
}
const yc = {
  get(t, e) {
    return ge(t, "get", ""), t[e];
  }
};
function vc(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  return {
    attrs: new Proxy(t.attrs, yc),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function xs(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Do(ml(t.exposed)), {
    get(e, r) {
      if (r in e)
        return e[r];
      if (r in kr)
        return kr[r](t);
    },
    has(e, r) {
      return r in e || r in kr;
    }
  })) : t.proxy;
}
function wc(t) {
  return Y(t) && "__vccOpts" in t;
}
const Oe = (t, e) => /* @__PURE__ */ bl(t, e, jr), bc = "3.5.34";
/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
const fi = typeof window < "u" && window.trustedTypes;
if (fi)
  try {
    dn = /* @__PURE__ */ fi.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ha = dn ? (t) => dn.createHTML(t) : (t) => t, _c = "http://www.w3.org/2000/svg", Sc = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, pi = st && /* @__PURE__ */ st.createElement("template"), kc = {
  insert: (t, e, r) => {
    e.insertBefore(t, r || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, r, s) => {
    const n = e === "svg" ? st.createElementNS(_c, t) : e === "mathml" ? st.createElementNS(Sc, t) : r ? st.createElement(t, { is: r }) : st.createElement(t);
    return t === "select" && s && s.multiple != null && n.setAttribute("multiple", s.multiple), n;
  },
  createText: (t) => st.createTextNode(t),
  createComment: (t) => st.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => st.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, r, s, n, i) {
    const o = r ? r.previousSibling : e.lastChild;
    if (n && (n === i || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), r), !(n === i || !(n = n.nextSibling)); )
        ;
    else {
      pi.innerHTML = ha(
        s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t
      );
      const a = pi.content;
      if (s === "svg" || s === "mathml") {
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
}, Ec = /* @__PURE__ */ Symbol("_vtc");
function Tc(t, e, r) {
  const s = t[Ec];
  s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : r ? t.setAttribute("class", e) : t.className = e;
}
const gi = /* @__PURE__ */ Symbol("_vod"), Ac = /* @__PURE__ */ Symbol("_vsh"), Rc = /* @__PURE__ */ Symbol(""), Oc = /(?:^|;)\s*display\s*:/;
function Cc(t, e, r) {
  const s = t.style, n = ce(r);
  let i = !1;
  if (r && !n) {
    if (e)
      if (ce(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          r[a] == null && gr(s, a, "");
        }
      else
        for (const o in e)
          r[o] == null && gr(s, o, "");
    for (const o in r) {
      o === "display" && (i = !0);
      const a = r[o];
      a != null ? Pc(
        t,
        o,
        !ce(e) && e ? e[o] : void 0,
        a
      ) || gr(s, o, a) : gr(s, o, "");
    }
  } else if (n) {
    if (e !== r) {
      const o = s[Rc];
      o && (r += ";" + o), s.cssText = r, i = Oc.test(r);
    }
  } else e && t.removeAttribute("style");
  gi in t && (t[gi] = i ? s.display : "", t[Ac] && (s.display = "none"));
}
const mi = /\s*!important$/;
function gr(t, e, r) {
  if (K(r))
    r.forEach((s) => gr(t, e, s));
  else if (r == null && (r = ""), e.startsWith("--"))
    t.setProperty(e, r);
  else {
    const s = xc(t, e);
    mi.test(r) ? t.setProperty(
      St(s),
      r.replace(mi, ""),
      "important"
    ) : t[s] = r;
  }
}
const yi = ["Webkit", "Moz", "ms"], Js = {};
function xc(t, e) {
  const r = Js[e];
  if (r)
    return r;
  let s = De(e);
  if (s !== "filter" && s in t)
    return Js[e] = s;
  s = vo(s);
  for (let n = 0; n < yi.length; n++) {
    const i = yi[n] + s;
    if (i in t)
      return Js[e] = i;
  }
  return e;
}
function Pc(t, e, r, s) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && ce(s) && r === s;
}
const vi = "http://www.w3.org/1999/xlink";
function wi(t, e, r, s, n, i = za(e)) {
  s && e.startsWith("xlink:") ? r == null ? t.removeAttributeNS(vi, e.slice(6, e.length)) : t.setAttributeNS(vi, e, r) : r == null || i && !bo(r) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : et(r) ? String(r) : r
  );
}
function bi(t, e, r, s, n) {
  if (e === "innerHTML" || e === "textContent") {
    r != null && (t[e] = e === "innerHTML" ? ha(r) : r);
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
    a === "boolean" ? r = bo(r) : r == null && a === "string" ? (r = "", o = !0) : a === "number" && (r = 0, o = !0);
  }
  try {
    t[e] = r;
  } catch {
  }
  o && t.removeAttribute(n || e);
}
function Kt(t, e, r, s) {
  t.addEventListener(e, r, s);
}
function Ic(t, e, r, s) {
  t.removeEventListener(e, r, s);
}
const _i = /* @__PURE__ */ Symbol("_vei");
function jc(t, e, r, s, n = null) {
  const i = t[_i] || (t[_i] = {}), o = i[e];
  if (s && o)
    o.value = s;
  else {
    const [a, l] = $c(e);
    if (s) {
      const c = i[e] = Uc(
        s,
        n
      );
      Kt(t, a, c, l);
    } else o && (Ic(t, a, o, l), i[e] = void 0);
  }
}
const Si = /(?:Once|Passive|Capture)$/;
function $c(t) {
  let e;
  if (Si.test(t)) {
    e = {};
    let s;
    for (; s = t.match(Si); )
      t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : St(t.slice(2)), e];
}
let Gs = 0;
const Nc = /* @__PURE__ */ Promise.resolve(), Lc = () => Gs || (Nc.then(() => Gs = 0), Gs = Date.now());
function Uc(t, e) {
  const r = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= r.attached)
      return;
    ht(
      Dc(s, r.value),
      e,
      5,
      [s]
    );
  };
  return r.value = t, r.attached = Lc(), r;
}
function Dc(t, e) {
  if (K(e)) {
    const r = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      r.call(t), t._stopped = !0;
    }, e.map(
      (s) => (n) => !n._stopped && s && s(n)
    );
  } else
    return e;
}
const ki = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Bc = (t, e, r, s, n, i) => {
  const o = n === "svg";
  e === "class" ? Tc(t, s, o) : e === "style" ? Cc(t, r, s) : Ss(e) ? ks(e) || jc(t, e, r, s, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Mc(t, e, s, o)) ? (bi(t, e, s), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && wi(t, e, s, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Hc(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !ce(s))) ? bi(t, De(e), s, i, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), wi(t, e, s, o));
};
function Mc(t, e, r, s) {
  if (s)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ki(e) && Y(r));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return ki(e) && ce(r) ? !1 : e in t;
}
function Hc(t, e) {
  const r = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!r)
    return !1;
  const s = De(e);
  return Array.isArray(r) ? r.some((n) => De(n) === s) : Object.keys(r).some((n) => De(n) === s);
}
const Ei = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return K(e) ? (r) => ns(e, r) : e;
};
function Fc(t) {
  t.target.composing = !0;
}
function Ti(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Ys = /* @__PURE__ */ Symbol("_assign");
function Ai(t, e, r) {
  return e && (t = t.trim()), r && (t = Cn(t)), t;
}
const gs = {
  created(t, { modifiers: { lazy: e, trim: r, number: s } }, n) {
    t[Ys] = Ei(n);
    const i = s || n.props && n.props.type === "number";
    Kt(t, e ? "change" : "input", (o) => {
      o.target.composing || t[Ys](Ai(t.value, r, i));
    }), (r || i) && Kt(t, "change", () => {
      t.value = Ai(t.value, r, i);
    }), e || (Kt(t, "compositionstart", Fc), Kt(t, "compositionend", Ti), Kt(t, "change", Ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: r, modifiers: { lazy: s, trim: n, number: i } }, o) {
    if (t[Ys] = Ei(o), t.composing) return;
    const a = (i || t.type === "number") && !/^0\d/.test(t.value) ? Cn(t.value) : t.value, l = e ?? "";
    if (a === l)
      return;
    const c = t.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === t && t.type !== "range" && (s && e === r || n && t.value.trim() === l) || (t.value = l);
  }
}, qc = ["ctrl", "shift", "alt", "meta"], Kc = {
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
  exact: (t, e) => qc.some((r) => t[`${r}Key`] && !e.includes(r))
}, ct = (t, e) => {
  if (!t) return t;
  const r = t._withMods || (t._withMods = {}), s = e.join(".");
  return r[s] || (r[s] = ((n, ...i) => {
    for (let o = 0; o < e.length; o++) {
      const a = Kc[e[o]];
      if (a && a(n, e)) return;
    }
    return t(n, ...i);
  }));
}, Wc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, fn = (t, e) => {
  const r = t._withKeys || (t._withKeys = {}), s = e.join(".");
  return r[s] || (r[s] = ((n) => {
    if (!("key" in n))
      return;
    const i = St(n.key);
    if (e.some(
      (o) => o === i || Wc[o] === i
    ))
      return t(n);
  }));
}, Vc = /* @__PURE__ */ He({ patchProp: Bc }, kc);
let Ri;
function zc() {
  return Ri || (Ri = tc(Vc));
}
const Jc = ((...t) => {
  const e = zc().createApp(...t), { mount: r } = e;
  return e.mount = (s) => {
    const n = Yc(s);
    if (!n) return;
    const i = e._component;
    !Y(i) && !i.render && !i.template && (i.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = r(n, !1, Gc(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, e;
});
function Gc(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Yc(t) {
  return ce(t) ? document.querySelector(t) : t;
}
function Ps(t, e) {
  var r = {};
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (r[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(t); n < s.length; n++)
      e.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[n]) && (r[s[n]] = t[s[n]]);
  return r;
}
function Xc(t, e, r, s) {
  function n(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        c(s.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(s.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? i(u.value) : n(u.value).then(a, l);
    }
    c((s = s.apply(t, e || [])).next());
  });
}
const Qc = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e);
class Vn extends Error {
  constructor(e, r = "FunctionsError", s) {
    super(e), this.name = r, this.context = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class Zc extends Vn {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class Oi extends Vn {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Ci extends Vn {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var pn;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(pn || (pn = {}));
class eu {
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
  constructor(e, { headers: r = {}, customFetch: s, region: n = pn.Any } = {}) {
    this.url = e, this.headers = r, this.region = n, this.fetch = Qc(s);
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
    return Xc(this, arguments, void 0, function* (r, s = {}) {
      var n;
      let i, o;
      try {
        const { headers: a, method: l, body: c, signal: u, timeout: h } = s;
        let f = {}, { region: p } = s;
        p || (p = this.region);
        const y = new URL(`${this.url}/${r}`);
        p && p !== "any" && (f["x-region"] = p, y.searchParams.set("forceFunctionRegion", p));
        let v;
        c && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", v = c) : typeof c == "string" ? (f["Content-Type"] = "text/plain", v = c) : typeof FormData < "u" && c instanceof FormData ? v = c : (f["Content-Type"] = "application/json", v = JSON.stringify(c)) : c && typeof c != "string" && !(typeof Blob < "u" && c instanceof Blob) && !(c instanceof ArrayBuffer) && !(typeof FormData < "u" && c instanceof FormData) ? v = JSON.stringify(c) : v = c;
        let T = u;
        h && (o = new AbortController(), i = setTimeout(() => o.abort(), h), u ? (T = o.signal, u.addEventListener("abort", () => o.abort())) : T = o.signal);
        const _ = yield this.fetch(y.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), a),
          body: v,
          signal: T
        }).catch((I) => {
          throw new Zc(I);
        }), R = _.headers.get("x-relay-error");
        if (R && R === "true")
          throw new Oi(_);
        if (!_.ok)
          throw new Ci(_);
        let m = ((n = _.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), b;
        return m === "application/json" ? b = yield _.json() : m === "application/octet-stream" || m === "application/pdf" ? b = yield _.blob() : m === "text/event-stream" ? b = _ : m === "multipart/form-data" ? b = yield _.formData() : b = yield _.text(), { data: b, error: null, response: _ };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Ci || a instanceof Oi ? a.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const da = 3, xi = (t) => Math.min(1e3 * 2 ** t, 3e4), tu = [520, 503], fa = [
  "GET",
  "HEAD",
  "OPTIONS"
];
var ru = class extends Error {
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
function Pi(t, e) {
  return new Promise((r) => {
    if (e?.aborted) {
      r();
      return;
    }
    const s = setTimeout(() => {
      e?.removeEventListener("abort", n), r();
    }, t);
    function n() {
      clearTimeout(s), r();
    }
    e?.addEventListener("abort", n);
  });
}
function su(t, e, r, s) {
  return !(!s || r >= da || !fa.includes(t) || !tu.includes(e));
}
var nu = class {
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
    var e, r, s, n, i;
    this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = t.method, this.url = t.url, this.headers = new Headers(t.headers), this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1, this.signal = t.signal, this.isMaybeSingle = (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.shouldStripNulls = (s = t.shouldStripNulls) !== null && s !== void 0 ? s : !1, this.urlLengthLimit = (n = t.urlLengthLimit) !== null && n !== void 0 ? n : 8e3, this.retryEnabled = (i = t.retry) !== null && i !== void 0 ? i : !0, t.fetch ? this.fetch = t.fetch : this.fetch = fetch;
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
    const s = this.fetch;
    let i = (async () => {
      let o = 0;
      for (; ; ) {
        const c = new Headers(r.headers);
        o > 0 && c.set("X-Retry-Count", String(o));
        let u;
        try {
          u = await s(r.url.toString(), {
            method: r.method,
            headers: c,
            body: JSON.stringify(r.body, (h, f) => typeof f == "bigint" ? f.toString() : f),
            signal: r.signal
          });
        } catch (h) {
          if (h?.name === "AbortError" || h?.code === "ABORT_ERR" || !fa.includes(r.method)) throw h;
          if (r.retryEnabled && o < da) {
            const f = xi(o);
            o++, await Pi(f, r.signal);
            continue;
          }
          throw h;
        }
        if (su(r.method, u.status, o, r.retryEnabled)) {
          var a, l;
          const h = (a = (l = u.headers) === null || l === void 0 ? void 0 : l.get("Retry-After")) !== null && a !== void 0 ? a : null, f = h !== null ? Math.max(0, parseInt(h, 10) || 0) * 1e3 : xi(o);
          await u.text(), o++, await Pi(f, r.signal);
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
        var f, p, y, v;
        const R = (f = h?.message) !== null && f !== void 0 ? f : "", m = (p = h?.code) !== null && p !== void 0 ? p : "";
        l = `${(y = o?.name) !== null && y !== void 0 ? y : "FetchError"}: ${o?.message}`, l += `

Caused by: ${(v = h?.name) !== null && v !== void 0 ? v : "Error"}: ${R}`, m && (l += ` (${m})`), h?.stack && (l += `
${h.stack}`);
      } else {
        var T;
        l = (T = o?.stack) !== null && T !== void 0 ? T : "";
      }
      const _ = this.url.toString().length;
      return o?.name === "AbortError" || o?.code === "ABORT_ERR" ? (u = "", c = "Request was aborted (timeout or manual cancellation)", _ > this.urlLengthLimit && (c += `. Note: Your request URL is ${_} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (h?.name === "HeadersOverflowError" || h?.code === "UND_ERR_HEADERS_OVERFLOW") && (u = "", c = "HTTP headers exceeded server limits (typically 16KB)", _ > this.urlLengthLimit && (c += `. Your request URL is ${_} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
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
    let r = null, s = null, n = null, i = t.status, o = t.statusText;
    if (t.ok) {
      var a, l;
      if (e.method !== "HEAD") {
        var c;
        const f = await t.text();
        f === "" || (e.headers.get("Accept") === "text/csv" || e.headers.get("Accept") && (!((c = e.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? s = f : s = JSON.parse(f));
      }
      const u = (a = e.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), h = (l = t.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
      u && h && h.length > 1 && (n = parseInt(h[1])), e.isMaybeSingle && Array.isArray(s) && (s.length > 1 ? (r = {
        code: "PGRST116",
        details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
        hint: null,
        message: "JSON object requested, multiple (or no) rows returned"
      }, s = null, n = null, i = 406, o = "Not Acceptable") : s.length === 1 ? s = s[0] : s = null);
    } else {
      const u = await t.text();
      try {
        r = JSON.parse(u), Array.isArray(r) && t.status === 404 && (s = [], r = null, i = 200, o = "OK");
      } catch {
        t.status === 404 && u === "" ? (i = 204, o = "No Content") : r = { message: u };
      }
      if (r && e.shouldThrowOnError) throw new ru(r);
    }
    return {
      success: r === null,
      error: r,
      data: s,
      count: n,
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
}, iu = class extends nu {
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
    const r = (t ?? "*").split("").map((s) => /\s/.test(s) && !e ? "" : (s === '"' && (e = !e), s)).join("");
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
  order(t, { ascending: e = !0, nullsFirst: r, foreignTable: s, referencedTable: n = s } = {}) {
    const i = n ? `${n}.order` : "order", o = this.url.searchParams.get(i);
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
    const s = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(s, `${t}`), this;
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
  range(t, e, { foreignTable: r, referencedTable: s = r } = {}) {
    const n = typeof s > "u" ? "offset" : `${s}.offset`, i = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(n, `${t}`), this.url.searchParams.set(i, `${e - t + 1}`), this;
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
  explain({ analyze: t = !1, verbose: e = !1, settings: r = !1, buffers: s = !1, wal: n = !1, format: i = "text" } = {}) {
    var o;
    const a = [
      t ? "analyze" : null,
      e ? "verbose" : null,
      r ? "settings" : null,
      s ? "buffers" : null,
      n ? "wal" : null
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
const Ii = /* @__PURE__ */ new RegExp("[,()]");
var Wt = class extends iu {
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
    const r = Array.from(new Set(e)).map((s) => typeof s == "string" && Ii.test(s) ? `"${s}"` : `${s}`).join(",");
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(t, e) {
    const r = Array.from(new Set(e)).map((s) => typeof s == "string" && Ii.test(s) ? `"${s}"` : `${s}`).join(",");
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
  textSearch(t, e, { config: r, type: s } = {}) {
    let n = "";
    s === "plain" ? n = "pl" : s === "phrase" ? n = "ph" : s === "websearch" && (n = "w");
    const i = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(t, `${n}fts${i}.${e}`), this;
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
    const s = r ? `${r}.or` : "or";
    return this.url.searchParams.append(s, `(${t})`), this;
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
}, ou = class {
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
  constructor(t, { headers: e = {}, schema: r, fetch: s, urlLengthLimit: n = 8e3, retry: i }) {
    this.url = t, this.headers = new Headers(e), this.schema = r, this.fetch = s, this.urlLengthLimit = n, this.retry = i;
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
    const { head: r = !1, count: s } = e ?? {}, n = r ? "HEAD" : "GET";
    let i = !1;
    const o = (t ?? "*").split("").map((c) => /\s/.test(c) && !i ? "" : (c === '"' && (i = !i), c)).join(""), { url: a, headers: l } = this.cloneRequestState();
    return a.searchParams.set("select", o), s && l.append("Prefer", `count=${s}`), new Wt({
      method: n,
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
    var s;
    const n = "POST", { url: i, headers: o } = this.cloneRequestState();
    if (e && o.append("Prefer", `count=${e}`), r || o.append("Prefer", "missing=default"), Array.isArray(t)) {
      const a = t.reduce((l, c) => l.concat(Object.keys(c)), []);
      if (a.length > 0) {
        const l = [...new Set(a)].map((c) => `"${c}"`);
        i.searchParams.set("columns", l.join(","));
      }
    }
    return new Wt({
      method: n,
      url: i,
      headers: o,
      schema: this.schema,
      body: t,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
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
  upsert(t, { onConflict: e, ignoreDuplicates: r = !1, count: s, defaultToNull: n = !0 } = {}) {
    var i;
    const o = "POST", { url: a, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), e !== void 0 && a.searchParams.set("on_conflict", e), s && l.append("Prefer", `count=${s}`), n || l.append("Prefer", "missing=default"), Array.isArray(t)) {
      const c = t.reduce((u, h) => u.concat(Object.keys(h)), []);
      if (c.length > 0) {
        const u = [...new Set(c)].map((h) => `"${h}"`);
        a.searchParams.set("columns", u.join(","));
      }
    }
    return new Wt({
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
    const s = "PATCH", { url: n, headers: i } = this.cloneRequestState();
    return e && i.append("Prefer", `count=${e}`), new Wt({
      method: s,
      url: n,
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
    const r = "DELETE", { url: s, headers: n } = this.cloneRequestState();
    return t && n.append("Prefer", `count=${t}`), new Wt({
      method: r,
      url: s,
      headers: n,
      schema: this.schema,
      fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function $r(t) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $r(t);
}
function au(t, e) {
  if ($r(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e);
    if ($r(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function lu(t) {
  var e = au(t, "string");
  return $r(e) == "symbol" ? e : e + "";
}
function cu(t, e, r) {
  return (e = lu(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function ji(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function Gr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ji(Object(r), !0).forEach(function(s) {
      cu(t, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ji(Object(r)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return t;
}
var uu = class pa {
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
  constructor(e, { headers: r = {}, schema: s, fetch: n, timeout: i, urlLengthLimit: o = 8e3, retry: a } = {}) {
    this.url = e, this.headers = new Headers(r), this.schemaName = s, this.urlLengthLimit = o;
    const l = n ?? globalThis.fetch;
    i !== void 0 && i > 0 ? this.fetch = (c, u) => {
      const h = new AbortController(), f = setTimeout(() => h.abort(), i), p = u?.signal;
      if (p) {
        if (p.aborted)
          return clearTimeout(f), l(c, u);
        const y = () => {
          clearTimeout(f), h.abort();
        };
        return p.addEventListener("abort", y, { once: !0 }), l(c, Gr(Gr({}, u), {}, { signal: h.signal })).finally(() => {
          clearTimeout(f), p.removeEventListener("abort", y);
        });
      }
      return l(c, Gr(Gr({}, u), {}, { signal: h.signal })).finally(() => clearTimeout(f));
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
    return new ou(new URL(`${this.url}/${e}`), {
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
    return new pa(this.url, {
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
  rpc(e, r = {}, { head: s = !1, get: n = !1, count: i } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${e}`);
    let c;
    const u = (p) => p !== null && typeof p == "object" && (!Array.isArray(p) || p.some(u)), h = s && Object.values(r).some(u);
    h ? (a = "POST", c = r) : s || n ? (a = s ? "HEAD" : "GET", Object.entries(r).filter(([p, y]) => y !== void 0).map(([p, y]) => [p, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach(([p, y]) => {
      l.searchParams.append(p, y);
    })) : (a = "POST", c = r);
    const f = new Headers(this.headers);
    return h ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal") : i && f.set("Prefer", `count=${i}`), new Wt({
      method: a,
      url: l,
      headers: f,
      schema: this.schemaName,
      body: c,
      fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class hu {
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
    const s = typeof global < "u" ? global : void 0;
    if (s && typeof s.WebSocket < "u")
      return { type: "native", wsConstructor: s.WebSocket };
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
    const n = globalThis.process;
    if (n) {
      const i = n.versions;
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
const du = "2.106.1", fu = `realtime-js/${du}`, pu = "1.0.0", ga = "2.0.0", gu = ga, mu = 1e4, yu = 100, mt = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
}, ma = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
}, gn = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class vu {
  constructor(e) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
  }
  encode(e, r) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return r(this._binaryEncodeUserBroadcastPush(e));
    let s = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return r(JSON.stringify(s));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var r;
    return this._isArrayBuffer((r = e.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var r, s;
    const n = (s = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && s !== void 0 ? s : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, n);
  }
  _encodeJsonUserBroadcastPush(e) {
    var r, s;
    const n = (s = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !== null && s !== void 0 ? s : {}, o = new TextEncoder().encode(JSON.stringify(n)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, r, s) {
    var n, i;
    const o = e.topic, a = (n = e.ref) !== null && n !== void 0 ? n : "", l = (i = e.join_ref) !== null && i !== void 0 ? i : "", c = e.payload.event, u = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, h = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
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
    const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + c.length + h.length, p = new ArrayBuffer(this.HEADER_LENGTH + f);
    let y = new DataView(p), v = 0;
    y.setUint8(v++, this.KINDS.userBroadcastPush), y.setUint8(v++, l.length), y.setUint8(v++, a.length), y.setUint8(v++, o.length), y.setUint8(v++, c.length), y.setUint8(v++, h.length), y.setUint8(v++, r), Array.from(l, (_) => y.setUint8(v++, _.charCodeAt(0))), Array.from(a, (_) => y.setUint8(v++, _.charCodeAt(0))), Array.from(o, (_) => y.setUint8(v++, _.charCodeAt(0))), Array.from(c, (_) => y.setUint8(v++, _.charCodeAt(0))), Array.from(h, (_) => y.setUint8(v++, _.charCodeAt(0)));
    var T = new Uint8Array(p.byteLength + s.byteLength);
    return T.set(new Uint8Array(p), 0), T.set(new Uint8Array(s), p.byteLength), T.buffer;
  }
  decode(e, r) {
    if (this._isArrayBuffer(e)) {
      let s = this._binaryDecode(e);
      return r(s);
    }
    if (typeof e == "string") {
      const s = JSON.parse(e), [n, i, o, a, l] = s;
      return r({ join_ref: n, ref: i, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(e) {
    const r = new DataView(e), s = r.getUint8(0), n = new TextDecoder();
    switch (s) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, r, n);
    }
  }
  _decodeUserBroadcast(e, r, s) {
    const n = r.getUint8(1), i = r.getUint8(2), o = r.getUint8(3), a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = s.decode(e.slice(l, l + n));
    l = l + n;
    const u = s.decode(e.slice(l, l + i));
    l = l + i;
    const h = s.decode(e.slice(l, l + o));
    l = l + o;
    const f = e.slice(l, e.byteLength), p = a === this.JSON_ENCODING ? JSON.parse(s.decode(f)) : f, y = {
      type: this.BROADCAST_EVENT,
      event: u,
      payload: p
    };
    return o > 0 && (y.meta = JSON.parse(h)), { join_ref: null, ref: null, topic: c, event: this.BROADCAST_EVENT, payload: y };
  }
  _isArrayBuffer(e) {
    var r;
    return e instanceof ArrayBuffer || ((r = e?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(e, r) {
    return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([s]) => r.includes(s)));
  }
}
var Q;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(Q || (Q = {}));
const $i = (t, e, r = {}) => {
  var s;
  const n = (s = r.skipTypes) !== null && s !== void 0 ? s : [];
  return e ? Object.keys(e).reduce((i, o) => (i[o] = wu(o, t, e, n), i), {}) : {};
}, wu = (t, e, r, s) => {
  const n = e.find((a) => a.name === t), i = n?.type, o = r[t];
  return i && !s.includes(i) ? ya(i, o) : mn(o);
}, ya = (t, e) => {
  if (t.charAt(0) === "_") {
    const r = t.slice(1, t.length);
    return ku(e, r);
  }
  switch (t) {
    case Q.bool:
      return bu(e);
    case Q.float4:
    case Q.float8:
    case Q.int2:
    case Q.int4:
    case Q.int8:
    case Q.numeric:
    case Q.oid:
      return _u(e);
    case Q.json:
    case Q.jsonb:
      return Su(e);
    case Q.timestamp:
      return Eu(e);
    // Format to be consistent with PostgREST
    case Q.abstime:
    // To allow users to cast it based on Timezone
    case Q.date:
    // To allow users to cast it based on Timezone
    case Q.daterange:
    case Q.int4range:
    case Q.int8range:
    case Q.money:
    case Q.reltime:
    // To allow users to cast it based on Timezone
    case Q.text:
    case Q.time:
    // To allow users to cast it based on Timezone
    case Q.timestamptz:
    // To allow users to cast it based on Timezone
    case Q.timetz:
    // To allow users to cast it based on Timezone
    case Q.tsrange:
    case Q.tstzrange:
      return mn(e);
    default:
      return mn(e);
  }
}, mn = (t) => t, bu = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, _u = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, Su = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return t;
}, ku = (t, e) => {
  if (typeof t != "string")
    return t;
  const r = t.length - 1, s = t[r];
  if (t[0] === "{" && s === "}") {
    let i;
    const o = t.slice(1, r);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((a) => ya(e, a));
  }
  return t;
}, Eu = (t) => typeof t == "string" ? t.replace(" ", "T") : t, va = (t) => {
  const e = new URL(t);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
var Tr = (t) => typeof t == "function" ? (
  /** @type {() => T} */
  t
) : function() {
  return t;
}, Tu = typeof self < "u" ? self : null, Vt = typeof window < "u" ? window : null, Je = Tu || Vt || globalThis, Au = "2.0.0", Ru = 1e4, Ou = 1e3, Xe = (
  /** @type {const} */
  { connecting: 0, open: 1, closing: 2, closed: 3 }
), be = (
  /** @type {const} */
  {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  }
), nt = (
  /** @type {const} */
  {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  }
), yn = (
  /** @type {const} */
  {
    longpoll: "longpoll",
    websocket: "websocket"
  }
), Cu = (
  /** @type {const} */
  {
    complete: 4
  }
), vn = "base64url.bearer.phx.", Yr = class {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  constructor(t, e, r, s) {
    this.channel = t, this.event = e, this.payload = r || function() {
      return {};
    }, this.receivedResp = null, this.timeout = s, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
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
    this.recHooks.filter((s) => s.status === t).forEach((s) => s.callback(e));
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
}, wa = class {
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
}, xu = class {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  constructor(t, e, r) {
    this.state = be.closed, this.topic = t, this.params = Tr(e || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new Yr(this, nt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new wa(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })
    ), this.joinPush.receive("ok", () => {
      this.state = be.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((s) => s.send()), this.pushBuffer = [];
    }), this.joinPush.receive("error", (s) => {
      this.state = be.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, s), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = be.closed, this.socket.remove(this);
    }), this.onError((s) => {
      this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, s), this.isJoining() && this.joinPush.reset(), this.state = be.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive("timeout", () => {
      this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new Yr(this, nt.leave, Tr({}), this.timeout).send(), this.state = be.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(nt.reply, (s, n) => {
      this.trigger(this.replyEventName(n), s);
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
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = be.closed, this.bindings = [];
  }
  /**
   * Hook into channel close
   * @param {ChannelBindingCallback} callback
   */
  onClose(t) {
    this.on(nt.close, t);
  }
  /**
   * Hook into channel errors
   * @param {ChannelOnErrorCallback} callback
   * @return {number}
   */
  onError(t) {
    return this.on(nt.error, (e) => t(e));
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
    let s = new Yr(this, t, function() {
      return e;
    }, r);
    return this.canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)), s;
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
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = be.leaving;
    let e = () => {
      this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(nt.close, "leave");
    }, r = new Yr(this, nt.leave, Tr({}), t);
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
  isMember(t, e, r, s) {
    return this.topic !== t ? !1 : s && s !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: t, event: e, payload: r, joinRef: s }), !1) : !0;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(t = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = be.joining, this.joinPush.resend(t));
  }
  /**
   * @param {string} event
   * @param {unknown} [payload]
   * @param {?string} [ref]
   * @param {?string} [joinRef]
   */
  trigger(t, e, r, s) {
    let n = this.onMessage(t, e, r, s);
    if (e && !n)
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    let i = this.bindings.filter((o) => o.event === t && this.filterBindings(o, e, r));
    for (let o = 0; o < i.length; o++)
      i[o].callback(n, r, s || this.joinRef());
  }
  /**
  * @param {string} ref
  */
  replyEventName(t) {
    return `chan_reply_${t}`;
  }
  isClosed() {
    return this.state === be.closed;
  }
  isErrored() {
    return this.state === be.errored;
  }
  isJoined() {
    return this.state === be.joined;
  }
  isJoining() {
    return this.state === be.joining;
  }
  isLeaving() {
    return this.state === be.leaving;
  }
}, ms = class {
  static request(t, e, r, s, n, i, o) {
    if (Je.XDomainRequest) {
      let a = new Je.XDomainRequest();
      return this.xdomainRequest(a, t, e, s, n, i, o);
    } else if (Je.XMLHttpRequest) {
      let a = new Je.XMLHttpRequest();
      return this.xhrRequest(a, t, e, r, s, n, i, o);
    } else {
      if (Je.fetch && Je.AbortController)
        return this.fetchRequest(t, e, r, s, n, i, o);
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(t, e, r, s, n, i, o) {
    let a = {
      method: t,
      headers: r,
      body: s
    }, l = null;
    return n && (l = new AbortController(), setTimeout(() => l.abort(), n), a.signal = l.signal), Je.fetch(e, a).then((c) => c.text()).then((c) => this.parseJSON(c)).then((c) => o && o(c)).catch((c) => {
      c.name === "AbortError" && i ? i() : o && o(null);
    }), l;
  }
  static xdomainRequest(t, e, r, s, n, i, o) {
    return t.timeout = n, t.open(e, r), t.onload = () => {
      let a = this.parseJSON(t.responseText);
      o && o(a);
    }, i && (t.ontimeout = i), t.onprogress = () => {
    }, t.send(s), t;
  }
  static xhrRequest(t, e, r, s, n, i, o, a) {
    t.open(e, r, !0), t.timeout = i;
    for (let [l, c] of Object.entries(s))
      t.setRequestHeader(l, c);
    return t.onerror = () => a && a(null), t.onreadystatechange = () => {
      if (t.readyState === Cu.complete && a) {
        let l = this.parseJSON(t.responseText);
        a(l);
      }
    }, o && (t.ontimeout = o), t.send(n), t;
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
    for (var s in t) {
      if (!Object.prototype.hasOwnProperty.call(t, s))
        continue;
      let n = e ? `${e}[${s}]` : s, i = t[s];
      typeof i == "object" ? r.push(this.serialize(i, n)) : r.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }
    return r.join("&");
  }
  static appendParams(t, e) {
    if (Object.keys(e).length === 0)
      return t;
    let r = t.match(/\?/) ? "&" : "?";
    return `${t}${r}${this.serialize(e)}`;
  }
}, Pu = (t) => {
  let e = "", r = new Uint8Array(t), s = r.byteLength;
  for (let n = 0; n < s; n++)
    e += String.fromCharCode(r[n]);
  return btoa(e);
}, Dt = class {
  constructor(t, e) {
    e && e.length === 2 && e[1].startsWith(vn) && (this.authToken = atob(e[1].slice(vn.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = Xe.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(t) {
    return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + yn.websocket), "$1/" + yn.longpoll);
  }
  endpointURL() {
    return ms.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(t, e, r) {
    this.close(t, e, r), this.readyState = Xe.connecting;
  }
  ontimeout() {
    this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
  }
  isActive() {
    return this.readyState === Xe.open || this.readyState === Xe.connecting;
  }
  poll() {
    const t = { Accept: "application/json" };
    this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", t, null, () => this.ontimeout(), (e) => {
      if (e) {
        var { status: r, token: s, messages: n } = e;
        if (r === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
          return;
        }
        this.token = s;
      } else
        r = 0;
      switch (r) {
        case 200:
          n.forEach((i) => {
            setTimeout(() => this.onmessage({ data: i }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = Xe.open, this.onopen({}), this.poll();
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
    typeof t != "string" && (t = Pu(t)), this.currentBatch ? this.currentBatch.push(t) : this.awaitingBatchAck ? this.batchBuffer.push(t) : (this.currentBatch = [t], this.currentBatchTimer = setTimeout(() => {
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
    for (let n of this.reqs)
      n.abort();
    this.readyState = Xe.closed;
    let s = Object.assign({ code: 1e3, reason: void 0, wasClean: !0 }, { code: t, reason: e, wasClean: r });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", s)) : this.onclose(s);
  }
  ajax(t, e, r, s, n) {
    let i, o = () => {
      this.reqs.delete(i), s();
    };
    i = ms.request(t, this.endpointURL(), e, r, this.timeout, o, (a) => {
      this.reqs.delete(i), this.isActive() && n(a);
    }), this.reqs.add(i);
  }
}, Iu = class mr {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  constructor(e, r = {}) {
    let s = r.events || /** @type {PresenceEvents} */
    { state: "presence_state", diff: "presence_diff" };
    this.state = {}, this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    }, this.channel.on(s.state, (n) => {
      let { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = mr.syncState(this.state, n, i, o), this.pendingDiffs.forEach((l) => {
        this.state = mr.syncDiff(this.state, l, i, o);
      }), this.pendingDiffs = [], a();
    }), this.channel.on(s.diff, (n) => {
      let { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = mr.syncDiff(this.state, n, i, o), a());
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
    return mr.list(this.state, e);
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
  static syncState(e, r, s, n) {
    let i = this.clone(e), o = {}, a = {};
    return this.map(i, (l, c) => {
      r[l] || (a[l] = c);
    }), this.map(r, (l, c) => {
      let u = i[l];
      if (u) {
        let h = c.metas.map((v) => v.phx_ref), f = u.metas.map((v) => v.phx_ref), p = c.metas.filter((v) => f.indexOf(v.phx_ref) < 0), y = u.metas.filter((v) => h.indexOf(v.phx_ref) < 0);
        p.length > 0 && (o[l] = c, o[l].metas = p), y.length > 0 && (a[l] = this.clone(u), a[l].metas = y);
      } else
        o[l] = c;
    }), this.syncDiff(i, { joins: o, leaves: a }, s, n);
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
  static syncDiff(e, r, s, n) {
    let { joins: i, leaves: o } = this.clone(r);
    return s || (s = function() {
    }), n || (n = function() {
    }), this.map(i, (a, l) => {
      let c = e[a];
      if (e[a] = this.clone(l), c) {
        let u = e[a].metas.map((f) => f.phx_ref), h = c.metas.filter((f) => u.indexOf(f.phx_ref) < 0);
        e[a].metas.unshift(...h);
      }
      s(a, c, l);
    }), this.map(o, (a, l) => {
      let c = e[a];
      if (!c)
        return;
      let u = l.metas.map((h) => h.phx_ref);
      c.metas = c.metas.filter((h) => u.indexOf(h.phx_ref) < 0), n(a, c, l), c.metas.length === 0 && delete e[a];
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
    return r || (r = function(s, n) {
      return n;
    }), this.map(e, (s, n) => r(s, n));
  }
  // private
  /**
  * @template T
  * @param {Record<string, PresenceState>} obj
  * @param {(key: string, obj: PresenceState) => T} func
  */
  static map(e, r) {
    return Object.getOwnPropertyNames(e).map((s) => r(s, e[s]));
  }
  /**
  * @template T
  * @param {T} obj
  * @returns {T}
  */
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
}, Xr = {
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
      let [r, s, n, i, o] = JSON.parse(t);
      return e({ join_ref: r, ref: s, topic: n, event: i, payload: o });
    }
  },
  /** @private */
  binaryEncode(t) {
    let { join_ref: e, ref: r, event: s, topic: n, payload: i } = t, o = this.META_LENGTH + e.length + r.length + n.length + s.length, a = new ArrayBuffer(this.HEADER_LENGTH + o), l = new DataView(a), c = 0;
    l.setUint8(c++, this.KINDS.push), l.setUint8(c++, e.length), l.setUint8(c++, r.length), l.setUint8(c++, n.length), l.setUint8(c++, s.length), Array.from(e, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(r, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(n, (h) => l.setUint8(c++, h.charCodeAt(0))), Array.from(s, (h) => l.setUint8(c++, h.charCodeAt(0)));
    var u = new Uint8Array(a.byteLength + i.byteLength);
    return u.set(new Uint8Array(a), 0), u.set(new Uint8Array(i), a.byteLength), u.buffer;
  },
  /**
  * @private
  */
  binaryDecode(t) {
    let e = new DataView(t), r = e.getUint8(0), s = new TextDecoder();
    switch (r) {
      case this.KINDS.push:
        return this.decodePush(t, e, s);
      case this.KINDS.reply:
        return this.decodeReply(t, e, s);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(t, e, s);
    }
  },
  /** @private */
  decodePush(t, e, r) {
    let s = e.getUint8(1), n = e.getUint8(2), i = e.getUint8(3), o = this.HEADER_LENGTH + this.META_LENGTH - 1, a = r.decode(t.slice(o, o + s));
    o = o + s;
    let l = r.decode(t.slice(o, o + n));
    o = o + n;
    let c = r.decode(t.slice(o, o + i));
    o = o + i;
    let u = t.slice(o, t.byteLength);
    return { join_ref: a, ref: null, topic: l, event: c, payload: u };
  },
  /** @private */
  decodeReply(t, e, r) {
    let s = e.getUint8(1), n = e.getUint8(2), i = e.getUint8(3), o = e.getUint8(4), a = this.HEADER_LENGTH + this.META_LENGTH, l = r.decode(t.slice(a, a + s));
    a = a + s;
    let c = r.decode(t.slice(a, a + n));
    a = a + n;
    let u = r.decode(t.slice(a, a + i));
    a = a + i;
    let h = r.decode(t.slice(a, a + o));
    a = a + o;
    let f = t.slice(a, t.byteLength), p = { status: h, response: f };
    return { join_ref: l, ref: c, topic: u, event: nt.reply, payload: p };
  },
  /** @private */
  decodeBroadcast(t, e, r) {
    let s = e.getUint8(1), n = e.getUint8(2), i = this.HEADER_LENGTH + 2, o = r.decode(t.slice(i, i + s));
    i = i + s;
    let a = r.decode(t.slice(i, i + n));
    i = i + n;
    let l = t.slice(i, t.byteLength);
    return { join_ref: null, ref: null, topic: o, event: a, payload: l };
  }
}, ju = class {
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
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = e.timeout || Ru, this.transport = e.transport || Je.WebSocket || Dt, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = e.longPollFallbackMs, this.fallbackTimer = null;
    let r = null;
    try {
      r = Je && Je.sessionStorage;
    } catch {
    }
    this.sessionStore = e.sessionStorage || r, this.establishedConnections = 0, this.defaultEncoder = Xr.encode.bind(Xr), this.defaultDecoder = Xr.decode.bind(Xr), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = e.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== Dt ? (this.encode = e.encode || this.defaultEncoder, this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
    let s = null;
    Vt && Vt.addEventListener && (Vt.addEventListener("pagehide", (n) => {
      this.conn && (this.disconnect(), s = this.connectClock);
    }), Vt.addEventListener("pageshow", (n) => {
      s === this.connectClock && (s = null, this.connect());
    }), Vt.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0, this.heartbeatCallback = e.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (n) => e.rejoinAfterMs ? e.rejoinAfterMs(n) : [1e3, 2e3, 5e3][n - 1] || 1e4, this.reconnectAfterMs = (n) => e.reconnectAfterMs ? e.reconnectAfterMs(n) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][n - 1] || 5e3, this.logger = e.logger || null, !this.logger && e.debug && (this.logger = (n, i, o) => {
      console.log(`${n}: ${i}`, o);
    }), this.longpollerTimeout = e.longpollerTimeout || 2e4, this.params = Tr(e.params || {}), this.endPoint = `${t}/${yn.websocket}`, this.vsn = e.vsn || Au, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new wa(() => {
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
    return Dt;
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
    let t = ms.appendParams(
      ms.appendParams(this.endPoint, this.params()),
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
    t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Tr(t)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Dt ? this.connectWithFallback(Dt, this.longPollFallbackMs) : this.transportConnect());
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
    let s = this.onMessage((n) => {
      n.ref === e && (this.off([s]), t(Date.now() - r));
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
      case Dt:
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
    this.authToken && (t = ["phoenix", `${vn}${btoa(this.authToken).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), t), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
  }
  getSession(t) {
    return this.sessionStore && this.sessionStore.getItem(t);
  }
  storeSession(t, e) {
    this.sessionStore && this.sessionStore.setItem(t, e);
  }
  connectWithFallback(t, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let r = !1, s = !0, n, i, o = this.transportName(t), a = (l) => {
      this.log("transport", `falling back to ${o}...`, l), this.off([n, i]), s = !1, this.replaceTransport(t), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${o}`))
      return a("memorized");
    this.fallbackTimer = setTimeout(a, e), i = this.onError((l) => {
      this.log("transport", "error", l), s && !r && (clearTimeout(this.fallbackTimer), a(l));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (r = !0, !s) {
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
      this.triggerChanError(new Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Ou, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(t, e, r) {
    if (!this.conn)
      return t && t();
    const s = this.conn;
    this.waitForBufferDone(s, () => {
      e ? s.close(e, r || "") : s.close(), this.waitForSocketClosed(s, () => {
        this.conn === s && (this.conn.onopen = function() {
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
    if (r === 5 || t.readyState === Xe.closed) {
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
      e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(nt.error, t);
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Xe.connecting:
        return "connecting";
      case Xe.open:
        return "open";
      case Xe.closing:
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
    let r = new xu(t, e, this);
    return this.channels.push(r), r;
  }
  /**
   * @param {Message<Record<string, any>>} data
   */
  push(t) {
    if (this.hasLogger()) {
      let { topic: e, event: r, payload: s, ref: n, join_ref: i } = t;
      this.log("push", `${e} ${r} (${i}, ${n})`, s);
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
      let { topic: r, event: s, payload: n, ref: i, join_ref: o } = e;
      if (i && i === this.pendingHeartbeatRef) {
        const a = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(n.status === "ok" ? "ok" : "error", a);
        } catch (l) {
          this.log("error", "error in heartbeat callback", l);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log("receive", `${n.status || ""} ${r} ${s} ${i && "(" + i + ")" || ""}`.trim(), n);
      for (let a = 0; a < this.channels.length; a++) {
        const l = this.channels[a];
        l.isMember(r, s, n, o) && l.trigger(s, n, i, o);
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
      this.stateChangeCallbacks[t].forEach(([r, s]) => {
        try {
          s(...e);
        } catch (n) {
          this.log("error", `error in ${t} callback`, n);
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
class Ar {
  constructor(e, r) {
    const s = Nu(r);
    this.presence = new Iu(e.getChannel(), s), this.presence.onJoin((n, i, o) => {
      const a = Ar.onJoinPayload(n, i, o);
      e.getChannel().trigger("presence", a);
    }), this.presence.onLeave((n, i, o) => {
      const a = Ar.onLeavePayload(n, i, o);
      e.getChannel().trigger("presence", a);
    }), this.presence.onSync(() => {
      e.getChannel().trigger("presence", { event: "sync" });
    });
  }
  get state() {
    return Ar.transformState(this.presence.state);
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
    return e = $u(e), Object.getOwnPropertyNames(e).reduce((r, s) => {
      const n = e[s];
      return r[s] = as(n), r;
    }, {});
  }
  static onJoinPayload(e, r, s) {
    const n = Ni(r), i = as(s);
    return {
      event: "join",
      key: e,
      currentPresences: n,
      newPresences: i
    };
  }
  static onLeavePayload(e, r, s) {
    const n = Ni(r), i = as(s);
    return {
      event: "leave",
      key: e,
      currentPresences: n,
      leftPresences: i
    };
  }
}
function as(t) {
  return t.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e));
}
function $u(t) {
  return JSON.parse(JSON.stringify(t));
}
function Nu(t) {
  return t?.events && { events: t.events };
}
function Ni(t) {
  return t?.metas ? as(t) : [];
}
var Li;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(Li || (Li = {}));
class Lu {
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
    this.channel = e, this.presenceAdapter = new Ar(this.channel.channelAdapter, r);
  }
}
function Uu(t) {
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
class Du {
  constructor(e, r, s) {
    const n = Bu(s);
    this.channel = e.getSocket().channel(r, n), this.socket = e;
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
  push(e, r, s) {
    let n;
    try {
      n = this.channel.push(e, r, s);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > yu) {
      const i = this.channel.pushBuffer.shift();
      i.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${i.event}`, i.payload());
    }
    return n;
  }
  updateJoinPayload(e) {
    const r = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, r), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === mt.joined;
  }
  isJoined() {
    return this.state === mt.joined;
  }
  isJoining() {
    return this.state === mt.joining;
  }
  isClosed() {
    return this.state === mt.closed;
  }
  isLeaving() {
    return this.state === mt.leaving;
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
function Bu(t) {
  return {
    config: Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config)
  };
}
var Ui;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(Ui || (Ui = {}));
var Gt;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})(Gt || (Gt = {}));
var it;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(it || (it = {}));
class Rr {
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
  constructor(e, r = { config: {} }, s) {
    var n, i;
    if (this.topic = e, this.params = r, this.socket = s, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.channelAdapter = new Du(this.socket.socketAdapter, e, this.params), this.presence = new Lu(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = va(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((i = (n = this.params.config) === null || n === void 0 ? void 0 : n.broadcast) === null || i === void 0) && i.replay))
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  /**
   * Subscribe registers your client with the server
   * @category Realtime
   */
  subscribe(e, r = this.timeout) {
    var s, n, i;
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, c = (n = (s = this.bindings.postgres_changes) === null || s === void 0 ? void 0 : s.map((p) => p.filter)) !== null && n !== void 0 ? n : [], u = !!this.bindings[Gt.PRESENCE] && this.bindings[Gt.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, h = {}, f = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue), this._onError((p) => {
        e?.(it.CHANNEL_ERROR, Uu(p));
      }), this._onClose(() => e?.(it.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, h)), this._updateFilterMessage(), this.channelAdapter.subscribe(r).receive("ok", async ({ postgres_changes: p }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), p === void 0) {
          e?.(it.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(p, e);
      }).receive("error", (p) => {
        this.state = mt.errored;
        const y = Object.values(p).join(", ") || "error";
        e?.(it.CHANNEL_ERROR, new Error(y, { cause: p }));
      }).receive("timeout", () => {
        e?.(it.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(e, r) {
    var s;
    const n = this.bindings.postgres_changes, i = (s = n?.length) !== null && s !== void 0 ? s : 0, o = [];
    for (let a = 0; a < i; a++) {
      const l = n[a], { filter: { event: c, schema: u, table: h, filter: f } } = l, p = e && e[a];
      if (p && p.event === c && Rr.isFilterValueEqual(p.schema, u) && Rr.isFilterValueEqual(p.table, h) && Rr.isFilterValueEqual(p.filter, f))
        o.push(Object.assign(Object.assign({}, l), { id: p.id }));
      else {
        this.unsubscribe(), this.state = mt.errored, r?.(it.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        return;
      }
    }
    this.bindings.postgres_changes = o, this.state != mt.errored && r && r(it.SUBSCRIBED);
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
  on(e, r, s) {
    const n = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i = e === Gt.PRESENCE || e === Gt.POSTGRES_CHANGES;
    if (n && i)
      throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(e, r, s);
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
  async httpSend(e, r, s = {}) {
    var n;
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
    }, a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (n = s.timeout) !== null && n !== void 0 ? n : this.timeout);
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
    var s, n;
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
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (s = r.timeout) !== null && s !== void 0 ? s : this.timeout);
        return await ((n = c.body) === null || n === void 0 ? void 0 : n.cancel()), c.ok ? "ok" : "error";
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
  async _fetchWithTimeout(e, r, s) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), s), o = await this.socket.fetch(e, Object.assign(Object.assign({}, r), { signal: n.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _on(e, r, s) {
    const n = e.toLocaleLowerCase(), i = this.channelAdapter.on(e, s), o = {
      type: n,
      filter: r,
      callback: s,
      ref: i
    };
    return this.bindings[n] ? this.bindings[n].push(o) : this.bindings[n] = [o], this._updateFilterMessage(), this;
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
    this.channelAdapter.updateFilterBindings((e, r, s) => {
      var n, i, o, a, l, c, u;
      const h = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(h, s))
        return !1;
      const f = (n = this.bindings[h]) === null || n === void 0 ? void 0 : n.find((p) => p.ref === e.ref);
      if (!f)
        return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(h))
        if ("id" in f) {
          const p = f.id, y = (i = f.filter) === null || i === void 0 ? void 0 : i.event;
          return p && ((o = r.ids) === null || o === void 0 ? void 0 : o.includes(p)) && (y === "*" || y?.toLocaleLowerCase() === ((a = r.data) === null || a === void 0 ? void 0 : a.type.toLocaleLowerCase()));
        } else {
          const p = (c = (l = f?.filter) === null || l === void 0 ? void 0 : l.event) === null || c === void 0 ? void 0 : c.toLocaleLowerCase();
          return p === "*" || p === ((u = r?.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase());
        }
      else
        return f.type.toLocaleLowerCase() === h;
    });
  }
  /** @internal */
  _notThisChannelEvent(e, r) {
    const { close: s, error: n, leave: i, join: o } = ma;
    return r && [s, n, i, o].includes(e) && r !== this.joinPush.ref;
  }
  /** @internal */
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, r, s) => {
      if (typeof r == "object" && "ids" in r) {
        const n = r.data, { schema: i, table: o, commit_timestamp: a, type: l, errors: c } = n;
        return Object.assign(Object.assign({}, {
          schema: i,
          table: o,
          commit_timestamp: a,
          eventType: l,
          new: {},
          old: {},
          errors: c
        }), this._getPayloadRecords(n));
      }
      return r;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const r in e.bindings)
      for (const s of e.bindings[r])
        this._on(s.type, s.filter, s.callback);
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
    return (e.type === "INSERT" || e.type === "UPDATE") && (r.new = $i(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (r.old = $i(e.columns, e.old_record)), r;
  }
}
class Mu {
  constructor(e, r) {
    this.socket = new ju(e, r);
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
  disconnect(e, r, s, n = 1e4) {
    return new Promise((i) => {
      setTimeout(() => i("timeout"), n), this.socket.disconnect(() => {
        e(), i("ok");
      }, r, s);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, r, s) {
    this.socket.log(e, r, s);
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
    return this.socket.connectionState() == gn.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == gn.closing;
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
const Di = {
  HEARTBEAT_INTERVAL: 25e3
}, Hu = [1e3, 2e3, 5e3, 1e4], Fu = 1e4;
function qu() {
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
function Ku() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {
  }
  return qu();
}
const Wu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Vu {
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
    var s;
    if (this.channels = new Array(), this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new vu(), this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (i) => i ? (...o) => i(...o) : (...o) => fetch(...o), !(!((s = r?.params) === null || s === void 0) && s.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey;
    const n = this._initializeOptions(r);
    this.socketAdapter = new Mu(e, n), this.httpEndpoint = va(e), this.fetch = this._resolveFetch(r?.fetch);
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
    const e = this.channels.map(async (s) => {
      const n = await s.unsubscribe();
      return s.teardown(), n;
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
  log(e, r, s) {
    this.socketAdapter.log(e, r, s);
  }
  /**
   * Returns the current state of the socket.
   *
   * @category Realtime
   */
  connectionState() {
    return this.socketAdapter.connectionState() || gn.closed;
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
    const s = `realtime:${e}`, n = this.getChannels().find((i) => i.topic === s);
    if (n)
      return n;
    {
      const i = new Rr(`realtime:${e}`, r, this);
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
    let r, s = !1;
    if (e)
      r = e, s = !0;
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (n) {
        this.log("error", "Error fetching access token from callback", n), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    s ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((n) => {
      const i = {
        access_token: r,
        version: fu
      };
      r && n.updateJoinPayload(i), n.joinedOnce && n.channelAdapter.isJoined() && n.channelAdapter.push(ma.access_token, {
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
    return (r, s) => {
      r == "sent" && this._setAuthSafely(), e && e(r, s);
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
      const s = new Blob([Wu], { type: "application/javascript" });
      r = URL.createObjectURL(s);
    }
    return r;
  }
  /**
   * Initialize socket options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var r, s, n, i, o, a, l, c, u, h, f, p;
    this.worker = (r = e?.worker) !== null && r !== void 0 ? r : !1, this.accessToken = (s = e?.accessToken) !== null && s !== void 0 ? s : null;
    const y = {};
    y.timeout = (n = e?.timeout) !== null && n !== void 0 ? n : mu, y.heartbeatIntervalMs = (i = e?.heartbeatIntervalMs) !== null && i !== void 0 ? i : Di.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = (o = e?.disconnectOnEmptyChannelsAfterMs) !== null && o !== void 0 ? o : 2 * ((a = e?.heartbeatIntervalMs) !== null && a !== void 0 ? a : Di.HEARTBEAT_INTERVAL), y.transport = (l = e?.transport) !== null && l !== void 0 ? l : hu.getWebSocketConstructor(), y.params = e?.params, y.logger = e?.logger, y.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback), y.sessionStorage = (c = e?.sessionStorage) !== null && c !== void 0 ? c : Ku(), y.reconnectAfterMs = (u = e?.reconnectAfterMs) !== null && u !== void 0 ? u : ((R) => Hu[R - 1] || Fu);
    let v, T;
    const _ = (h = e?.vsn) !== null && h !== void 0 ? h : gu;
    switch (_) {
      case pu:
        v = (R, m) => m(JSON.stringify(R)), T = (R, m) => m(JSON.parse(R));
        break;
      case ga:
        v = this.serializer.encode.bind(this.serializer), T = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${y.vsn}`);
    }
    if (y.vsn = _, y.encode = (f = e?.encode) !== null && f !== void 0 ? f : v, y.decode = (p = e?.decode) !== null && p !== void 0 ? p : T, y.beforeReconnect = this._reconnectAuth.bind(this), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, y.params = Object.assign(Object.assign({}, y.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e?.workerUrl, y.autoSendHeartbeat = !this.worker;
    }
    return y;
  }
  /** @internal */
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var Nr = class extends Error {
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
function zu(t, e, r) {
  const s = new URL(e, t);
  if (r)
    for (const [n, i] of Object.entries(r))
      i !== void 0 && s.searchParams.set(n, i);
  return s.toString();
}
async function Ju(t) {
  return !t || t.type === "none" ? {} : t.type === "bearer" ? { Authorization: `Bearer ${t.token}` } : t.type === "header" ? { [t.name]: t.value } : t.type === "custom" ? await t.getHeaders() : {};
}
function Gu(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: s,
      query: n,
      body: i,
      headers: o
    }) {
      const a = zu(t.baseUrl, s, n), l = await Ju(t.auth), c = await e(a, {
        method: r,
        headers: {
          ...i ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: i ? JSON.stringify(i) : void 0
      }), u = await c.text(), h = (c.headers.get("content-type") || "").includes("application/json"), f = h && u ? JSON.parse(u) : u;
      if (!c.ok) {
        const p = h ? f : void 0, y = p?.error;
        throw new Nr(
          y?.message ?? `Request failed with status ${c.status}`,
          {
            status: c.status,
            icebergType: y?.type,
            icebergCode: y?.code,
            details: p
          }
        );
      }
      return { status: c.status, headers: c.headers, data: f };
    }
  };
}
function Qr(t) {
  return t.join("");
}
var Yu = class {
  constructor(t, e = "") {
    this.client = t, this.prefix = e;
  }
  async listNamespaces(t) {
    const e = t ? { parent: Qr(t.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map((s) => ({ namespace: s }));
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
      path: `${this.prefix}/namespaces/${Qr(t.namespace)}`
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Qr(t.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(t) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Qr(t.namespace)}`
      }), !0;
    } catch (e) {
      if (e instanceof Nr && e.status === 404)
        return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (r) {
      if (r instanceof Nr && r.status === 409)
        return;
      throw r;
    }
  }
};
function Bt(t) {
  return t.join("");
}
var Xu = class {
  constructor(t, e = "", r) {
    this.client = t, this.prefix = e, this.accessDelegation = r;
  }
  async listTables(t) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(t, e) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables`,
      body: e,
      headers: r
    })).data.metadata;
  }
  async updateTable(t, e) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables/${t.name}`,
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
      path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables/${t.name}`,
      query: { purgeRequested: String(e?.purge ?? !1) }
    });
  }
  async loadTable(t) {
    const e = {};
    return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables/${t.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(t) {
    const e = {};
    this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Bt(t.namespace)}/tables/${t.name}`,
        headers: e
      }), !0;
    } catch (r) {
      if (r instanceof Nr && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(t, e) {
    try {
      return await this.createTable(t, e);
    } catch (r) {
      if (r instanceof Nr && r.status === 409)
        return await this.loadTable({ namespace: t.namespace, name: e.name });
      throw r;
    }
  }
}, Qu = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(t) {
    let e = "v1";
    t.catalogName && (e += `/${t.catalogName}`);
    const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
    this.client = Gu({
      baseUrl: r,
      auth: t.auth,
      fetchImpl: t.fetch
    }), this.accessDelegation = t.accessDelegation?.join(","), this.namespaceOps = new Yu(this.client, e), this.tableOps = new Xu(this.client, e, this.accessDelegation);
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
function Lr(t) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Lr(t);
}
function Zu(t, e) {
  if (Lr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e);
    if (Lr(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function eh(t) {
  var e = Zu(t, "string");
  return Lr(e) == "symbol" ? e : e + "";
}
function th(t, e, r) {
  return (e = eh(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Bi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bi(Object(r), !0).forEach(function(s) {
      th(t, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bi(Object(r)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return t;
}
var Is = class extends Error {
  constructor(t, e = "storage", r, s) {
    super(t), this.__isStorageError = !0, this.namespace = e, this.name = e === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = s;
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
function js(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var wn = class extends Is {
  constructor(t, e, r, s = "storage") {
    super(t, s, e, r), this.name = s === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = e, this.statusCode = r;
  }
  toJSON() {
    return D({}, super.toJSON());
  }
}, ba = class extends Is {
  constructor(t, e, r = "storage") {
    super(t, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = e;
  }
};
function ys(t, e, r) {
  const s = D({}, t), n = e.toLowerCase();
  for (const i of Object.keys(s)) i.toLowerCase() === n && delete s[i];
  return s[n] = r, s;
}
function rh(t) {
  const e = {};
  for (const [r, s] of Object.entries(t)) e[r.toLowerCase()] = s;
  return e;
}
const sh = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), nh = (t) => {
  if (typeof t != "object" || t === null) return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, bn = (t) => {
  if (Array.isArray(t)) return t.map((r) => bn(r));
  if (typeof t == "function" || t !== Object(t)) return t;
  const e = {};
  return Object.entries(t).forEach(([r, s]) => {
    const n = r.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = bn(s);
  }), e;
}, ih = (t) => !t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t), Mi = (t) => {
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
}, oh = async (t, e, r, s) => {
  if (t !== null && typeof t == "object" && "json" in t && typeof t.json == "function") {
    const n = t;
    let i = parseInt(String(n.status), 10);
    Number.isFinite(i) || (i = 500), n.json().then((o) => {
      const a = o?.statusCode || o?.code || i + "";
      e(new wn(Mi(o), i, a, s));
    }).catch(() => {
      const o = i + "";
      e(new wn(n.statusText || `HTTP ${i} error`, i, o, s));
    });
  } else e(new ba(Mi(t), t, s));
}, ah = (t, e, r, s) => {
  const n = {
    method: t,
    headers: e?.headers || {}
  };
  if (t === "GET" || t === "HEAD" || !s) return D(D({}, n), r);
  if (nh(s)) {
    var i;
    const o = e?.headers || {};
    let a;
    for (const [l, c] of Object.entries(o)) l.toLowerCase() === "content-type" && (a = c);
    n.headers = ys(o, "Content-Type", (i = a) !== null && i !== void 0 ? i : "application/json"), n.body = JSON.stringify(s);
  } else n.body = s;
  return e?.duplex && (n.duplex = e.duplex), D(D({}, n), r);
};
async function fr(t, e, r, s, n, i, o) {
  return new Promise((a, l) => {
    t(r, ah(e, s, n, i)).then((c) => {
      if (!c.ok) throw c;
      if (s?.noResolveJson) return c;
      if (o === "vectors") {
        const u = c.headers.get("content-type");
        if (c.headers.get("content-length") === "0" || c.status === 204) return {};
        if (!u || !u.includes("application/json")) return {};
      }
      return c.json();
    }).then((c) => a(c)).catch((c) => oh(c, l, s, o));
  });
}
function _a(t = "storage") {
  return {
    get: async (e, r, s, n) => fr(e, "GET", r, s, n, void 0, t),
    post: async (e, r, s, n, i) => fr(e, "POST", r, n, i, s, t),
    put: async (e, r, s, n, i) => fr(e, "PUT", r, n, i, s, t),
    head: async (e, r, s, n) => fr(e, "HEAD", r, D(D({}, s), {}, { noResolveJson: !0 }), n, void 0, t),
    remove: async (e, r, s, n, i) => fr(e, "DELETE", r, n, i, s, t)
  };
}
const lh = _a("storage"), { get: Ur, post: $e, put: _n, head: ch, remove: zn } = lh, Te = _a("vectors");
var ir = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(t, e = {}, r, s = "storage") {
    this.shouldThrowOnError = !1, this.url = t, this.headers = rh(e), this.fetch = sh(r), this.namespace = s;
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
    return this.headers = ys(this.headers, t, e), this;
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
      if (js(r)) return {
        data: null,
        error: r
      };
      throw r;
    }
  }
};
let Sa;
Sa = Symbol.toStringTag;
var uh = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[Sa] = "StreamDownloadBuilder", this.promise = null;
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
      if (js(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
let ka;
ka = Symbol.toStringTag;
var hh = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[ka] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new uh(this.downloadFn, this.shouldThrowOnError);
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
      if (js(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
const dh = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Hi = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var fh = class extends ir {
  constructor(t, e = {}, r, s) {
    super(t, e, s, "storage"), this.bucketId = r;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(t, e, r, s) {
    var n = this;
    return n.handleOperation(async () => {
      let i;
      const o = D(D({}, Hi), s);
      let a = D(D({}, n.headers), t === "POST" && { "x-upsert": String(o.upsert) });
      const l = o.metadata;
      if (typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), l && i.append("metadata", n.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.has("cacheControl") || i.append("cacheControl", o.cacheControl), l && !i.has("metadata") && i.append("metadata", n.encodeMetadata(l))) : (i = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = n.toBase64(n.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")), s?.headers) for (const [f, p] of Object.entries(s.headers)) a = ys(a, f, p);
      const c = n._removeEmptyFolders(e), u = n._getFinalPath(c), h = await (t == "PUT" ? _n : $e)(n.fetch, `${n.url}/object/${u}`, i, D({ headers: a }, o?.duplex ? { duplex: o.duplex } : {}));
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
  async uploadToSignedUrl(t, e, r, s) {
    var n = this;
    const i = n._removeEmptyFolders(t), o = n._getFinalPath(i), a = new URL(n.url + `/object/upload/sign/${o}`);
    return a.searchParams.set("token", e), n.handleOperation(async () => {
      let l;
      const c = D(D({}, Hi), s);
      let u = D(D({}, n.headers), { "x-upsert": String(c.upsert) });
      const h = c.metadata;
      if (typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), h && l.append("metadata", n.encodeMetadata(h)), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.has("cacheControl") || l.append("cacheControl", c.cacheControl), h && !l.has("metadata") && l.append("metadata", n.encodeMetadata(h))) : (l = r, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType, h && (u["x-metadata"] = n.toBase64(n.encodeMetadata(h))), (typeof ReadableStream < "u" && l instanceof ReadableStream || l && typeof l == "object" && "pipe" in l && typeof l.pipe == "function") && !c.duplex && (c.duplex = "half")), s?.headers) for (const [f, p] of Object.entries(s.headers)) u = ys(u, f, p);
      return {
        path: i,
        fullPath: (await _n(n.fetch, a.toString(), l, D({ headers: u }, c?.duplex ? { duplex: c.duplex } : {}))).Key
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
      let s = r._getFinalPath(t);
      const n = D({}, r.headers);
      e?.upsert && (n["x-upsert"] = "true");
      const i = await $e(r.fetch, `${r.url}/object/upload/sign/${s}`, {}, { headers: n }), o = new URL(r.url + i.url), a = o.searchParams.get("token");
      if (!a) throw new Is("No token returned by API");
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
    var s = this;
    return s.handleOperation(async () => await $e(s.fetch, `${s.url}/object/move`, {
      bucketId: s.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: r?.destinationBucket
    }, { headers: s.headers }));
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
    var s = this;
    return s.handleOperation(async () => ({ path: (await $e(s.fetch, `${s.url}/object/copy`, {
      bucketId: s.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: r?.destinationBucket
    }, { headers: s.headers })).Key }));
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
    var s = this;
    return s.handleOperation(async () => {
      let n = s._getFinalPath(t);
      const i = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
      let o = await $e(s.fetch, `${s.url}/object/sign/${n}`, D({ expiresIn: e }, i ? { transform: r.transform } : {}), { headers: s.headers });
      const a = new URLSearchParams();
      r?.download && a.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && a.set("cacheNonce", String(r.cacheNonce));
      const l = a.toString();
      return { signedUrl: encodeURI(`${s.url}${o.signedURL}${l ? `&${l}` : ""}`) };
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
    var s = this;
    return s.handleOperation(async () => {
      const n = await $e(s.fetch, `${s.url}/object/sign/${s.bucketId}`, {
        expiresIn: e,
        paths: t
      }, { headers: s.headers }), i = new URLSearchParams();
      r?.download && i.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && i.set("cacheNonce", String(r.cacheNonce));
      const o = i.toString();
      return n.map((a) => D(D({}, a), {}, { signedUrl: a.signedURL ? encodeURI(`${s.url}${a.signedURL}${o ? `&${o}` : ""}`) : null }));
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
    const s = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object", n = new URLSearchParams();
    e?.transform && this.applyTransformOptsToQuery(n, e.transform), e?.cacheNonce != null && n.set("cacheNonce", String(e.cacheNonce));
    const i = n.toString(), o = this._getFinalPath(t), a = () => Ur(this.fetch, `${this.url}/${s}/${o}${i ? `?${i}` : ""}`, {
      headers: this.headers,
      noResolveJson: !0
    }, r);
    return new hh(a, this.shouldThrowOnError);
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
    return e.handleOperation(async () => bn(await Ur(e.fetch, `${e.url}/object/info/${r}`, { headers: e.headers })));
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
      return await ch(e.fetch, `${e.url}/object/${r}`, { headers: e.headers }), {
        data: !0,
        error: null
      };
    } catch (n) {
      if (e.shouldThrowOnError) throw n;
      if (js(n)) {
        var s;
        const i = n instanceof wn ? n.status : n instanceof ba ? (s = n.originalError) === null || s === void 0 ? void 0 : s.status : void 0;
        if (i !== void 0 && [400, 404].includes(i)) return {
          data: !1,
          error: n
        };
      }
      throw n;
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
    const r = this._getFinalPath(t), s = new URLSearchParams();
    e?.download && s.set("download", e.download === !0 ? "" : e.download), e?.transform && this.applyTransformOptsToQuery(s, e.transform), e?.cacheNonce != null && s.set("cacheNonce", String(e.cacheNonce));
    const n = s.toString(), i = typeof e?.transform == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${r}`) + (n ? `?${n}` : "") } };
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
    return e.handleOperation(async () => await zn(e.fetch, `${e.url}/object/${e.bucketId}`, { prefixes: t }, { headers: e.headers }));
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
    var s = this;
    return s.handleOperation(async () => {
      const n = D(D(D({}, dh), e), {}, { prefix: t || "" });
      return await $e(s.fetch, `${s.url}/object/list/${s.bucketId}`, n, { headers: s.headers }, r);
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
      const s = D({}, t);
      return await $e(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, s, { headers: r.headers }, e);
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
const ph = "2.106.1", qr = { "X-Client-Info": `storage-js/${ph}` };
var gh = class extends ir {
  constructor(t, e = {}, r, s) {
    const n = new URL(t);
    s?.useNewHostname && /supabase\.(co|in|red)$/.test(n.hostname) && !n.hostname.includes("storage.supabase.") && (n.hostname = n.hostname.replace("supabase.", "storage.supabase."));
    const i = n.href.replace(/\/$/, ""), o = D(D({}, qr), e);
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
      return await Ur(e.fetch, `${e.url}/bucket${r}`, { headers: e.headers });
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
    return e.handleOperation(async () => await Ur(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }));
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
    return r.handleOperation(async () => await $e(r.fetch, `${r.url}/bucket`, {
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
    return r.handleOperation(async () => await _n(r.fetch, `${r.url}/bucket/${t}`, {
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
    return e.handleOperation(async () => await $e(e.fetch, `${e.url}/bucket/${t}/empty`, {}, { headers: e.headers }));
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
    return e.handleOperation(async () => await zn(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
  }
  listBucketOptionsToQueryString(t) {
    const e = {};
    return t && ("limit" in t && (e.limit = String(t.limit)), "offset" in t && (e.offset = String(t.offset)), t.search && (e.search = t.search), t.sortColumn && (e.sortColumn = t.sortColumn), t.sortOrder && (e.sortOrder = t.sortOrder)), Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : "";
  }
}, mh = class extends ir {
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
    const s = t.replace(/\/$/, ""), n = D(D({}, qr), e);
    super(s, n, r, "storage");
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
    return e.handleOperation(async () => await $e(e.fetch, `${e.url}/bucket`, { name: t }, { headers: e.headers }));
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
      const s = r.toString(), n = s ? `${e.url}/bucket?${s}` : `${e.url}/bucket`;
      return await Ur(e.fetch, n, { headers: e.headers });
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
    return e.handleOperation(async () => await zn(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
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
    if (!ih(t)) throw new Is("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const r = new Qu({
      baseUrl: this.url,
      catalogName: t,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    }), s = this.shouldThrowOnError;
    return new Proxy(r, { get(n, i) {
      const o = n[i];
      return typeof o != "function" ? o : async (...a) => {
        try {
          return {
            data: await o.apply(n, a),
            error: null
          };
        } catch (l) {
          if (s) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, yh = class extends ir {
  /** Creates a new VectorIndexApi instance */
  constructor(t, e = {}, r) {
    const s = t.replace(/\/$/, ""), n = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
    super(s, n, r, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/CreateIndex`, t, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(t, e) {
    var r = this;
    return r.handleOperation(async () => await Te.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: r.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/ListIndexes`, t, { headers: e.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(t, e) {
    var r = this;
    return r.handleOperation(async () => await Te.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: r.headers }) || {});
  }
}, vh = class extends ir {
  /** Creates a new VectorDataApi instance */
  constructor(t, e = {}, r) {
    const s = t.replace(/\/$/, ""), n = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
    super(s, n, r, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(t) {
    var e = this;
    if (t.vectors.length < 1 || t.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/PutVectors`, t, { headers: e.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/GetVectors`, t, { headers: e.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(t) {
    var e = this;
    if (t.segmentCount !== void 0) {
      if (t.segmentCount < 1 || t.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
    }
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/ListVectors`, t, { headers: e.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/QueryVectors`, t, { headers: e.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(t) {
    var e = this;
    if (t.keys.length < 1 || t.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/DeleteVectors`, t, { headers: e.headers }) || {});
  }
}, wh = class extends ir {
  /** Creates a new VectorBucketApi instance */
  constructor(t, e = {}, r) {
    const s = t.replace(/\/$/, ""), n = D(D({}, qr), {}, { "Content-Type": "application/json" }, e);
    super(s, n, r, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/CreateVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/GetVectorBucket`, { vectorBucketName: t }, { headers: e.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(t = {}) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/ListVectorBuckets`, t, { headers: e.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Te.post(e.fetch, `${e.url}/DeleteVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
}, bh = class extends wh {
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
    return new _h(this.url, this.headers, t, this.fetch);
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
}, _h = class extends yh {
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
  constructor(t, e, r, s) {
    super(t, e, s), this.vectorBucketName = r;
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
    return e().call(r, D(D({}, t), {}, { vectorBucketName: r.vectorBucketName }));
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
    return e().call(r, D(D({}, t), {}, { vectorBucketName: r.vectorBucketName }));
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
    return new Sh(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
}, Sh = class extends vh {
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
  constructor(t, e, r, s, n) {
    super(t, e, n), this.vectorBucketName = r, this.indexName = s;
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
    return e().call(r, D(D({}, t), {}, {
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
    return e().call(r, D(D({}, t), {}, {
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
    return e().call(r, D(D({}, t), {}, {
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
    return e().call(r, D(D({}, t), {}, {
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
    return e().call(r, D(D({}, t), {}, {
      vectorBucketName: r.vectorBucketName,
      indexName: r.indexName
    }));
  }
}, kh = class extends gh {
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
  constructor(t, e = {}, r, s) {
    super(t, e, r, s);
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
    return new fh(this.url, this.headers, t, this.fetch);
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
    return new bh(this.url + "/vector", {
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
    return new mh(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Ea = "2.106.1", zt = 30 * 1e3, Sn = 3, Xs = Sn * zt, Eh = "http://localhost:9999", Th = "supabase.auth.token", Ah = { "X-Client-Info": `gotrue-js/${Ea}` }, kn = "X-Supabase-Api-Version", Ta = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Rh = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Oh = 600 * 1e3;
class sr extends Error {
  constructor(e, r, s) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = s;
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
function x(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Ch extends sr {
  constructor(e, r, s) {
    super(e, r, s), this.name = "AuthApiError", this.status = r, this.code = s;
  }
}
function xh(t) {
  return x(t) && t.name === "AuthApiError";
}
class Ue extends sr {
  constructor(e, r) {
    super(e), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class dt extends sr {
  constructor(e, r, s, n) {
    super(e, s, n), this.name = r, this.status = s;
  }
}
class ue extends dt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Zr(t) {
  return x(t) && t.name === "AuthSessionMissingError";
}
class Mt extends dt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class es extends dt {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ts extends dt {
  constructor(e, r = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function Ph(t) {
  return x(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Fi extends dt {
  constructor(e, r = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class Ih extends dt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class En extends dt {
  constructor(e, r) {
    super(e, "AuthRetryableFetchError", r, void 0);
  }
}
function Qs(t) {
  return x(t) && t.name === "AuthRetryableFetchError";
}
class qi extends dt {
  constructor(e, r, s) {
    super(e, "AuthWeakPasswordError", r, "weak_password"), this.reasons = s;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class Tn extends dt {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Ki = ` 	
\r=`.split(""), jh = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < Ki.length; e += 1)
    t[Ki[e].charCodeAt(0)] = -2;
  for (let e = 0; e < vs.length; e += 1)
    t[vs[e].charCodeAt(0)] = e;
  return t;
})();
function Wi(t, e, r) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const s = e.queue >> e.queuedBits - 6 & 63;
      r(vs[s]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const s = e.queue >> e.queuedBits - 6 & 63;
      r(vs[s]), e.queuedBits -= 6;
    }
}
function Aa(t, e, r) {
  const s = jh[t];
  if (s > -1)
    for (e.queue = e.queue << 6 | s, e.queuedBits += 6; e.queuedBits >= 8; )
      r(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (s === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Vi(t) {
  const e = [], r = (o) => {
    e.push(String.fromCodePoint(o));
  }, s = {
    utf8seq: 0,
    codepoint: 0
  }, n = { queue: 0, queuedBits: 0 }, i = (o) => {
    Lh(o, s, r);
  };
  for (let o = 0; o < t.length; o += 1)
    Aa(t.charCodeAt(o), n, i);
  return e.join("");
}
function $h(t, e) {
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
function Nh(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    let s = t.charCodeAt(r);
    if (s > 55295 && s <= 56319) {
      const n = (s - 55296) * 1024 & 65535;
      s = (t.charCodeAt(r + 1) - 56320 & 65535 | n) + 65536, r += 1;
    }
    $h(s, e);
  }
}
function Lh(t, e, r) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      r(t);
      return;
    }
    for (let s = 1; s < 6; s += 1)
      if ((t >> 7 - s & 1) === 0) {
        e.utf8seq = s;
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
function er(t) {
  const e = [], r = { queue: 0, queuedBits: 0 }, s = (n) => {
    e.push(n);
  };
  for (let n = 0; n < t.length; n += 1)
    Aa(t.charCodeAt(n), r, s);
  return new Uint8Array(e);
}
function Uh(t) {
  const e = [];
  return Nh(t, (r) => e.push(r)), new Uint8Array(e);
}
function Ct(t) {
  const e = [], r = { queue: 0, queuedBits: 0 }, s = (n) => {
    e.push(n);
  };
  return t.forEach((n) => Wi(n, r, s)), Wi(null, r, s), e.join("");
}
function Dh(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function Bh() {
  return Symbol("auth-callback");
}
const fe = () => typeof window < "u" && typeof document < "u", Tt = {
  tested: !1,
  writable: !1
}, Ra = () => {
  if (!fe())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Tt.tested)
    return Tt.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Tt.tested = !0, Tt.writable = !0;
  } catch {
    Tt.tested = !0, Tt.writable = !1;
  }
  return Tt.writable;
};
function Mh(t) {
  const e = {}, r = new URL(t);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return r.searchParams.forEach((s, n) => {
    e[n] = s;
  }), e;
}
const Oa = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), Hh = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Jt = async (t, e, r) => {
  await t.setItem(e, JSON.stringify(r));
}, At = async (t, e) => {
  const r = await t.getItem(e);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return null;
  }
}, de = async (t, e) => {
  await t.removeItem(e);
};
class $s {
  constructor() {
    this.promise = new $s.promiseConstructor((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
}
$s.promiseConstructor = Promise;
function rs(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new Tn("Invalid JWT structure");
  for (let s = 0; s < e.length; s++)
    if (!Rh.test(e[s]))
      throw new Tn("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Vi(e[0])),
    payload: JSON.parse(Vi(e[1])),
    signature: er(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Fh(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function qh(t, e) {
  return new Promise((s, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await t(i);
          if (!e(i, null, o)) {
            s(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            n(o);
            return;
          }
        }
    })();
  });
}
function Kh(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function Wh() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", s = r.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += r.charAt(Math.floor(Math.random() * s));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, Kh).join("");
}
async function Vh(t) {
  const r = new TextEncoder().encode(t), s = await crypto.subtle.digest("SHA-256", r), n = new Uint8Array(s);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
async function zh(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const r = await Vh(t);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ht(t, e, r = !1) {
  const s = Wh();
  let n = s;
  r && (n += "/recovery"), await Jt(t, `${e}-code-verifier`, n);
  const i = await zh(s);
  return [i, s === i ? "plain" : "s256"];
}
const Jh = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Gh(t) {
  const e = t.headers.get(kn);
  if (!e || !e.match(Jh))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Yh(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function Xh(t) {
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
const Qh = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function rt(t) {
  if (!Qh.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function je(t) {
  if (!t.passkey)
    throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
}
function Zs() {
  const t = {};
  return new Proxy(t, {
    get: (e, r) => {
      if (r === "__isUserNotAvailableProxy")
        return !0;
      if (typeof r == "symbol") {
        const s = r.toString();
        if (s === "Symbol(Symbol.toPrimitive)" || s === "Symbol(Symbol.toStringTag)" || s === "Symbol(util.inspect.custom)")
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
function Zh(t, e) {
  return new Proxy(t, {
    get: (r, s, n) => {
      if (s === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof s == "symbol") {
        const i = s.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, s, n);
      }
      return !e.value && typeof s == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(r, s, n);
    }
  });
}
function zi(t) {
  return JSON.parse(JSON.stringify(t));
}
const Ot = (t) => {
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
}, ed = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function Ji(t) {
  var e;
  if (!Hh(t))
    throw new En(Ot(t), 0);
  if (ed.includes(t.status))
    throw new En(Ot(t), t.status);
  let r;
  try {
    r = await t.json();
  } catch (i) {
    throw new Ue(Ot(i), i);
  }
  let s;
  const n = Gh(t);
  if (n && n.getTime() >= Ta["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? s = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (s = r.error_code), s) {
    if (s === "weak_password")
      throw new qi(Ot(r), t.status, ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (s === "session_not_found")
      throw new ue();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new qi(Ot(r), t.status, r.weak_password.reasons);
  throw new Ch(Ot(r), t.status || 500, s);
}
const td = (t, e, r, s) => {
  const n = { method: t, headers: e?.headers || {} };
  return t === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e?.headers), n.body = JSON.stringify(s), Object.assign(Object.assign({}, n), r));
};
async function N(t, e, r, s) {
  var n;
  const i = Object.assign({}, s?.headers);
  i[kn] || (i[kn] = Ta["2024-01-01"].name), s?.jwt && (i.Authorization = `Bearer ${s.jwt}`);
  const o = (n = s?.query) !== null && n !== void 0 ? n : {};
  s?.redirectTo && (o.redirect_to = s.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await rd(t, e, r + a, {
    headers: i,
    noResolveJson: s?.noResolveJson
  }, {}, s?.body);
  return s?.xform ? s?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function rd(t, e, r, s, n, i) {
  const o = td(e, s, n, i);
  let a;
  try {
    a = await t(r, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new En(Ot(l), 0);
  }
  if (a.ok || await Ji(a), s?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await Ji(l);
  }
}
function Re(t) {
  var e;
  let r = null;
  id(t) && (r = Object.assign({}, t), t.expires_at || (r.expires_at = Dh(t.expires_in)));
  const s = (e = t.user) !== null && e !== void 0 ? e : null;
  return { data: { session: r, user: s }, error: null };
}
function Gi(t) {
  const e = Re(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((r, s) => r && typeof s == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function yt(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function sd(t) {
  return { data: t, error: null };
}
function nd(t) {
  const { action_link: e, email_otp: r, hashed_token: s, redirect_to: n, verification_type: i } = t, o = Ps(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: r,
    hashed_token: s,
    redirect_to: n,
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
function Yi(t) {
  return t;
}
function id(t) {
  return !!t.access_token && !!t.refresh_token && !!t.expires_in;
}
const en = ["global", "local", "others"];
class od {
  _encodePathSegment(e) {
    if (e === "." || e === "..")
      throw new sr("Invalid path segment");
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
  constructor({ url: e = "", headers: r = {}, fetch: s, experimental: n }) {
    this.url = e, this.headers = r, this.fetch = Oa(s), this.experimental = n ?? {}, this.mfa = {
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
  async signOut(e, r = en[0]) {
    if (en.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${en.join(", ")}`);
    try {
      return await N(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (x(s))
        return { data: null, error: s };
      throw s;
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
      return await N(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: yt
      });
    } catch (s) {
      if (x(s))
        return { data: { user: null }, error: s };
      throw s;
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
      const { options: r } = e, s = Ps(e, ["options"]), n = Object.assign(Object.assign({}, s), r);
      return "newEmail" in s && (n.new_email = s?.newEmail, delete n.newEmail), await N(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: nd,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (x(r))
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
      return await N(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: yt
      });
    } catch (r) {
      if (x(r))
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
    var r, s, n, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await N(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (r = e?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && s !== void 0 ? s : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Yi
      });
      if (u.error)
        throw u.error;
      const h = await u.json(), f = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, p = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((y) => {
        const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), T = JSON.parse(y.split(";")[1].split("=")[1]);
        c[`${T}Page`] = v;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, h), c), error: null };
    } catch (c) {
      if (x(c))
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
    rt(e);
    try {
      return await N(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: yt
      });
    } catch (r) {
      if (x(r))
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
    rt(e);
    try {
      return await N(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: r,
        headers: this.headers,
        xform: yt
      });
    } catch (s) {
      if (x(s))
        return { data: { user: null }, error: s };
      throw s;
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
    rt(e);
    try {
      return await N(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: yt
      });
    } catch (s) {
      if (x(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(e) {
    rt(e.userId);
    try {
      const { data: r, error: s } = await N(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: r, error: s };
    } catch (r) {
      if (x(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(e) {
    rt(e.userId), rt(e.id);
    try {
      return { data: await N(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (x(r))
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
    var r, s, n, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await N(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (r = e?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && s !== void 0 ? s : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Yi
      });
      if (u.error)
        throw u.error;
      const h = await u.json(), f = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, p = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((y) => {
        const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), T = JSON.parse(y.split(";")[1].split("=")[1]);
        c[`${T}Page`] = v;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, h), c), error: null };
    } catch (c) {
      if (x(c))
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
      return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (x(r))
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
      return await N(this.fetch, "GET", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (r) {
      if (x(r))
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
      const s = this._encodePathSegment(e);
      return await N(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${s}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (s) {
      if (x(s))
        return { data: null, error: s };
      throw s;
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
      return await N(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (x(r))
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
      return await N(this.fetch, "POST", `${this.url}/admin/oauth/clients/${r}/regenerate_secret`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (r) {
      if (x(r))
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
      return e?.type && (r.type = e.type), await N(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: r,
        xform: (s) => {
          var n;
          return { data: { providers: (n = s?.providers) !== null && n !== void 0 ? n : [] }, error: null };
        }
      });
    } catch (r) {
      if (x(r))
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
      return await N(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (x(r))
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
      return await N(this.fetch, "GET", `${this.url}/admin/custom-providers/${r}`, {
        headers: this.headers,
        xform: (s) => ({ data: s, error: null })
      });
    } catch (r) {
      if (x(r))
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
      const s = this._encodePathSegment(e);
      return await N(this.fetch, "PUT", `${this.url}/admin/custom-providers/${s}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (s) {
      if (x(s))
        return { data: null, error: s };
      throw s;
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
      return await N(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${r}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (x(r))
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
    je(this.experimental), rt(e.userId);
    try {
      return await N(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, { headers: this.headers, xform: (r) => ({ data: r, error: null }) });
    } catch (r) {
      if (x(r))
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
    je(this.experimental), rt(e.userId), rt(e.passkeyId);
    try {
      return await N(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, { headers: this.headers, noResolveJson: !0 }), { data: null, error: null };
    } catch (r) {
      if (x(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function Xi(t = {}) {
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
const Ve = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Ra() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ca extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Qi extends Ca {
}
async function ad(t, e, r) {
  Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const s = new globalThis.AbortController();
  let n;
  e > 0 && (n = setTimeout(() => {
    s.abort(), Ve.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e)), await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(t, e === 0 ? {
      mode: "exclusive",
      ifAvailable: !0
    } : {
      mode: "exclusive",
      signal: s.signal
    }, async (i) => {
      if (i) {
        clearTimeout(n), Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, i.name);
        try {
          return await r();
        } finally {
          Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, i.name);
        }
      } else {
        if (e === 0)
          throw Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Qi(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
        if (Ve.debug)
          try {
            const o = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "));
          } catch (o) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(n), await r();
      }
    });
  } catch (i) {
    if (e > 0 && clearTimeout(n), i !== null && typeof i == "object" && "name" in i && i.name === "AbortError" && e > 0) {
      if (s.signal.aborted)
        return Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", t), console.warn(`@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, {
          mode: "exclusive",
          steal: !0
        }, async (o) => {
          if (o) {
            Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", t, o.name);
            try {
              return await r();
            } finally {
              Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", t, o.name);
            }
          } else
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await r();
        }));
      throw Ve.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", t), new Qi(`Lock "${t}" was released because another request stole it`);
    }
    throw i;
  }
}
function ld() {
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
function xa(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function cd(t) {
  return parseInt(t, 16);
}
function ud(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (s) => s.toString(16).padStart(2, "0")).join("");
}
function hd(t) {
  var e;
  const { chainId: r, domain: s, expirationTime: n, issuedAt: i = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: c, scheme: u, uri: h, version: f } = t;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!s)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!h)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((e = t.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`);
  }
  const p = xa(t.address), y = u ? `${u}://${s}` : s, v = t.statement ? `${t.statement}
` : "", T = `${y} wants you to sign in with your Ethereum account:
${p}

${v}`;
  let _ = `URI: ${h}
Version: ${f}
Chain ID: ${r}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
  if (n && (_ += `
Expiration Time: ${n.toISOString()}`), a && (_ += `
Not Before: ${a.toISOString()}`), l && (_ += `
Request ID: ${l}`), c) {
    let R = `
Resources:`;
    for (const m of c) {
      if (!m || typeof m != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${m}`);
      R += `
- ${m}`;
    }
    _ += R;
  }
  return `${T}
${_}`;
}
class le extends Error {
  constructor({ message: e, code: r, cause: s, name: n }) {
    var i;
    super(e, { cause: s }), this.__isWebAuthnError = !0, this.name = (i = n ?? (s instanceof Error ? s.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class ws extends le {
  constructor(e, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function dd({ error: t, options: e }) {
  var r, s, n;
  const { publicKey: i } = e;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new le({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else if (t.name === "ConstraintError") {
    if (((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new le({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((s = i.authenticatorSelection) === null || s === void 0 ? void 0 : s.userVerification) === "required"
    )
      return new le({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t
      });
    if (((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
      return new le({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t
      });
  } else {
    if (t.name === "InvalidStateError")
      return new le({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t
      });
    if (t.name === "NotAllowedError")
      return new le({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new le({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: t
      }) : new le({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: t
      });
    if (t.name === "SecurityError") {
      const o = window.location.hostname;
      if (Pa(o)) {
        if (i.rp.id !== o)
          return new le({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new le({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new le({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t
        });
    } else if (t.name === "UnknownError")
      return new le({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new le({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
function fd({ error: t, options: e }) {
  const { publicKey: r } = e;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new le({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else {
    if (t.name === "NotAllowedError")
      return new le({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "SecurityError") {
      const s = window.location.hostname;
      if (Pa(s)) {
        if (r.rpId !== s)
          return new le({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new le({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "UnknownError")
      return new le({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new le({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
class pd {
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
const An = new pd();
function Zi(t) {
  if (!t)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      t
    );
  const { challenge: e, user: r, excludeCredentials: s } = t, n = Ps(
    t,
    ["challenge", "user", "excludeCredentials"]
  ), i = er(e).buffer, o = Object.assign(Object.assign({}, r), { id: er(r.id).buffer }), a = Object.assign(Object.assign({}, n), {
    challenge: i,
    user: o
  });
  if (s && s.length > 0) {
    a.excludeCredentials = new Array(s.length);
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: er(c.id).buffer,
        type: c.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: c.transports
      });
    }
  }
  return a;
}
function eo(t) {
  if (!t)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: r } = t, s = Ps(
    t,
    ["challenge", "allowCredentials"]
  ), n = er(e).buffer, i = Object.assign(Object.assign({}, s), { challenge: n });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: er(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return i;
}
function to(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const r = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: Ct(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: Ct(new Uint8Array(t.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function ro(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const r = t, s = t.getClientExtensionResults(), n = t.response;
  return {
    id: t.id,
    rawId: t.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Ct(new Uint8Array(n.authenticatorData)),
      clientDataJSON: Ct(new Uint8Array(n.clientDataJSON)),
      signature: Ct(new Uint8Array(n.signature)),
      userHandle: n.userHandle ? Ct(new Uint8Array(n.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: s,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Pa(t) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
  );
}
function bs() {
  var t, e;
  return !!(fe() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function Ia(t) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new ws("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new ws("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: dd({
        error: e,
        options: t
      })
    };
  }
}
async function ja(t) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new ws("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new ws("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: fd({
        error: e,
        options: t
      })
    };
  }
}
const gd = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, md = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function _s(...t) {
  const e = (n) => n !== null && typeof n == "object" && !Array.isArray(n), r = (n) => n instanceof ArrayBuffer || ArrayBuffer.isView(n), s = {};
  for (const n of t)
    if (n)
      for (const i in n) {
        const o = n[i];
        if (o !== void 0)
          if (Array.isArray(o))
            s[i] = o;
          else if (r(o))
            s[i] = o;
          else if (e(o)) {
            const a = s[i];
            e(a) ? s[i] = _s(a, o) : s[i] = _s(o);
          } else
            s[i] = o;
      }
  return s;
}
function yd(t, e) {
  return _s(gd, t, e || {});
}
function vd(t, e) {
  return _s(md, t, e || {});
}
class wd {
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
  async _challenge({ factorId: e, webauthn: r, friendlyName: s, signal: n }, i) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: r
      });
      if (!a)
        return { data: null, error: l };
      const c = n ?? An.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: u } = a.webauthn.credential_options.publicKey;
        if (!u.name) {
          const h = s;
          if (h)
            u.name = `${u.id}:${h}`;
          else {
            const p = (await this.client.getUser()).data.user, y = ((o = p?.user_metadata) === null || o === void 0 ? void 0 : o.name) || p?.email || p?.id || "User";
            u.name = `${u.id}:${y}`;
          }
        }
        u.displayName || (u.displayName = u.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const u = yd(a.webauthn.credential_options.publicKey, i?.create), { data: h, error: f } = await Ia({
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
          } : { data: null, error: f };
        }
        case "request": {
          const u = vd(a.webauthn.credential_options.publicKey, i?.request), { data: h, error: f } = await ja(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: u, signal: c }));
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
          } : { data: null, error: f };
        }
      }
    } catch (a) {
      return x(a) ? { data: null, error: a } : {
        data: null,
        error: new Ue("Unexpected error in challenge", a)
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
  async _verify({ challengeId: e, factorId: r, webauthn: s }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: e,
      webauthn: s
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
  async _authenticate({ factorId: e, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: s = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new sr("rpId is required for WebAuthn authentication")
      };
    try {
      if (!bs())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this.challenge({
        factorId: e,
        webauthn: { rpId: r, rpOrigins: s },
        signal: n
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
          rpOrigins: s,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return x(o) ? { data: null, error: o } : {
        data: null,
        error: new Ue("Unexpected error in authenticate", o)
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
  async _register({ friendlyName: e, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: s = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!r)
      return {
        data: null,
        error: new sr("rpId is required for WebAuthn registration")
      };
    try {
      if (!bs())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: e
      });
      if (!o)
        return await this.client.mfa.listFactors().then((u) => {
          var h;
          return (h = u.data) === null || h === void 0 ? void 0 : h.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === e && f.status !== "unverified");
        }).then((u) => u ? this.client.mfa.unenroll({ factorId: u?.id }) : void 0), { data: null, error: a };
      const { data: l, error: c } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: r, rpOrigins: s },
        signal: n
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: r,
          rpOrigins: s,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: c };
    } catch (o) {
      return x(o) ? { data: null, error: o } : {
        data: null,
        error: new Ue("Unexpected error in register", o)
      };
    }
  }
}
ld();
const bd = {
  url: Eh,
  storageKey: Th,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Ah,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds
  skipAutoInitialize: !1,
  experimental: {}
};
async function so(t, e, r) {
  return await r();
}
const Ft = {};
class Dr {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, r;
    return (r = (e = Ft[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(e) {
    Ft[this.storageKey] = Object.assign(Object.assign({}, Ft[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, r;
    return (r = (e = Ft[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Ft[this.storageKey] = Object.assign(Object.assign({}, Ft[this.storageKey]), { cachedAt: e });
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
    var r, s, n, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const o = Object.assign(Object.assign({}, bd), e);
    if (this.storageKey = o.storageKey, this.instanceID = (r = Dr.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Dr.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!o.debug, typeof o.debug == "function" && (this.logger = o.debug), this.instanceID > 0 && fe()) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(a), this.logDebugMessages && console.trace(a);
    }
    if (this.persistSession = o.persistSession, this.autoRefreshToken = o.autoRefreshToken, this.experimental = (s = o.experimental) !== null && s !== void 0 ? s : {}, this.admin = new od({
      url: o.url,
      headers: o.headers,
      fetch: o.fetch,
      experimental: this.experimental
    }), this.url = o.url, this.headers = o.headers, this.fetch = Oa(o.fetch), this.lock = o.lock || so, this.detectSessionInUrl = o.detectSessionInUrl, this.flowType = o.flowType, this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader, this.throwOnError = o.throwOnError, this.lockAcquireTimeout = o.lockAcquireTimeout, o.lock ? this.lock = o.lock : this.persistSession && fe() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = ad : this.lock = so, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new wd(this)
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
    }, this.persistSession ? (o.storage ? this.storage = o.storage : Ra() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Xi(this.memoryStorage)), o.userStorage && (this.userStorage = o.userStorage)) : (this.memoryStorage = {}, this.storage = Xi(this.memoryStorage)), fe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ea}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
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
      let r = {}, s = "none";
      if (fe() && (r = Mh(window.location.href), this._isImplicitGrantCallback(r) ? s = "implicit" : await this._isPKCECallback(r) && (s = "pkce")), fe() && this.detectSessionInUrl && s !== "none") {
        const { data: n, error: i } = await this._getSessionFromURL(r, s);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), Ph(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = n;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return x(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new Ue("Unexpected error during initialization", r)
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
    var r, s, n;
    try {
      const i = await N(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (s = (r = e?.options) === null || r === void 0 ? void 0 : r.data) !== null && s !== void 0 ? s : {},
          gotrue_meta_security: { captcha_token: (n = e?.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: Re
      }), { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (x(i))
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
    var r, s, n;
    try {
      let i;
      if ("email" in e) {
        const { email: u, password: h, options: f } = e;
        let p = null, y = null;
        this.flowType === "pkce" && ([p, y] = await Ht(this.storage, this.storageKey)), i = await N(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f?.emailRedirectTo,
          body: {
            email: u,
            password: h,
            data: (r = f?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: f?.captchaToken },
            code_challenge: p,
            code_challenge_method: y
          },
          xform: Re
        });
      } else if ("phone" in e) {
        const { phone: u, password: h, options: f } = e;
        i = await N(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: h,
            data: (s = f?.data) !== null && s !== void 0 ? s : {},
            channel: (n = f?.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: Re
        });
      } else
        throw new es("You must provide either an email or phone number and a password");
      const { data: o, error: a } = i;
      if (a || !o)
        return await de(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(i))
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
        r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Gi
        });
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        r = await N(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Gi
        });
      } else
        throw new es("You must provide either an email or phone number and a password");
      const { data: s, error: n } = r;
      if (n)
        return this._returnResult({ data: { user: null, session: null }, error: n });
      if (!s || !s.session || !s.user) {
        const i = new Mt();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), this._returnResult({
        data: Object.assign({ user: s.user, session: s.session }, s.weak_password ? { weakPassword: s.weak_password } : null),
        error: n
      });
    } catch (r) {
      if (x(r))
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
    var r, s, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
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
    var r, s, n, i, o, a, l, c, u, h, f;
    let p, y;
    if ("message" in e)
      p = e.message, y = e.signature;
    else {
      const { chain: v, wallet: T, statement: _, options: R } = e;
      let m;
      if (fe())
        if (typeof T == "object")
          m = T;
        else {
          const W = window;
          if ("ethereum" in W && typeof W.ethereum == "object" && "request" in W.ethereum && typeof W.ethereum.request == "function")
            m = W.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof T != "object" || !R?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        m = T;
      }
      const b = new URL((r = R?.url) !== null && r !== void 0 ? r : window.location.href), I = await m.request({
        method: "eth_requestAccounts"
      }).then((W) => W).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!I || I.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const $ = xa(I[0]);
      let B = (s = R?.signInWithEthereum) === null || s === void 0 ? void 0 : s.chainId;
      if (!B) {
        const W = await m.request({
          method: "eth_chainId"
        });
        B = cd(W);
      }
      const te = {
        domain: b.host,
        address: $,
        statement: _,
        uri: b.href,
        version: "1",
        chainId: B,
        nonce: (n = R?.signInWithEthereum) === null || n === void 0 ? void 0 : n.nonce,
        issuedAt: (o = (i = R?.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = R?.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = R?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (c = R?.signInWithEthereum) === null || c === void 0 ? void 0 : c.requestId,
        resources: (u = R?.signInWithEthereum) === null || u === void 0 ? void 0 : u.resources
      };
      p = hd(te), y = await m.request({
        method: "personal_sign",
        params: [ud(p), $]
      });
    }
    try {
      const { data: v, error: T } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: p,
          signature: y
        }, !((h = e.options) === null || h === void 0) && h.captchaToken ? { gotrue_meta_security: { captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: Re
      });
      if (T)
        throw T;
      if (!v || !v.session || !v.user) {
        const _ = new Mt();
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      }
      return v.session && (await this._saveSession(v.session), await this._notifyAllSubscribers("SIGNED_IN", v.session)), this._returnResult({ data: Object.assign({}, v), error: T });
    } catch (v) {
      if (x(v))
        return this._returnResult({ data: { user: null, session: null }, error: v });
      throw v;
    }
  }
  async signInWithSolana(e) {
    var r, s, n, i, o, a, l, c, u, h, f, p;
    let y, v;
    if ("message" in e)
      y = e.message, v = e.signature;
    else {
      const { chain: T, wallet: _, statement: R, options: m } = e;
      let b;
      if (fe())
        if (typeof _ == "object")
          b = _;
        else {
          const $ = window;
          if ("solana" in $ && typeof $.solana == "object" && ("signIn" in $.solana && typeof $.solana.signIn == "function" || "signMessage" in $.solana && typeof $.solana.signMessage == "function"))
            b = $.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof _ != "object" || !m?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        b = _;
      }
      const I = new URL((r = m?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in b && b.signIn) {
        const $ = await b.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, m?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: I.host,
          uri: I.href
        }), R ? { statement: R } : null));
        let B;
        if (Array.isArray($) && $[0] && typeof $[0] == "object")
          B = $[0];
        else if ($ && typeof $ == "object" && "signedMessage" in $ && "signature" in $)
          B = $;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in B && "signature" in B && (typeof B.signedMessage == "string" || B.signedMessage instanceof Uint8Array) && B.signature instanceof Uint8Array)
          y = typeof B.signedMessage == "string" ? B.signedMessage : new TextDecoder().decode(B.signedMessage), v = B.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in b) || typeof b.signMessage != "function" || !("publicKey" in b) || typeof b != "object" || !b.publicKey || !("toBase58" in b.publicKey) || typeof b.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        y = [
          `${I.host} wants you to sign in with your Solana account:`,
          b.publicKey.toBase58(),
          ...R ? ["", R, ""] : [""],
          "Version: 1",
          `URI: ${I.href}`,
          `Issued At: ${(n = (s = m?.signInWithSolana) === null || s === void 0 ? void 0 : s.issuedAt) !== null && n !== void 0 ? n : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = m?.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${m.signInWithSolana.notBefore}`] : [],
          ...!((o = m?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`] : [],
          ...!((a = m?.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${m.signInWithSolana.chainId}`] : [],
          ...!((l = m?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${m.signInWithSolana.nonce}`] : [],
          ...!((c = m?.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${m.signInWithSolana.requestId}`] : [],
          ...!((h = (u = m?.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || h === void 0) && h.length ? [
            "Resources",
            ...m.signInWithSolana.resources.map((B) => `- ${B}`)
          ] : []
        ].join(`
`);
        const $ = await b.signMessage(new TextEncoder().encode(y), "utf8");
        if (!$ || !($ instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        v = $;
      }
    }
    try {
      const { data: T, error: _ } = await N(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: y, signature: Ct(v) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (p = e.options) === null || p === void 0 ? void 0 : p.captchaToken } } : null),
        xform: Re
      });
      if (_)
        throw _;
      if (!T || !T.session || !T.user) {
        const R = new Mt();
        return this._returnResult({ data: { user: null, session: null }, error: R });
      }
      return T.session && (await this._saveSession(T.session), await this._notifyAllSubscribers("SIGNED_IN", T.session)), this._returnResult({ data: Object.assign({}, T), error: _ });
    } catch (T) {
      if (x(T))
        return this._returnResult({ data: { user: null, session: null }, error: T });
      throw T;
    }
  }
  async _exchangeCodeForSession(e) {
    const r = await At(this.storage, `${this.storageKey}-code-verifier`), [s, n] = (r ?? "").split("/");
    try {
      if (!s && this.flowType === "pkce")
        throw new Ih();
      const { data: i, error: o } = await N(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: s
        },
        xform: Re
      });
      if (await de(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new Mt();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers(n === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: o });
    } catch (i) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(i))
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
      const { options: r, provider: s, token: n, access_token: i, nonce: o } = e, a = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: s,
          id_token: n,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: Re
      }), { data: l, error: c } = a;
      if (c)
        return this._returnResult({ data: { user: null, session: null }, error: c });
      if (!l || !l.session || !l.user) {
        const u = new Mt();
        return this._returnResult({ data: { user: null, session: null }, error: u });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: c });
    } catch (r) {
      if (x(r))
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
    var r, s, n, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await Ht(this.storage, this.storageKey));
        const { error: h } = await N(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (r = l?.data) !== null && r !== void 0 ? r : {},
            create_user: (s = l?.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: h });
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: c, error: u } = await N(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (n = l?.data) !== null && n !== void 0 ? n : {},
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
      throw new es("You must provide either an email or phone number.");
    } catch (a) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(a))
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
    var r, s;
    try {
      let n, i;
      "options" in e && (n = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo, i = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken);
      const { data: o, error: a } = await N(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: Re
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, c = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (n) {
      if (x(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
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
    var r, s, n, i, o;
    try {
      let a = null, l = null;
      this.flowType === "pkce" && ([a, l] = await Ht(this.storage, this.storageKey));
      const c = await N(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && s !== void 0 ? s : void 0 }), !((n = e?.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: sd
      });
      return !((i = c.data) === null || i === void 0) && i.url && fe() && !(!((o = e.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(c.data.url), this._returnResult(c);
    } catch (a) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(a))
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
        const { data: { session: r }, error: s } = e;
        if (s)
          throw s;
        if (!r)
          throw new ue();
        const { error: n } = await N(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: n });
      });
    } catch (e) {
      if (x(e))
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
        const { email: s, type: n, options: i } = e, { error: o } = await N(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: s,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in e) {
        const { phone: s, type: n, options: i } = e, { data: o, error: a } = await N(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: s,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: a
        });
      }
      throw new es("You must provide either an email or phone number and a type");
    } catch (r) {
      if (x(r))
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
        const s = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await s, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const s = r();
          for (this.pendingInLock.push((async () => {
            try {
              await s;
            } catch {
            }
          })()), await s; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await s;
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
      const r = await At(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? e = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const s = e.expires_at ? e.expires_at * 1e3 - Date.now() < Xs : !1;
      if (this._debug("#__loadSession()", `session has${s ? "" : " not"} expired`, "expires_at", e.expires_at), !s) {
        if (this.userStorage) {
          const o = await At(this.userStorage, this.storageKey + "-user");
          o?.user ? e.user = o.user : e.user = Zs();
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          e.user = Zh(e.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: n }, error: null });
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
      return e ? await N(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: yt
      }) : await this._useSession(async (r) => {
        var s, n, i;
        const { data: o, error: a } = r;
        if (a)
          throw a;
        return !(!((s = o.session) === null || s === void 0) && s.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new ue() } : await N(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: yt
        });
      });
    } catch (r) {
      if (x(r))
        return Zr(r) && (await this._removeSession(), await de(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
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
      return await this._useSession(async (s) => {
        const { data: n, error: i } = s;
        if (i)
          throw i;
        if (!n.session)
          throw new ue();
        const o = n.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await Ht(this.storage, this.storageKey));
        const { data: c, error: u } = await N(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: yt
        });
        if (u)
          throw u;
        return o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (s) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(s))
        return this._returnResult({ data: { user: null }, error: s });
      throw s;
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
        throw new ue();
      const r = Date.now() / 1e3;
      let s = r, n = !0, i = null;
      const { payload: o } = rs(e.access_token);
      if (o.exp && (s = o.exp, n = s <= r), n) {
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
          expires_in: s - r,
          expires_at: s
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (r) {
      if (x(r))
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
        var s;
        if (!e) {
          const { data: o, error: a } = r;
          if (a)
            throw a;
          e = (s = o.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!e?.refresh_token)
          throw new ue();
        const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : n ? this._returnResult({ data: { user: n.user, session: n }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, r) {
    var s;
    try {
      if (!fe())
        throw new ts("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ts(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Fi("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ts("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Fi("No code detected.");
        const { data: m, error: b } = await this._exchangeCodeForSession(e.code);
        if (b)
          throw b;
        const I = new URL(window.location.href);
        return I.searchParams.delete("code"), window.history.replaceState(window.history.state, "", I.toString()), {
          data: { session: m.session, redirectType: (s = m.redirectType) !== null && s !== void 0 ? s : null },
          error: null
        };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: o, refresh_token: a, expires_in: l, expires_at: c, token_type: u } = e;
      if (!o || !l || !a || !u)
        throw new ts("No session defined in URL");
      const h = Math.round(Date.now() / 1e3), f = parseInt(l);
      let p = h + f;
      c && (p = parseInt(c));
      const y = p - h;
      y * 1e3 <= zt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${f}s`);
      const v = p - f;
      h - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, p, h) : h - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, p, h);
      const { data: T, error: _ } = await this._getUser(o);
      if (_)
        throw _;
      const R = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: o,
        expires_in: f,
        expires_at: p,
        refresh_token: a,
        token_type: u,
        user: T.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: R, redirectType: e.type }, error: null });
    } catch (n) {
      if (x(n))
        return this._returnResult({ data: { session: null, redirectType: null }, error: n });
      throw n;
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
    const r = await At(this.storage, `${this.storageKey}-code-verifier`);
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
      var s;
      const { data: n, error: i } = r;
      if (i && !Zr(i))
        return this._returnResult({ error: i });
      const o = (s = n.session) === null || s === void 0 ? void 0 : s.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(xh(a) && (a.status === 404 || a.status === 401 || a.status === 403) || Zr(a)))
          return this._returnResult({ error: a });
      }
      return e !== "others" && (await this._removeSession(), await de(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
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
    const r = Bh(), s = {
      id: r,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, s), (async () => (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: s } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (r) => {
      var s, n;
      try {
        const { data: { session: i }, error: o } = r;
        if (o)
          throw o;
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), Zr(i) ? console.warn(i) : console.error(i);
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
    let s = null, n = null;
    this.flowType === "pkce" && ([s, n] = await Ht(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await N(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: s,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (i) {
      if (await de(this.storage, `${this.storageKey}-code-verifier`), x(i))
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
      const { data: r, error: s } = await this.getUser();
      if (s)
        throw s;
      return this._returnResult({ data: { identities: (e = r.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (r) {
      if (x(r))
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
      const { data: s, error: n } = await this._useSession(async (i) => {
        var o, a, l, c, u;
        const { data: h, error: f } = i;
        if (f)
          throw f;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await N(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (u = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (n)
        throw n;
      return fe() && !(!((r = e.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(s?.url), this._returnResult({
        data: { provider: e.provider, url: s?.url },
        error: null
      });
    } catch (s) {
      if (x(s))
        return this._returnResult({ data: { provider: e.provider, url: null }, error: s });
      throw s;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (r) => {
      var s;
      try {
        const { error: n, data: { session: i } } = r;
        if (n)
          throw n;
        const { options: o, provider: a, token: l, access_token: c, nonce: u } = e, h = await N(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (s = i?.access_token) !== null && s !== void 0 ? s : void 0,
          body: {
            provider: a,
            id_token: l,
            access_token: c,
            nonce: u,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Re
        }), { data: f, error: p } = h;
        return p ? this._returnResult({ data: { user: null, session: null }, error: p }) : !f || !f.session || !f.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Mt()
        }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({ data: f, error: p }));
      } catch (n) {
        if (await de(this.storage, `${this.storageKey}-code-verifier`), x(n))
          return this._returnResult({ data: { user: null, session: null }, error: n });
        throw n;
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
        var s, n;
        const { data: i, error: o } = r;
        if (o)
          throw o;
        return await N(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (r) {
      if (x(r))
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
      const s = Date.now();
      return await qh(async (n) => (n > 0 && await Fh(200 * Math.pow(2, n - 1)), this._debug(r, "refreshing attempt", n), await N(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Re
      })), (n, i) => {
        const o = 200 * Math.pow(2, n);
        return i && Qs(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - s < zt;
      });
    } catch (s) {
      if (this._debug(r, "error", s), x(s))
        return this._returnResult({ data: { session: null, user: null }, error: s });
      throw s;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, r) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", r, "url", s), fe() && !r.skipBrowserRedirect && window.location.assign(s), { data: { provider: e, url: s }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, r;
    const s = "#_recoverAndRefresh()";
    this._debug(s, "begin");
    try {
      const n = await At(this.storage, this.storageKey);
      if (n && this.userStorage) {
        let o = await At(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: n.user }, await Jt(this.userStorage, this.storageKey + "-user", o)), n.user = (e = o?.user) !== null && e !== void 0 ? e : Zs();
      } else if (n && !n.user && !n.user) {
        const o = await At(this.storage, this.storageKey + "-user");
        o && o?.user ? (n.user = o.user, await de(this.storage, this.storageKey + "-user"), await Jt(this.storage, this.storageKey, n)) : n.user = Zs();
      }
      if (this._debug(s, "session from storage", n), !this._isValidSession(n)) {
        this._debug(s, "session is not valid"), n !== null && await this._removeSession();
        return;
      }
      const i = ((r = n.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < Xs;
      if (this._debug(s, `session has${i ? "" : " not"} expired with margin of ${Xs}s`), i) {
        if (this.autoRefreshToken && n.refresh_token) {
          const { error: o } = await this._callRefreshToken(n.refresh_token);
          o && (console.error(o), Qs(o) || (this._debug(s, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (n.user && n.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(n.access_token);
          !a && o?.user ? (n.user = o.user, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n)) : this._debug(s, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(s, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", n);
    } catch (n) {
      this._debug(s, "error", n), console.error(n);
      return;
    } finally {
      this._debug(s, "end");
    }
  }
  async _callRefreshToken(e) {
    var r, s;
    if (!e)
      throw new ue();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new $s();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!i.session)
        throw new ue();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if (this._debug(n, "error", i), x(i)) {
        const o = { data: null, error: i };
        return Qs(i) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(o), o;
      }
      throw (s = this.refreshingDeferred) === null || s === void 0 || s.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, r, s = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", r, `broadcast = ${s}`);
    try {
      this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: r });
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
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await de(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, e), s = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !s && r.user && await Jt(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const n = Object.assign({}, r);
      delete n.user;
      const i = zi(n);
      await Jt(this.storage, this.storageKey, i);
    } else {
      const n = zi(r);
      await Jt(this.storage, this.storageKey, n);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await de(this.storage, this.storageKey), await de(this.storage, this.storageKey + "-code-verifier"), await de(this.storage, this.storageKey + "-user"), this.userStorage && await de(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      e && fe() && window?.removeEventListener && window.removeEventListener("visibilitychange", e);
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
    const e = setInterval(() => this._autoRefreshTokenTick(), zt);
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
              const { data: { session: s } } = r;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((s.expires_at * 1e3 - e) / zt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${zt}ms, refresh threshold is ${Sn} ticks`), n <= Sn && await this._callRefreshToken(s.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e instanceof Ca)
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
    if (this._debug("#_handleVisibilityChange()"), !fe() || !window?.addEventListener)
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
  async _getUrlForProvider(e, r, s) {
    const n = [`provider=${encodeURIComponent(r)}`];
    if (s?.redirectTo && n.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s?.scopes && n.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await Ht(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      n.push(a.toString());
    }
    if (s?.queryParams) {
      const i = new URLSearchParams(s.queryParams);
      n.push(i.toString());
    }
    return s?.skipBrowserRedirect && n.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (r) => {
        var s;
        const { data: n, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : await N(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (s = n?.session) === null || s === void 0 ? void 0 : s.access_token
        });
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (r) => {
        var s, n;
        const { data: i, error: o } = r;
        if (o)
          return this._returnResult({ data: null, error: o });
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: c } = await N(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (s = i?.session) === null || s === void 0 ? void 0 : s.access_token
        });
        return c ? this._returnResult({ data: null, error: c }) : (e.factorType === "totp" && l.type === "totp" && (!((n = l?.totp) === null || n === void 0) && n.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: n, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? to(e.webauthn.credential_response) : ro(e.webauthn.credential_response) })
          } : { code: e.code }), { data: a, error: l } = await N(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (s = n?.session) === null || s === void 0 ? void 0 : s.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (x(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var s;
          const { data: n, error: i } = r;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = await N(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (s = n?.session) === null || s === void 0 ? void 0 : s.access_token
          });
          if (o.error)
            return o;
          const { data: a } = o;
          if (a.type !== "webauthn")
            return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Zi(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: eo(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (x(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: r, error: s } = await this._challenge({
      factorId: e.factorId
    });
    return s ? this._returnResult({ data: null, error: s }) : await this._verify({
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
    const { data: { user: r }, error: s } = await this.getUser();
    if (s)
      return { data: null, error: s };
    const n = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (e = r?.factors) !== null && e !== void 0 ? e : [])
      n.all.push(i), i.status === "verified" && n[i.factor_type].push(i);
    return {
      data: n,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(e) {
    var r, s, n, i;
    if (e)
      try {
        const { payload: p } = rs(e);
        let y = null;
        p.aal && (y = p.aal);
        let v = y;
        const { data: { user: T }, error: _ } = await this.getUser(e);
        if (_)
          return this._returnResult({ data: null, error: _ });
        ((s = (r = T?.factors) === null || r === void 0 ? void 0 : r.filter((b) => b.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (v = "aal2");
        const m = p.amr || [];
        return { data: { currentLevel: y, nextLevel: v, currentAuthenticationMethods: m }, error: null };
      } catch (p) {
        if (x(p))
          return this._returnResult({ data: null, error: p });
        throw p;
      }
    const { data: { session: o }, error: a } = await this.getSession();
    if (a)
      return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = rs(o.access_token);
    let c = null;
    l.aal && (c = l.aal);
    let u = c;
    ((i = (n = o.user.factors) === null || n === void 0 ? void 0 : n.filter((p) => p.status === "verified")) !== null && i !== void 0 ? i : []).length > 0 && (u = "aal2");
    const f = l.amr || [];
    return { data: { currentLevel: c, nextLevel: u, currentAuthenticationMethods: f }, error: null };
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
        const { data: { session: s }, error: n } = r;
        return n ? this._returnResult({ data: null, error: n }) : s ? await N(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: s.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new ue() });
      });
    } catch (r) {
      if (x(r))
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
      return await this._useSession(async (s) => {
        const { data: { session: n }, error: i } = s;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new ue() });
        const o = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && fe() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (s) {
      if (x(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, r) {
    try {
      return await this._useSession(async (s) => {
        const { data: { session: n }, error: i } = s;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new ue() });
        const o = await N(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && fe() && !r?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (s) {
      if (x(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: s } = e;
        return s ? this._returnResult({ data: null, error: s }) : r ? await N(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (n) => ({ data: n, error: null })
        }) : this._returnResult({ data: null, error: new ue() });
      });
    } catch (e) {
      if (x(e))
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
        const { data: { session: s }, error: n } = r;
        return n ? this._returnResult({ data: null, error: n }) : s ? (await N(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: s.access_token,
          query: { client_id: e.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new ue() });
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(e, r = { keys: [] }) {
    let s = r.keys.find((a) => a.kid === e);
    if (s)
      return s;
    const n = Date.now();
    if (s = this.jwks.keys.find((a) => a.kid === e), s && this.jwks_cached_at + Oh > n)
      return s;
    const { data: i, error: o } = await N(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = n, s = i.keys.find((a) => a.kid === e), !s) ? null : s;
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
      let s = e;
      if (!s) {
        const { data: p, error: y } = await this.getSession();
        if (y || !p.session)
          return this._returnResult({ data: null, error: y });
        s = p.session.access_token;
      }
      const { header: n, payload: i, signature: o, raw: { header: a, payload: l } } = rs(s);
      r?.allowExpired || Yh(i.exp);
      const c = !n.alg || n.alg.startsWith("HS") || !n.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(n.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!c) {
        const { error: p } = await this.getUser(s);
        if (p)
          throw p;
        return {
          data: {
            claims: i,
            header: n,
            signature: o
          },
          error: null
        };
      }
      const u = Xh(n.alg), h = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, h, o, Uh(`${a}.${l}`)))
        throw new Tn("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: n,
          signature: o
        },
        error: null
      };
    } catch (s) {
      if (x(s))
        return this._returnResult({ data: null, error: s });
      throw s;
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
    var r, s, n;
    je(this.experimental);
    try {
      if (!bs())
        return this._returnResult({
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        });
      const { data: i, error: o } = await this._startPasskeyAuthentication({
        options: { captchaToken: (r = e?.options) === null || r === void 0 ? void 0 : r.captchaToken }
      });
      if (o || !i)
        return this._returnResult({ data: null, error: o });
      const a = eo(i.options), l = (n = (s = e?.options) === null || s === void 0 ? void 0 : s.signal) !== null && n !== void 0 ? n : An.createNewAbortSignal(), { data: c, error: u } = await ja({
        publicKey: a,
        signal: l
      });
      if (u || !c)
        return this._returnResult({
          data: null,
          error: u ?? new Ue("WebAuthn ceremony failed", null)
        });
      const h = ro(c);
      return this._verifyPasskeyAuthentication({
        challengeId: i.challenge_id,
        credential: h
      });
    } catch (i) {
      if (x(i))
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
    var r, s;
    je(this.experimental);
    try {
      if (!bs())
        return this._returnResult({
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        });
      const { data: n, error: i } = await this._startPasskeyRegistration();
      if (i || !n)
        return this._returnResult({ data: null, error: i });
      const o = Zi(n.options), a = (s = (r = e?.options) === null || r === void 0 ? void 0 : r.signal) !== null && s !== void 0 ? s : An.createNewAbortSignal(), { data: l, error: c } = await Ia({
        publicKey: o,
        signal: a
      });
      if (c || !l)
        return this._returnResult({
          data: null,
          error: c ?? new Ue("WebAuthn ceremony failed", null)
        });
      const u = to(l);
      return this._verifyPasskeyRegistration({
        challengeId: n.challenge_id,
        credential: u
      });
    } catch (n) {
      if (x(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Start passkey registration for the current authenticated user.
   * Returns WebAuthn credential creation options to pass to navigator.credentials.create().
   */
  async _startPasskeyRegistration() {
    je(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: s } = e;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!r)
          return this._returnResult({ data: null, error: new ue() });
        const { data: n, error: i } = await N(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: r.access_token,
          body: {}
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: n, error: null });
      });
    } catch (e) {
      if (x(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Verify passkey registration with the credential response.
   * The credentialResponse should be the serialized output of navigator.credentials.create().
   */
  async _verifyPasskeyRegistration(e) {
    je(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: n } = r;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!s)
          return this._returnResult({ data: null, error: new ue() });
        const { data: i, error: o } = await N(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: s.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        return o ? this._returnResult({ data: null, error: o }) : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (x(r))
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
    je(this.experimental);
    try {
      const { data: s, error: n } = await N(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: { captcha_token: (r = e?.options) === null || r === void 0 ? void 0 : r.captchaToken }
        }
      });
      return n ? this._returnResult({ data: null, error: n }) : this._returnResult({ data: s, error: null });
    } catch (s) {
      if (x(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Verify passkey authentication and create a session.
   * The credential should be the serialized output of navigator.credentials.get().
   */
  async _verifyPasskeyAuthentication(e) {
    je(this.experimental);
    try {
      const { data: r, error: s } = await N(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: Re
      });
      return s ? this._returnResult({ data: null, error: s }) : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({ data: r, error: null }));
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * List all passkeys for the current user.
   */
  async _listPasskeys() {
    je(this.experimental);
    try {
      return await this._useSession(async (e) => {
        const { data: { session: r }, error: s } = e;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!r)
          return this._returnResult({ data: null, error: new ue() });
        const { data: n, error: i } = await N(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (o) => ({ data: o, error: null })
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: n, error: null });
      });
    } catch (e) {
      if (x(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Update a passkey.
   */
  async _updatePasskey(e) {
    je(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: n } = r;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!s)
          return this._returnResult({ data: null, error: new ue() });
        const { data: i, error: o } = await N(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: s.access_token,
          body: { friendly_name: e.friendlyName }
        });
        return o ? this._returnResult({ data: null, error: o }) : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Delete a passkey.
   */
  async _deletePasskey(e) {
    je(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const { data: { session: s }, error: n } = r;
        if (n)
          return this._returnResult({ data: null, error: n });
        if (!s)
          return this._returnResult({ data: null, error: new ue() });
        const { error: i } = await N(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: s.access_token,
          noResolveJson: !0
        });
        return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: null, error: null });
      });
    } catch (r) {
      if (x(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
Dr.nextInstanceID = {};
const _d = Dr, Sd = "2.106.1";
let yr = "";
typeof Deno < "u" ? yr = "deno" : typeof document < "u" ? yr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? yr = "react-native" : yr = "node";
const kd = { "X-Client-Info": `supabase-js-${yr}/${Sd}` }, Ed = { headers: kd }, Td = { schema: "public" }, Ad = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Rd = {}, Od = {
  enabled: !1,
  respectSamplingDecision: !0
};
function Cd(t, e, r, s) {
  function n(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        c(s.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(s.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? i(u.value) : n(u.value).then(a, l);
    }
    c((s = s.apply(t, [])).next());
  });
}
let tn = null;
const xd = "@opentelemetry/api";
function Pd() {
  return tn === null && (tn = import(
    /* webpackIgnore: true */
    /* turbopackIgnore: true */
    /* @vite-ignore */
    xd
  ).catch(() => null)), tn;
}
function Id() {
  return Cd(this, void 0, void 0, function* () {
    try {
      const t = yield Pd();
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
function jd(t) {
  if (!t || typeof t != "string") return null;
  const e = t.split("-");
  if (e.length !== 4) return null;
  const [r, s, n, i] = e;
  if (r.length !== 2 || s.length !== 32 || n.length !== 16 || i.length !== 2) return null;
  const o = /^[0-9a-f]+$/i;
  return !o.test(r) || !o.test(s) || !o.test(n) || !o.test(i) || s === "00000000000000000000000000000000" || n === "0000000000000000" ? null : {
    version: r,
    traceId: s,
    parentId: n,
    traceFlags: i,
    isSampled: (parseInt(i, 16) & 1) === 1
  };
}
function $d(t, e) {
  if (!t || !e || e.length === 0) return !1;
  let r;
  if (t instanceof URL) r = t;
  else try {
    r = new URL(t);
  } catch {
    return !1;
  }
  for (const s of e) try {
    if (typeof s == "string") {
      if (Nd(r.hostname, s)) return !0;
    } else if (s instanceof RegExp) {
      if (s.test(r.hostname)) return !0;
    } else if (typeof s == "function" && s(r))
      return !0;
  } catch {
    continue;
  }
  return !1;
}
function Nd(t, e) {
  if (e === t) return !0;
  if (e.startsWith("*.")) {
    const r = e.slice(2);
    if (t.endsWith(r) && (t === r || t.endsWith("." + r)))
      return !0;
  }
  return !1;
}
function Ld(t) {
  const e = [];
  try {
    const r = new URL(t);
    e.push(r.hostname);
  } catch {
  }
  return e.push("*.supabase.co", "*.supabase.in"), e.push("localhost", "127.0.0.1", "[::1]"), e;
}
function Br(t) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Br(t);
}
function Ud(t, e) {
  if (Br(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, e);
    if (Br(s) != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Dd(t) {
  var e = Ud(t, "string");
  return Br(e) == "symbol" ? e : e + "";
}
function Bd(t, e, r) {
  return (e = Dd(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function no(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? no(Object(r), !0).forEach(function(s) {
      Bd(t, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return t;
}
const Md = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), Hd = () => Headers, Fd = (t, e, r, s, n) => {
  const i = Md(s), o = Hd(), a = n?.enabled === !0, l = n?.respectSamplingDecision !== !1, c = a ? Ld(e) : null;
  return async (u, h) => {
    var f;
    const p = (f = await r()) !== null && f !== void 0 ? f : t;
    let y = new o(h?.headers);
    if (y.has("apikey") || y.set("apikey", t), y.has("Authorization") || y.set("Authorization", `Bearer ${p}`), c) {
      const v = await qd(u, c, l);
      v && (v.traceparent && !y.has("traceparent") && y.set("traceparent", v.traceparent), v.tracestate && !y.has("tracestate") && y.set("tracestate", v.tracestate), v.baggage && !y.has("baggage") && y.set("baggage", v.baggage));
    }
    return i(u, ie(ie({}, h), {}, { headers: y }));
  };
};
async function qd(t, e, r) {
  if (!$d(typeof t == "string" || t instanceof URL ? t : t.url, e)) return null;
  const s = await Id();
  if (!s || !s.traceparent) return null;
  if (r) {
    const n = jd(s.traceparent);
    if (n && !n.isSampled) return null;
  }
  return s;
}
function io(t) {
  return typeof t == "boolean" ? { enabled: t } : t;
}
function Kd(t) {
  return t.endsWith("/") ? t : t + "/";
}
function Wd(t, e) {
  var r, s, n, i, o, a;
  const { db: l, auth: c, realtime: u, global: h } = t, { db: f, auth: p, realtime: y, global: v } = e, T = io(t.tracePropagation), _ = io(e.tracePropagation), R = {
    db: ie(ie({}, f), l),
    auth: ie(ie({}, p), c),
    realtime: ie(ie({}, y), u),
    storage: {},
    global: ie(ie(ie({}, v), h), {}, { headers: ie(ie({}, (r = v?.headers) !== null && r !== void 0 ? r : {}), (s = h?.headers) !== null && s !== void 0 ? s : {}) }),
    tracePropagation: {
      enabled: (n = (i = T?.enabled) !== null && i !== void 0 ? i : _?.enabled) !== null && n !== void 0 ? n : !1,
      respectSamplingDecision: (o = (a = T?.respectSamplingDecision) !== null && a !== void 0 ? a : _?.respectSamplingDecision) !== null && o !== void 0 ? o : !0
    },
    accessToken: async () => ""
  };
  return t.accessToken ? R.accessToken = t.accessToken : delete R.accessToken, R;
}
function Vd(t) {
  const e = t?.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Kd(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var zd = class extends _d {
  constructor(t) {
    super(t);
  }
}, Jd = class {
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
    var s, n;
    this.supabaseUrl = t, this.supabaseKey = e;
    const i = Vd(t);
    if (!e) throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", i), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", i), this.storageUrl = new URL("storage/v1", i), this.functionsUrl = new URL("functions/v1", i);
    const o = `sb-${i.hostname.split(".")[0]}-auth-token`, a = {
      db: Td,
      realtime: Rd,
      auth: ie(ie({}, Ad), {}, { storageKey: o }),
      global: Ed,
      tracePropagation: Od
    }, l = Wd(r ?? {}, a);
    if (this.settings = l, this.storageKey = (s = l.auth.storageKey) !== null && s !== void 0 ? s : "", this.headers = (n = l.global.headers) !== null && n !== void 0 ? n : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (u, h) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`);
      } });
    else {
      var c;
      this.auth = this._initSupabaseAuthClient((c = l.auth) !== null && c !== void 0 ? c : {}, this.headers, l.global.fetch);
    }
    this.fetch = Fd(e, t, this._getAccessToken.bind(this), l.global.fetch, l.tracePropagation), this.realtime = this._initRealtimeClient(ie({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((u) => this.realtime.setAuth(u)).catch((u) => console.warn("Failed to set initial Realtime auth token:", u)), this.rest = new uu(new URL("rest/v1", i).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit
    }), this.storage = new kh(this.storageUrl.href, this.headers, this.fetch, r?.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new eu(this.functionsUrl.href, {
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
    const { data: s } = await t.auth.getSession();
    return (e = (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !== null && e !== void 0 ? e : t.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: e, detectSessionInUrl: r, storage: s, userStorage: n, storageKey: i, flowType: o, lock: a, debug: l, throwOnError: c, experimental: u, lockAcquireTimeout: h, skipAutoInitialize: f }, p, y) {
    const v = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new zd({
      url: this.authUrl.href,
      headers: ie(ie({}, v), p),
      storageKey: i,
      autoRefreshToken: t,
      persistSession: e,
      detectSessionInUrl: r,
      storage: s,
      userStorage: n,
      flowType: o,
      lock: a,
      debug: l,
      throwOnError: c,
      experimental: u,
      fetch: y,
      lockAcquireTimeout: h,
      skipAutoInitialize: f,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((T) => T.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new Vu(this.realtimeUrl.href, ie(ie({}, t), {}, { params: ie(ie({}, { apikey: this.supabaseKey }), t?.params) }));
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
const Gd = (t, e, r) => new Jd(t, e, r);
function Yd() {
  if (typeof window < "u") return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const r = e.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
Yd() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
function Xd(t, e) {
  return Gd(t, e, {
    auth: {
      persistSession: !1,
      autoRefreshToken: !1,
      detectSessionInUrl: !1
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
function Qd(t, e, r) {
  const s = `comment-widget:${e}`, n = t.channel(s).on(
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
  ).subscribe((i, o) => {
    (i === "CHANNEL_ERROR" || i === "TIMED_OUT") && console.warn("[comment-widget] realtime channel error:", i, o);
  });
  return {
    unsubscribe() {
      t.removeChannel(n);
    }
  };
}
const Jn = "__comment_widget_identity";
function Zd() {
  try {
    const t = window.localStorage.getItem(Jn);
    if (!t) return null;
    const e = JSON.parse(t);
    return typeof e.name == "string" && typeof e.email == "string" && e.name && e.email ? { name: e.name, email: e.email } : null;
  } catch {
    return null;
  }
}
function ef(t) {
  try {
    window.localStorage.setItem(Jn, JSON.stringify(t));
  } catch {
  }
}
function tf() {
  const t = /* @__PURE__ */ ye(Zd());
  function e(s) {
    t.value = s, ef(s);
  }
  function r() {
    t.value = null;
    try {
      window.localStorage.removeItem(Jn);
    } catch {
    }
  }
  return { identity: t, set: e, clear: r };
}
function rf() {
  const t = new URL(window.location.href);
  return t.hash = "", t.toString();
}
class $a extends Error {
  constructor(r, s) {
    super(r);
    me(this, "hint");
    this.name = "WidgetError", this.hint = r, s !== void 0 && (this.cause = s);
  }
}
function ss(t, e) {
  const r = t, s = r?.message ?? (t instanceof Error ? t.message : String(t ?? "")), n = s.toLowerCase();
  let i = e;
  return n.includes("row-level security") || n.includes("rls") ? i = "Database refused the write — RLS policies don't allow it. Re-run supabase/schema.sql." : n.includes("invalid api key") || n.includes("jwt") || r?.status === 401 ? i = "Invalid Supabase anon key. Double-check the credentials." : n.includes("failed to fetch") || n.includes("networkerror") ? i = "Couldn't reach Supabase. Check the project URL and your connection." : n.includes("not found") || r?.status === 404 ? i = "Supabase URL or table not found. Check the project URL and that the schema was run." : s && (i = `${e} (${s})`), new $a(i, t);
}
function sf(t, e) {
  const r = rf(), s = /* @__PURE__ */ ri([]), n = /* @__PURE__ */ ri({}), i = /* @__PURE__ */ ye(!0), o = /* @__PURE__ */ ye(null);
  let a = null;
  const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  async function u() {
    var m;
    i.value = !0, o.value = null;
    try {
      const { data: b, error: I } = await t.from("threads").select("*").eq("project_id", e).eq("page_url", r).order("created_at", { ascending: !0 });
      if (I) throw I;
      const $ = b ?? [];
      if (s.value = $, $.length === 0)
        n.value = {};
      else {
        const B = $.map((Pe) => Pe.id), { data: te, error: W } = await t.from("comments").select("*").in("thread_id", B).order("created_at", { ascending: !0 });
        if (W) throw W;
        const ke = {};
        for (const Pe of B) ke[Pe] = [];
        for (const Pe of te ?? [])
          (ke[m = Pe.thread_id] ?? (ke[m] = [])).push(Pe);
        n.value = ke;
      }
    } catch (b) {
      const I = ss(b, "Could not load comments.");
      o.value = I.hint, console.error("[comment-widget] failed to load threads:", b);
    } finally {
      i.value = !1;
    }
  }
  function h() {
    a = Qd(t, e, (m) => {
      m.table === "threads" ? f(m.type, m.row) : p(m.type, m.row);
    });
  }
  function f(m, b) {
    if (!(m !== "DELETE" && b.page_url !== r)) {
      if (m === "INSERT") {
        if (l.has(b.id)) {
          l.delete(b.id);
          return;
        }
        if (s.value.some((I) => I.id === b.id)) return;
        s.value = [...s.value, b], n.value = {
          ...n.value,
          [b.id]: n.value[b.id] ?? []
        };
      } else if (m === "UPDATE")
        s.value = s.value.map((I) => I.id === b.id ? b : I);
      else if (m === "DELETE") {
        s.value = s.value.filter(($) => $.id !== b.id);
        const I = { ...n.value };
        delete I[b.id], n.value = I;
      }
    }
  }
  function p(m, b) {
    if (m === "INSERT") {
      if (c.has(b.id)) {
        c.delete(b.id);
        return;
      }
      if (!s.value.some(($) => $.id === b.thread_id)) return;
      const I = n.value[b.thread_id] ?? [];
      if (I.some(($) => $.id === b.id)) return;
      n.value = {
        ...n.value,
        [b.thread_id]: [...I, b].sort(
          ($, B) => $.created_at < B.created_at ? -1 : 1
        )
      };
    } else if (m === "DELETE") {
      const I = n.value[b.thread_id];
      if (!I) return;
      n.value = {
        ...n.value,
        [b.thread_id]: I.filter(($) => $.id !== b.id)
      };
    }
  }
  async function y(m, b, I) {
    const { data: $, error: B } = await t.from("threads").insert({
      project_id: e,
      page_url: r,
      selector_path: m.selector,
      anchor_x_pct: m.x_pct,
      anchor_y_pct: m.y_pct,
      status: "open",
      created_by_name: I.name,
      created_by_email: I.email
    }).select().single();
    if (B || !$)
      throw console.error("[comment-widget] failed to create thread:", B), ss(B, "Could not save comment.");
    const te = $;
    l.add(te.id), s.value = [...s.value, te], n.value = { ...n.value, [te.id]: [] };
    try {
      await v(te.id, b, I);
    } catch (W) {
      throw W;
    }
    return te;
  }
  async function v(m, b, I) {
    const { data: $, error: B } = await t.from("comments").insert({
      thread_id: m,
      body: b,
      author_name: I.name,
      author_email: I.email
    }).select().single();
    if (B || !$)
      throw console.error("[comment-widget] failed to insert comment:", B), ss(B, "Could not post reply.");
    const te = $;
    c.add(te.id);
    const W = n.value[m] ?? [];
    return n.value = {
      ...n.value,
      [m]: [...W, te]
    }, te;
  }
  async function T(m, b) {
    const I = s.value.find((W) => W.id === m);
    I && I.status !== b && (s.value = s.value.map((W) => W.id === m ? { ...W, status: b } : W));
    const { data: $, error: B } = await t.from("threads").update({ status: b }).eq("id", m).select().single();
    if (B || !$)
      throw I && (s.value = s.value.map((W) => W.id === m ? I : W)), console.error("[comment-widget] failed to update thread status:", B), ss(B, "Could not change status.");
    const te = $;
    return s.value = s.value.map((W) => W.id === m ? te : W), te;
  }
  const _ = Oe(
    () => s.value.filter((m) => m.status === "open").length
  ), R = Oe(() => s.value.length);
  return Hn(() => {
    a?.unsubscribe(), a = null;
  }), {
    pageUrl: r,
    threads: s,
    commentsByThread: n,
    loading: i,
    loadError: o,
    openThreadCount: _,
    totalThreadCount: R,
    load: u,
    startRealtime: h,
    createThread: y,
    replyToThread: v,
    updateThreadStatus: T
  };
}
const Na = "__comment-widget-root";
function nf(t) {
  const e = [];
  let r = t;
  for (; r && r !== document.body && r !== document.documentElement; ) {
    if (r.id && r.id !== Na)
      return e.unshift(`#${CSS.escape(r.id)}`), e.join(" > ");
    const s = r.getAttribute("data-comment-anchor");
    if (s)
      return e.unshift(`[data-comment-anchor="${CSS.escape(s)}"]`), e.join(" > ");
    let n = r.tagName.toLowerCase();
    const i = r.parentElement;
    if (i) {
      const o = Array.from(i.children).filter(
        (a) => a.tagName === r.tagName
      );
      o.length > 1 && (n += `:nth-of-type(${o.indexOf(r) + 1})`);
    }
    e.unshift(n), r = i;
  }
  return e.join(" > ");
}
function oo(t) {
  const e = ao(t);
  if (e)
    return { element: e, approximate: !1 };
  const r = t.split(" > ");
  for (let s = r.length - 1; s > 0; s--) {
    const n = r.slice(0, s).join(" > "), i = ao(n);
    if (i)
      return { element: i, approximate: !0 };
  }
  return null;
}
function ao(t) {
  try {
    return document.querySelector(t);
  } catch {
    return null;
  }
}
function of(t) {
  if (!(t instanceof Element)) return null;
  let e = t;
  for (; e; )
    return e.closest(`#${Na}`) ? null : e;
  return null;
}
function af(t, e) {
  const r = t.getBoundingClientRect();
  return {
    x: r.left + r.width * e.anchor_x_pct,
    y: r.top + r.height * e.anchor_y_pct
  };
}
class lf {
  constructor(e) {
    me(this, "listeners", /* @__PURE__ */ new Set());
    me(this, "element", null);
    me(this, "approximate", !1);
    me(this, "resizeObserver", null);
    me(this, "current", null);
    me(this, "disposed", !1);
    this.thread = e, this.resolve();
  }
  subscribe(e) {
    return this.listeners.add(e), e(this.current), () => {
      this.listeners.delete(e);
    };
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
        const e = oo(this.thread.selector_path);
        e && !e.approximate && e.element !== this.element && (this.teardownElement(), this.attachElement(e.element, !1));
      } else this.element.isConnected || (this.teardownElement(), this.resolve());
    }
  }
  dispose() {
    this.disposed = !0, this.listeners.clear(), this.teardownElement();
  }
  resolve() {
    const e = oo(this.thread.selector_path);
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
      const { x: e, y: r } = af(this.element, this.thread);
      this.current = { x: e, y: r, approximate: this.approximate, element: this.element };
    }
    this.publish();
  }
  publish() {
    for (const e of this.listeners)
      e(this.current);
  }
}
class cf {
  constructor() {
    me(this, "watchers", /* @__PURE__ */ new Set());
    me(this, "mutationObserver", null);
    me(this, "rafPending", !1);
    me(this, "resizeDebounceTimer", null);
    me(this, "mutationDebounceTimer", null);
    // Bound handlers, kept as instance fields so add/removeEventListener match.
    me(this, "onScroll", () => this.scheduleRecompute());
    me(this, "onResize", () => {
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
function uf(t) {
  const e = /* @__PURE__ */ xr(/* @__PURE__ */ new Map()), r = new cf(), s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ ye(!1);
  function i(a) {
    if (s.get(a.id)) return;
    const c = new lf({
      selector_path: a.selector_path,
      anchor_x_pct: a.anchor_x_pct,
      anchor_y_pct: a.anchor_y_pct
    }), u = c.subscribe((h) => {
      e.set(a.id, h);
    });
    r.register(c), s.set(a.id, { watcher: c, off: u });
  }
  function o(a) {
    const l = s.get(a);
    l && (l.off(), r.unregister(l.watcher), s.delete(a), e.delete(a));
  }
  return Wo(() => {
    r.start(), n.value = !0;
    for (const a of t.value) i(a);
  }), Hn(() => {
    r.stop();
    for (const a of Array.from(s.keys())) o(a);
  }), Bn(
    () => t.value,
    (a) => {
      const l = new Set(a.map((c) => c.id));
      for (const c of Array.from(s.keys()))
        l.has(c) || o(c);
      for (const c of a) i(c);
    },
    { deep: !0 }
  ), { positions: e };
}
function hf(t, e) {
  const r = nf(t), s = t.getBoundingClientRect(), n = s.width || 1, i = s.height || 1;
  return {
    selector: r,
    x_pct: lo((e.clientX - s.left) / n),
    y_pct: lo((e.clientY - s.top) / i)
  };
}
function lo(t) {
  return Number.isNaN(t) ? 0.5 : t < 0 ? 0 : t > 1 ? 1 : t;
}
const df = {
  class: "cw-toolbar",
  role: "toolbar",
  "aria-label": "Comment widget"
}, ff = { class: "cw-toolbar-label" }, pf = ["title", "aria-pressed"], gf = ["fill"], mf = ["aria-pressed", "title"], yf = {
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
}, vf = {
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
}, wf = /* @__PURE__ */ Fr({
  __name: "Toolbar",
  props: {
    active: { type: Boolean },
    openCount: {},
    totalCount: {},
    showOpenOnly: { type: Boolean }
  },
  emits: ["toggle", "toggle-filter"],
  setup(t) {
    const e = t, r = Oe(() => e.totalCount === 0 ? "No comments" : e.showOpenOnly ? e.openCount === 1 ? "1 open" : `${e.openCount} open` : `${e.openCount} of ${e.totalCount}`), s = Oe(
      () => e.showOpenOnly ? "Showing open · click to show all" : "Showing all · click to show open only"
    );
    return (n, i) => (ee(), oe("div", df, [
      q("span", ff, Se(r.value), 1),
      t.totalCount > 0 ? (ee(), oe("button", {
        key: 0,
        type: "button",
        class: jt(["cw-btn cw-btn--ghost cw-btn--icon", { "cw-filter-active": t.showOpenOnly }]),
        title: s.value,
        "aria-pressed": t.showOpenOnly,
        onClick: i[0] || (i[0] = (o) => n.$emit("toggle-filter"))
      }, [
        (ee(), oe("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          fill: t.showOpenOnly ? "currentColor" : "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [...i[2] || (i[2] = [
          q("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }, null, -1)
        ])], 8, gf))
      ], 10, pf)) : Le("", !0),
      q("button", {
        type: "button",
        class: jt(["cw-btn cw-toolbar-toggle", { "cw-toolbar-toggle--on": t.active }]),
        "aria-pressed": t.active,
        title: t.active ? "Exit comment mode" : "Enter comment mode",
        onClick: i[1] || (i[1] = (o) => n.$emit("toggle"))
      }, [
        t.active ? (ee(), oe("svg", vf, [...i[4] || (i[4] = [
          q("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }, null, -1),
          q("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          }, null, -1)
        ])])) : (ee(), oe("svg", yf, [...i[3] || (i[3] = [
          q("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, null, -1)
        ])])),
        q("span", null, Se(t.active ? "Cancel" : "Comment"), 1)
      ], 10, mf)
    ]));
  }
}), bf = ["title"], _f = { class: "cw-pin-label" }, Sf = /* @__PURE__ */ Fr({
  __name: "CommentPin",
  props: {
    anchor: {},
    thread: {},
    active: { type: Boolean },
    index: {}
  },
  emits: ["click"],
  setup(t) {
    const e = t, r = Oe(() => {
      const s = [];
      return e.thread.status === "resolved" && s.push("Resolved"), e.anchor.approximate && s.push("Approximate anchor"), s.join(" · ");
    });
    return (s, n) => (ee(), oe("button", {
      type: "button",
      class: jt(["cw-pin", {
        "cw-pin--approximate": t.anchor.approximate,
        "cw-pin--active": t.active,
        "cw-pin--resolved": t.thread.status === "resolved"
      }]),
      style: nr({ left: `${t.anchor.x}px`, top: `${t.anchor.y}px` }),
      title: r.value,
      onClick: n[0] || (n[0] = ct((i) => s.$emit("click"), ["stop"]))
    }, [
      q("span", _f, Se(t.index), 1)
    ], 14, bf));
  }
}), kf = { class: "cw-popover-header" }, Ef = { class: "cw-popover-title" }, Tf = {
  key: 0,
  class: "cw-status-pill"
}, Af = { key: 1 }, Rf = { class: "cw-popover-header-actions" }, Of = ["disabled", "title"], Cf = {
  key: 0,
  class: "cw-error-banner"
}, xf = { class: "cw-popover-body" }, Pf = {
  key: 0,
  class: "cw-popover-empty"
}, If = { class: "cw-comment-meta" }, jf = { class: "cw-comment-body" }, $f = { class: "cw-popover-footer" }, Nf = {
  key: 0,
  class: "cw-error-banner cw-error-banner--inline"
}, Lf = ["placeholder", "disabled", "onKeydown"], Uf = { class: "cw-composer-actions" }, Df = ["disabled"], co = 320, rn = 18, Bf = /* @__PURE__ */ Fr({
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
    statusError: {}
  },
  emits: ["close", "reply", "set-status"],
  setup(t, { emit: e }) {
    const r = t, s = e, n = /* @__PURE__ */ ye(""), i = /* @__PURE__ */ ye(null);
    Bn(
      () => r.replyResetKey,
      () => {
        n.value = "";
      }
    );
    function o() {
      const h = n.value.trim();
      !h || r.replyBusy || s("reply", h);
    }
    function a() {
      r.statusBusy || s("set-status", r.thread.status === "open" ? "resolved" : "open");
    }
    const l = Oe(() => {
      const h = window.innerWidth, f = window.innerHeight, y = r.anchorX + rn + co < h - 12 ? r.anchorX + rn : Math.max(12, r.anchorX - rn - co), v = Math.min(
        Math.max(12, r.anchorY - 12),
        Math.max(12, f - 280)
      );
      return { left: `${y}px`, top: `${v}px` };
    }), c = Oe(() => r.thread.status === "resolved");
    function u(h) {
      const f = new Date(h), y = Date.now() - f.getTime(), v = Math.round(y / 6e4);
      if (v < 1) return "just now";
      if (v < 60) return `${v}m ago`;
      const T = Math.round(v / 60);
      if (T < 24) return `${T}h ago`;
      const _ = Math.round(T / 24);
      return _ < 7 ? `${_}d ago` : f.toLocaleDateString();
    }
    return (h, f) => (ee(), oe("div", {
      class: jt(["cw-popover", { "cw-popover--resolved": c.value }]),
      style: nr(l.value),
      onMousedown: f[2] || (f[2] = ct(() => {
      }, ["stop"]))
    }, [
      q("div", kf, [
        q("span", Ef, [
          c.value ? (ee(), oe("span", Tf, "Resolved")) : (ee(), oe("span", Af, "Comment"))
        ]),
        q("div", Rf, [
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--small",
            disabled: t.statusBusy,
            title: c.value ? "Reopen this thread" : "Mark this thread resolved",
            onClick: a
          }, Se(t.statusBusy ? "Saving…" : c.value ? "Reopen" : "Resolve"), 9, Of),
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost cw-btn--icon",
            "aria-label": "Close",
            onClick: f[0] || (f[0] = (p) => h.$emit("close"))
          }, [...f[3] || (f[3] = [
            q("svg", {
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
              q("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              q("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ], -1)
          ])])
        ])
      ]),
      t.statusError ? (ee(), oe("div", Cf, Se(t.statusError), 1)) : Le("", !0),
      q("div", xf, [
        t.comments.length === 0 ? (ee(), oe("div", Pf, " No comments yet. ")) : Le("", !0),
        (ee(!0), oe(Ne, null, Vo(t.comments, (p) => (ee(), oe("div", {
          key: p.id,
          class: "cw-comment"
        }, [
          q("div", If, [
            q("strong", null, Se(p.author_name), 1),
            q("span", null, Se(u(p.created_at)), 1)
          ]),
          q("div", jf, Se(p.body), 1)
        ]))), 128))
      ]),
      q("div", $f, [
        t.replyError ? (ee(), oe("div", Nf, Se(t.replyError), 1)) : Le("", !0),
        ds(q("textarea", {
          ref_key: "replyTextarea",
          ref: i,
          "onUpdate:modelValue": f[1] || (f[1] = (p) => n.value = p),
          class: "cw-composer-textarea cw-composer-textarea--compact",
          placeholder: c.value ? "Reply to reopen the conversation…" : "Reply…",
          disabled: t.replyBusy,
          onKeydown: fn(ct(o, ["exact", "prevent"]), ["enter"])
        }, null, 40, Lf), [
          [gs, n.value]
        ]),
        q("div", Uf, [
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--primary cw-btn--small",
            disabled: t.replyBusy || !n.value.trim(),
            onClick: o
          }, Se(t.replyBusy ? "Posting…" : "Reply"), 9, Df)
        ])
      ])
    ], 38));
  }
}), Mf = { class: "cw-field" }, Hf = { class: "cw-field" }, Ff = {
  key: 0,
  class: "cw-field-label",
  style: { color: "#c0382e" }
}, qf = { class: "cw-composer-actions" }, Kf = /* @__PURE__ */ Fr({
  __name: "IdentityPrompt",
  props: {
    initialName: {},
    initialEmail: {}
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: e }) {
    const r = e, s = /* @__PURE__ */ ye(""), n = /* @__PURE__ */ ye(""), i = /* @__PURE__ */ ye(!1);
    function o(l) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l);
    }
    function a() {
      i.value = !0;
      const l = s.value.trim(), c = n.value.trim();
      !l || !o(c) || r("submit", { name: l, email: c });
    }
    return (l, c) => (ee(), oe("div", {
      class: "cw-modal-backdrop",
      onMousedown: c[4] || (c[4] = ct((u) => l.$emit("cancel"), ["self"]))
    }, [
      q("form", {
        class: "cw-modal",
        onSubmit: ct(a, ["prevent"]),
        onMousedown: c[3] || (c[3] = ct(() => {
        }, ["stop"]))
      }, [
        c[8] || (c[8] = q("h2", { class: "cw-modal-title" }, "Who's commenting?", -1)),
        c[9] || (c[9] = q("p", { class: "cw-modal-subtitle" }, " We use this to show your name on comments. Stored on this device only. ", -1)),
        q("label", Mf, [
          c[5] || (c[5] = q("span", { class: "cw-field-label" }, "Name", -1)),
          ds(q("input", {
            "onUpdate:modelValue": c[0] || (c[0] = (u) => s.value = u),
            class: "cw-input",
            type: "text",
            autocomplete: "name",
            placeholder: "Jane Designer",
            required: ""
          }, null, 512), [
            [gs, s.value]
          ])
        ]),
        q("label", Hf, [
          c[6] || (c[6] = q("span", { class: "cw-field-label" }, "Email", -1)),
          ds(q("input", {
            "onUpdate:modelValue": c[1] || (c[1] = (u) => n.value = u),
            class: "cw-input",
            type: "email",
            autocomplete: "email",
            placeholder: "jane@example.com",
            required: ""
          }, null, 512), [
            [gs, n.value]
          ]),
          i.value && n.value && !o(n.value) ? (ee(), oe("span", Ff, " Enter a valid email address. ")) : Le("", !0)
        ]),
        q("div", qf, [
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost",
            onClick: c[2] || (c[2] = (u) => l.$emit("cancel"))
          }, "Cancel"),
          c[7] || (c[7] = q("button", {
            type: "submit",
            class: "cw-btn cw-btn--primary"
          }, "Continue", -1))
        ])
      ], 32)
    ], 32));
  }
}), Wf = { class: "cw-layer" }, Vf = {
  key: 0,
  class: "cw-mode-veil",
  "aria-hidden": "true"
}, zf = {
  key: 1,
  class: "cw-toast cw-toast--error",
  role: "alert"
}, Jf = {
  key: 0,
  class: "cw-error-banner cw-error-banner--inline"
}, Gf = ["disabled", "onKeydown"], Yf = { class: "cw-composer-actions" }, Xf = ["disabled"], Qf = ["disabled"], Zf = /* @__PURE__ */ Fr({
  __name: "CommentOverlay",
  props: {
    config: {}
  },
  setup(t) {
    const e = t, r = Xd(e.config.supabaseUrl, e.config.supabaseAnonKey), { identity: s, set: n } = tf(), {
      threads: i,
      commentsByThread: o,
      loadError: a,
      openThreadCount: l,
      totalThreadCount: c,
      load: u,
      startRealtime: h,
      createThread: f,
      replyToThread: p,
      updateThreadStatus: y
    } = sf(r, e.config.projectId), { positions: v } = uf(i), T = /* @__PURE__ */ ye(!1), _ = /* @__PURE__ */ ye(null), R = /* @__PURE__ */ ye(!0), m = /* @__PURE__ */ ye(null), b = /* @__PURE__ */ xr({
      busy: !1,
      error: null,
      resetKey: 0
    }), I = /* @__PURE__ */ xr({
      busy: !1,
      error: null
    }), $ = /* @__PURE__ */ ye(null), B = /* @__PURE__ */ ye(null), te = Oe(
      () => i.value.map((M, F) => {
        const re = v.get(M.id);
        return !re || R.value && M.status !== "open" && M.id !== _.value ? null : { thread: M, anchor: re, index: F + 1 };
      }).filter((M) => M !== null)
    ), W = Oe(() => _.value ? i.value.find((M) => M.id === _.value) ?? null : null), ke = Oe(() => _.value ? v.get(_.value) ?? null : null), Pe = Oe(() => _.value ? o.value[_.value] ?? [] : []);
    function or(M) {
      return M instanceof $a ? M.hint : M instanceof Error ? M.message : "Something went wrong. Check the console.";
    }
    function Ns() {
      T.value = !T.value, T.value ? _.value = null : m.value = null;
    }
    function Kr() {
      R.value = !R.value;
    }
    function Ls(M) {
      _.value = M, m.value = null, b.busy = !1, b.error = null, I.busy = !1, I.error = null;
    }
    function ar() {
      _.value = null, b.busy = !1, b.error = null, I.busy = !1, I.error = null;
    }
    function $t(M) {
      if (!T.value || M.button !== 0) return;
      const F = of(M.target);
      if (!F || F === document.body || F === document.documentElement) return;
      M.preventDefault(), M.stopPropagation();
      const re = hf(F, M);
      m.value = {
        anchor: re,
        clientX: M.clientX,
        clientY: M.clientY,
        body: "",
        submitting: !1,
        error: null
      }, queueMicrotask(() => {
        B.value?.focus();
      });
    }
    function lr() {
      document.addEventListener("mousedown", $t, { capture: !0 });
    }
    function Us() {
      document.removeEventListener("mousedown", $t, {
        capture: !0
      });
    }
    Bn(T, (M) => {
      document.body.classList.toggle("cw-mode-on", M);
    });
    async function Nt() {
      if (!m.value || m.value.submitting) return;
      const M = m.value.body.trim();
      if (M) {
        if (!s.value) {
          $.value = { kind: "create-thread" };
          return;
        }
        m.value.submitting = !0, m.value.error = null;
        try {
          const F = await f(m.value.anchor, M, s.value);
          m.value = null, T.value = !1, _.value = F.id;
        } catch (F) {
          if (!m.value) return;
          m.value.submitting = !1, m.value.error = or(F);
        }
      }
    }
    function ft() {
      m.value = null;
    }
    async function Ie(M) {
      const F = _.value;
      if (F) {
        if (!s.value) {
          $.value = { kind: "reply", threadId: F, body: M };
          return;
        }
        b.busy = !0, b.error = null;
        try {
          await p(F, M, s.value), b.resetKey += 1;
        } catch (re) {
          b.error = or(re);
        } finally {
          b.busy = !1;
        }
      }
    }
    async function cr(M) {
      const F = _.value;
      if (F) {
        if (!s.value) {
          $.value = { kind: "status", threadId: F, status: M };
          return;
        }
        I.busy = !0, I.error = null;
        try {
          await y(F, M);
        } catch (re) {
          I.error = or(re);
        } finally {
          I.busy = !1;
        }
      }
    }
    async function Ds(M) {
      n(M);
      const F = $.value;
      if ($.value = null, !F) {
        queueMicrotask(() => B.value?.focus());
        return;
      }
      F.kind === "create-thread" ? await Nt() : F.kind === "reply" ? (_.value !== F.threadId && (_.value = F.threadId), await Ie(F.body)) : F.kind === "status" && (_.value !== F.threadId && (_.value = F.threadId), await cr(F.status));
    }
    function Wr() {
      const M = $.value;
      $.value = null, M?.kind === "create-thread" && (m.value = null, T.value = !1);
    }
    function pt(M) {
      M.key === "Escape" && ($.value ? Wr() : m.value ? ft() : _.value ? ar() : T.value && (T.value = !1));
    }
    const Lt = Oe(() => {
      if (!m.value) return {};
      const M = 320, F = 12, re = Math.min(
        Math.max(F, m.value.clientX + 12),
        Math.max(F, window.innerWidth - M - F)
      ), Bs = Math.min(
        Math.max(F, m.value.clientY + 12),
        Math.max(F, window.innerHeight - 220)
      );
      return { left: `${re}px`, top: `${Bs}px` };
    });
    return Wo(async () => {
      lr(), document.addEventListener("keydown", pt), await u(), h();
    }), Hn(() => {
      Us(), document.removeEventListener("keydown", pt), document.body.classList.remove("cw-mode-on");
    }), (M, F) => (ee(), oe("div", Wf, [
      T.value ? (ee(), oe("div", Vf)) : Le("", !0),
      pr(a) ? (ee(), oe("div", zf, [
        F[2] || (F[2] = q("strong", null, "Couldn't load comments.", -1)),
        q("span", null, Se(pr(a)), 1)
      ])) : Le("", !0),
      (ee(!0), oe(Ne, null, Vo(te.value, (re) => (ee(), is(Sf, {
        key: re.thread.id,
        anchor: re.anchor,
        thread: re.thread,
        active: _.value === re.thread.id,
        index: re.index,
        onClick: (Bs) => Ls(re.thread.id)
      }, null, 8, ["anchor", "thread", "active", "index", "onClick"]))), 128)),
      W.value && ke.value ? (ee(), is(Bf, {
        key: 2,
        thread: W.value,
        comments: Pe.value,
        "anchor-x": ke.value.x,
        "anchor-y": ke.value.y,
        "reply-busy": b.busy,
        "reply-error": b.error,
        "reply-reset-key": b.resetKey,
        "status-busy": I.busy,
        "status-error": I.error,
        onClose: ar,
        onReply: Ie,
        onSetStatus: cr
      }, null, 8, ["thread", "comments", "anchor-x", "anchor-y", "reply-busy", "reply-error", "reply-reset-key", "status-busy", "status-error"])) : Le("", !0),
      m.value ? (ee(), oe("div", {
        key: 3,
        class: "cw-composer",
        style: nr(Lt.value),
        onMousedown: F[1] || (F[1] = ct(() => {
        }, ["stop"]))
      }, [
        m.value.error ? (ee(), oe("div", Jf, Se(m.value.error), 1)) : Le("", !0),
        ds(q("textarea", {
          ref_key: "composerTextarea",
          ref: B,
          "onUpdate:modelValue": F[0] || (F[0] = (re) => m.value.body = re),
          class: "cw-composer-textarea",
          placeholder: "Leave a comment…",
          disabled: m.value.submitting,
          onKeydown: [
            fn(ct(Nt, ["exact", "prevent"]), ["enter"]),
            fn(ct(ft, ["prevent"]), ["escape"])
          ]
        }, null, 40, Gf), [
          [gs, m.value.body]
        ]),
        q("div", Yf, [
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--ghost",
            disabled: m.value.submitting,
            onClick: ft
          }, " Cancel ", 8, Xf),
          q("button", {
            type: "button",
            class: "cw-btn cw-btn--primary",
            disabled: m.value.submitting || !m.value.body.trim(),
            onClick: Nt
          }, Se(m.value.submitting ? "Posting…" : "Comment"), 9, Qf)
        ])
      ], 36)) : Le("", !0),
      $.value ? (ee(), is(Kf, {
        key: 4,
        onSubmit: Ds,
        onCancel: Wr
      })) : Le("", !0),
      Ze(wf, {
        active: T.value,
        "open-count": pr(l),
        "total-count": pr(c),
        "show-open-only": R.value,
        onToggle: Ns,
        onToggleFilter: Kr
      }, null, 8, ["active", "open-count", "total-count", "show-open-only"])
    ]));
  }
}), uo = "__comment-widget-root";
function ep() {
  const t = document.currentScript;
  if (!t) return null;
  const e = t.dataset.projectId, r = t.dataset.supabaseUrl, s = t.dataset.supabaseAnonKey;
  return !e || !r || !s ? (console.error(
    "[comment-widget] missing required data attributes. Need data-project-id, data-supabase-url, data-supabase-anon-key."
  ), null) : { projectId: e, supabaseUrl: r, supabaseAnonKey: s };
}
function ls(t) {
  if (window.__commentWidgetMounted__) {
    console.warn("[comment-widget] already mounted; ignoring duplicate mount call.");
    return;
  }
  const e = document.getElementById(uo);
  e && e.remove();
  const r = document.createElement("div");
  r.id = uo, document.body.appendChild(r), Jc(Zf, { config: t }).mount(r), window.__commentWidgetMounted__ = !0;
}
function tp() {
  const t = ep();
  t && (document.body ? ls(t) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => ls(t), { once: !0 }) : queueMicrotask(() => ls(t)));
}
window.CommentWidget = { mount: ls };
tp();
export {
  ls as mount
};
//# sourceMappingURL=widget.es.js.map
