import{E as r,T as n}from"./lit-element-DNzYj8eE.js";import{e as c,i as u,t as a}from"./directive-CiXpmpUr.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*f(e,t){if(e!==void 0){let i=0;for(const o of e)yield t(o,i++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends u{constructor(t){if(super(t),this.it=r,t.type!==a.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r||t==null)return this._t=void 0,this.it=t;if(t===n)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;const d=c(s);export{d as a,f as o};
