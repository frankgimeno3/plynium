"use client";

import { PLYNIUM_REGIONS } from "@/app/components/RotatingRegionLabel";
import React, { useMemo, useState } from "react";

const STEPS = [
  { id: 1, title: "Destino" },
  { id: 2, title: "Proyecto y necesidad" },
  { id: 3, title: "Destinatarios de la quote" },
] as const;

const PROJECT_TYPES = [
  { value: "residential", label: "Vivienda (unifamiliar o colectiva)" },
  { value: "commercial", label: "Oficinas, retail o hostelería" },
  { value: "industrial", label: "Industrial, logística o almacenes" },
  { value: "infrastructure", label: "Infraestructuras y obra civil" },
  { value: "renovation", label: "Rehabilitación, reforma o mantenimiento" },
  { value: "public", label: "Equipamientos (sanitario, educativo, cultural, deportivo)" },
  { value: "undefined", label: "Proyecto aún no definido" },
] as const;

const RESPONSE_DEADLINES = [
  { value: "urgent", label: "Urgente (menos de 1 semana)" },
  { value: "2w", label: "En torno a 2 semanas" },
  { value: "1m", label: "Hasta 1 mes" },
  { value: "flex", label: "Flexible / según negociación" },
] as const;

const SUPPLIER_GEO_OPTIONS = [
  {
    value: "region",
    label: "Priorizar proveedores de la misma región que el destino",
    hint: "Menor fricción logística y normativa alineada con el mercado objetivo.",
  },
  {
    value: "eu",
    label: "Unión Europea (independientemente de la región marcada arriba)",
    hint: "Útil si el destino es UE pero quieres ampliar fabricantes comunitarios.",
  },
  {
    value: "open",
    label: "Sin restricción geográfica adicional sobre el origen del proveedor",
    hint: "Se aplicará el filtro de región de la plataforma según tu cuenta y normas del servicio.",
  },
] as const;

const MIN_COMPANY_SIZE = [
  { value: "any", label: "Sin requisito de tamaño" },
  { value: "sme", label: "PYME o equivalente aceptable" },
  { value: "medium", label: "Empresa mediana (estructura comercial y técnica)" },
  { value: "large", label: "Gran cuenta / referencias en obras mayores" },
] as const;

const MIN_NEED_LEN = 24;

export default function QuotesWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [region, setRegion] = useState<string | null>(null);
  const [siteOrDelivery, setSiteOrDelivery] = useState("");

  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState<string | null>(null);
  const [needDescription, setNeedDescription] = useState("");
  const [productsOrSpecs, setProductsOrSpecs] = useState("");
  const [responseDeadline, setResponseDeadline] = useState<string | null>(null);
  const [scaleOrQty, setScaleOrQty] = useState("");

  const [supplierGeo, setSupplierGeo] = useState<(typeof SUPPLIER_GEO_OPTIONS)[number]["value"] | null>(null);
  const [manufacturersOnly, setManufacturersOnly] = useState(false);
  const [excludeDistributors, setExcludeDistributors] = useState(false);
  const [requireIso9001, setRequireIso9001] = useState(false);
  const [requireCprCe, setRequireCprCe] = useState(false);
  const [requireTechnicalDocs, setRequireTechnicalDocs] = useState(false);
  const [minCompanySize, setMinCompanySize] = useState<string>("any");
  const [maxSuppliers, setMaxSuppliers] = useState("");
  const [inviteOnlyNote, setInviteOnlyNote] = useState("");
  const [otherRecipientRules, setOtherRecipientRules] = useState("");

  const canNext1 = region != null;
  const canNext2 =
    projectType != null &&
    needDescription.trim().length >= MIN_NEED_LEN &&
    responseDeadline != null;

  const goNext = () => setStep((s) => Math.min(3, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canNext1 || !canNext2 || supplierGeo == null) return;
    setSubmitted(true);
  };

  const summary = useMemo(() => {
    const pt = PROJECT_TYPES.find((t) => t.value === projectType);
    const dl = RESPONSE_DEADLINES.find((d) => d.value === responseDeadline);
    const geo = SUPPLIER_GEO_OPTIONS.find((g) => g.value === supplierGeo);
    const sz = MIN_COMPANY_SIZE.find((s) => s.value === minCompanySize);
    return {
      region,
      siteOrDelivery: siteOrDelivery.trim(),
      projectTitle: projectTitle.trim(),
      projectTypeLabel: pt?.label ?? "—",
      needDescription: needDescription.trim(),
      productsOrSpecs: productsOrSpecs.trim(),
      deadlineLabel: dl?.label ?? "—",
      scaleOrQty: scaleOrQty.trim(),
      geoLabel: geo?.label ?? "—",
      minSizeLabel: sz?.label ?? "—",
      maxSuppliers: maxSuppliers.trim(),
      inviteOnlyNote: inviteOnlyNote.trim(),
      otherRecipientRules: otherRecipientRules.trim(),
      flags: {
        manufacturersOnly,
        excludeDistributors,
        requireIso9001,
        requireCprCe,
        requireTechnicalDocs,
      },
    };
  }, [
    region,
    siteOrDelivery,
    projectTitle,
    projectType,
    needDescription,
    productsOrSpecs,
    responseDeadline,
    scaleOrQty,
    supplierGeo,
    minCompanySize,
    maxSuppliers,
    inviteOnlyNote,
    otherRecipientRules,
    manufacturersOnly,
    excludeDistributors,
    requireIso9001,
    requireCprCe,
    requireTechnicalDocs,
  ]);

  const restrictionLines = useMemo(() => {
    const lines: string[] = [];
    if (summary.flags.manufacturersOnly) lines.push("Solo fabricantes");
    if (summary.flags.excludeDistributors) lines.push("Excluir distribuidores mayoristas");
    if (summary.flags.requireIso9001) lines.push("ISO 9001 (o equivalente) requerida");
    if (summary.flags.requireCprCe) lines.push("Marcado CE / cumplimiento CPR cuando aplique");
    if (summary.flags.requireTechnicalDocs) lines.push("DoP, fichas técnicas o documentación reglamentaria en la oferta");
    lines.push(`Alcance geográfico proveedores: ${summary.geoLabel}`);
    lines.push(`Tamaño mínimo percibido: ${summary.minSizeLabel}`);
    if (summary.maxSuppliers) lines.push(`Máx. proveedores: ${summary.maxSuppliers}`);
    if (summary.inviteOnlyNote) lines.push(`Invitación / marcas: ${summary.inviteOnlyNote}`);
    if (summary.otherRecipientRules) lines.push(`Otras reglas: ${summary.otherRecipientRules}`);
    return lines;
  }, [summary]);

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-20 pt-36 text-gray-800 sm:pt-40">
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-[#DA6D00]">Solicitud de cotización registrada</h1>
          <p className="mt-4 leading-relaxed text-gray-700">
            En un entorno conectado a backend, esta solicitud se distribuiría solo entre proveedores que cumplan las restricciones
            indicadas. Aquí tienes un resumen de lo definido.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Destino</dt>
              <dd className="text-gray-600">
                {summary.region}
                {summary.siteOrDelivery ? (
                  <>
                    <br />
                    <span className="text-gray-500">{summary.siteOrDelivery}</span>
                  </>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Proyecto y necesidad</dt>
              <dd className="text-gray-600">
                {summary.projectTitle ? (
                  <>
                    <span className="font-medium text-gray-800">{summary.projectTitle}</span>
                    <br />
                  </>
                ) : null}
                {summary.projectTypeLabel}
                <br />
                <span className="mt-1 block whitespace-pre-wrap text-gray-700">{summary.needDescription}</span>
                {summary.productsOrSpecs ? (
                  <>
                    <br />
                    <span className="mt-2 block text-gray-600">
                      <span className="font-medium">Productos / especificaciones:</span> {summary.productsOrSpecs}
                    </span>
                  </>
                ) : null}
                <br />
                <span className="text-gray-500">Plazo respuesta deseado: {summary.deadlineLabel}</span>
                {summary.scaleOrQty ? (
                  <>
                    <br />
                    <span className="text-gray-500">Magnitud / cantidades: {summary.scaleOrQty}</span>
                  </>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Restricciones de destinatarios</dt>
              <dd className="text-gray-600">
                <ul className="mt-1 list-inside list-disc space-y-1">
                  {restrictionLines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setRegion(null);
              setSiteOrDelivery("");
              setProjectTitle("");
              setProjectType(null);
              setNeedDescription("");
              setProductsOrSpecs("");
              setResponseDeadline(null);
              setScaleOrQty("");
              setSupplierGeo(null);
              setManufacturersOnly(false);
              setExcludeDistributors(false);
              setRequireIso9001(false);
              setRequireCprCe(false);
              setRequireTechnicalDocs(false);
              setMinCompanySize("any");
              setMaxSuppliers("");
              setInviteOnlyNote("");
              setOtherRecipientRules("");
            }}
            className="mt-8 rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00]"
          >
            Nueva solicitud de quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-36 text-gray-800 sm:pt-40">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#DA6D00] sm:text-4xl">Solicitud de cotización</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base">
          Define primero el <strong>destino</strong> de la obra o entrega, describe el <strong>proyecto y la necesidad</strong>{" "}
          para que los proveedores entiendan el alcance, y por último <strong>a quién puede enviarse</strong> esta quote según
          criterios geográficos, tipo de empresa y requisitos técnicos o comerciales.
        </p>
      </header>

      <ol className="mb-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Progreso del formulario">
        {STEPS.map((s) => (
          <li key={s.id}>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
                step === s.id
                  ? "bg-[#DA6D00] text-white"
                  : step > s.id
                    ? "bg-orange-100 text-orange-900"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              <span className="tabular-nums">{s.id}</span>
              <span className="hidden sm:inline">{s.title}</span>
            </span>
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {step === 1 && (
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold text-gray-900">Destino de la obra o de la entrega</legend>
            <p className="text-sm text-gray-600">
              La región orienta normativa, logística y proveedores habituales en ese mercado. Opcionalmente puedes concretar obra,
              país o incoterm.
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {PLYNIUM_REGIONS.map((r) => (
                <label
                  key={r}
                  className={`flex cursor-pointer items-center rounded-lg border-2 px-4 py-3 text-sm transition ${
                    region === r ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="region"
                    value={r}
                    checked={region === r}
                    onChange={() => setRegion(r)}
                    className="mr-3 h-4 w-4 accent-[#DA6D00]"
                  />
                  {r}
                </label>
              ))}
            </div>
            <div>
              <label htmlFor="siteOrDelivery" className="mb-1 block text-sm font-medium text-gray-800">
                Detalle de destino (opcional)
              </label>
              <textarea
                id="siteOrDelivery"
                value={siteOrDelivery}
                onChange={(e) => setSiteOrDelivery(e.target.value)}
                placeholder="Ej. Obra en Barcelona, entrega EXW fárica en Alemania, proyecto llave en mano en México…"
                rows={3}
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-5">
            <legend className="text-lg font-semibold text-gray-900">Proyecto y necesidad</legend>
            <p className="text-sm text-gray-600">
              Cuanto más preciso sea el alcance, mejores ofertas podrás comparar (plazos, especificaciones, exclusiones).
            </p>
            <div>
              <label htmlFor="projectTitle" className="mb-1 block text-sm font-medium text-gray-800">
                Nombre o referencia del proyecto <span className="font-normal text-gray-500">(opcional)</span>
              </label>
              <input
                id="projectTitle"
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Ej. Residencial Ríos 24 — fase estructura"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-800">Tipo de proyecto u obra</p>
              <div className="max-h-[min(280px,40vh)] space-y-2 overflow-y-auto pr-1">
                {PROJECT_TYPES.map((t) => (
                  <label
                    key={t.value}
                    className={`flex cursor-pointer items-start rounded-lg border-2 px-4 py-3 text-sm transition ${
                      projectType === t.value ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={t.value}
                      checked={projectType === t.value}
                      onChange={() => setProjectType(t.value)}
                      className="mr-3 mt-0.5 h-4 w-4 shrink-0 accent-[#DA6D00]"
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="needDescription" className="mb-1 block text-sm font-medium text-gray-800">
                Descripción de la necesidad <span className="text-red-600">*</span>
              </label>
              <textarea
                id="needDescription"
                value={needDescription}
                onChange={(e) => setNeedDescription(e.target.value)}
                placeholder="Qué necesitas presupuestar, fases de obra, restricciones de acceso, normativa local relevante, criterios de adjudicación preliminares…"
                rows={5}
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
              <p className="mt-1 text-xs text-gray-500">
                Mínimo {MIN_NEED_LEN} caracteres ({needDescription.trim().length}/{MIN_NEED_LEN})
              </p>
            </div>
            <div>
              <label htmlFor="productsOrSpecs" className="mb-1 block text-sm font-medium text-gray-800">
                Productos, sistemas o especificaciones <span className="font-normal text-gray-500">(opcional)</span>
              </label>
              <textarea
                id="productsOrSpecs"
                value={productsOrSpecs}
                onChange={(e) => setProductsOrSpecs(e.target.value)}
                placeholder="Marcas aceptables, estándares (UNE-EN, ETA), rendimientos, colores, referencias de proyecto…"
                rows={3}
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-800">
                Plazo en el que deseas recibir ofertas <span className="text-red-600">*</span>
              </p>
              <div className="space-y-2">
                {RESPONSE_DEADLINES.map((d) => (
                  <label
                    key={d.value}
                    className={`flex cursor-pointer items-center rounded-lg border-2 px-4 py-3 text-sm transition ${
                      responseDeadline === d.value ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="responseDeadline"
                      value={d.value}
                      checked={responseDeadline === d.value}
                      onChange={() => setResponseDeadline(d.value)}
                      className="mr-3 h-4 w-4 accent-[#DA6D00]"
                    />
                    {d.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="scaleOrQty" className="mb-1 block text-sm font-medium text-gray-800">
                Magnitud aproximada o cantidades <span className="font-normal text-gray-500">(opcional)</span>
              </label>
              <input
                id="scaleOrQty"
                type="text"
                value={scaleOrQty}
                onChange={(e) => setScaleOrQty(e.target.value)}
                placeholder="Ej. 2.400 m² fachada, 80 viviendas, 15 t de mortero…"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">¿A quién puede enviarse esta quote?</h2>
            <p className="text-sm text-gray-600">
              Limita el universo de proveedores que recibirán la solicitud. Las opciones son orientativas; en producción se
              cruzarían con el directorio verificado de la plataforma.
            </p>

            <fieldset className="space-y-3">
              <legend className="mb-1 text-sm font-medium text-gray-800">Alcance geográfico del proveedor</legend>
              {SUPPLIER_GEO_OPTIONS.map((g) => (
                <label
                  key={g.value}
                  className={`block cursor-pointer rounded-lg border-2 px-4 py-3 text-sm transition ${
                    supplierGeo === g.value ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="supplierGeo"
                      value={g.value}
                      checked={supplierGeo === g.value}
                      onChange={() => setSupplierGeo(g.value)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#DA6D00]"
                    />
                    <span>
                      <span className="font-medium text-gray-900">{g.label}</span>
                      <span className="mt-0.5 block text-xs text-gray-600">{g.hint}</span>
                    </span>
                  </span>
                </label>
              ))}
            </fieldset>

            <div>
              <p className="mb-2 text-sm font-medium text-gray-800">Tipo de empresa y documentación</p>
              <div className="space-y-2 rounded-lg border border-gray-200 bg-gray-50/80 p-4">
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={manufacturersOnly}
                    onChange={(e) => setManufacturersOnly(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#DA6D00]"
                  />
                  Solo fabricantes (excluir puro trading sin capacidad productiva declarada)
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={excludeDistributors}
                    onChange={(e) => setExcludeDistributors(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#DA6D00]"
                  />
                  Excluir mayoristas / distribuidores de la difusión inicial
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={requireIso9001}
                    onChange={(e) => setRequireIso9001(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#DA6D00]"
                  />
                  Requiere certificación de calidad (p. ej. ISO 9001 o equivalente)
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={requireCprCe}
                    onChange={(e) => setRequireCprCe(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#DA6D00]"
                  />
                  Marcado CE / cumplimiento del reglamento de productos de construcción cuando aplique
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={requireTechnicalDocs}
                    onChange={(e) => setRequireTechnicalDocs(e.target.checked)}
                    className="h-4 w-4 rounded accent-[#DA6D00]"
                  />
                  La oferta debe incluir DoP, fichas técnicas o documentación reglamentaria
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="minCompanySize" className="mb-1 block text-sm font-medium text-gray-800">
                Tamaño o solvencia mínima percibida
              </label>
              <select
                id="minCompanySize"
                value={minCompanySize}
                onChange={(e) => setMinCompanySize(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              >
                {MIN_COMPANY_SIZE.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="maxSuppliers" className="mb-1 block text-sm font-medium text-gray-800">
                Máximo de proveedores que recibirán la solicitud <span className="font-normal text-gray-500">(opcional)</span>
              </label>
              <input
                id="maxSuppliers"
                type="number"
                min={1}
                max={99}
                value={maxSuppliers}
                onChange={(e) => setMaxSuppliers(e.target.value)}
                placeholder="Vacío = sin límite explícito en este briefing"
                className="w-full max-w-xs rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>

            <div>
              <label htmlFor="inviteOnlyNote" className="mb-1 block text-sm font-medium text-gray-800">
                Invitación solo a marcas o fabricantes concretos <span className="font-normal text-gray-500">(opcional)</span>
              </label>
              <textarea
                id="inviteOnlyNote"
                value={inviteOnlyNote}
                onChange={(e) => setInviteOnlyNote(e.target.value)}
                placeholder="Lista de marcas CIF o nombres comerciales que sí deben recibir la quote (si aplica)."
                rows={2}
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>

            <div>
              <label htmlFor="otherRecipientRules" className="mb-1 block text-sm font-medium text-gray-800">
                Otras restricciones o instrucciones de difusión
              </label>
              <textarea
                id="otherRecipientRules"
                value={otherRecipientRules}
                onChange={(e) => setOtherRecipientRules(e.target.value)}
                placeholder="Ej. NDA previo, idioma de la oferta, exclusión de países, requisito de referencias en obra similar…"
                rows={3}
                className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            </div>

            <div className="rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
              <p className="font-medium text-gray-900">Resumen rápido</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>
                  <span className="font-medium">Destino:</span> {region ?? "—"}
                </li>
                <li>
                  <span className="font-medium">Tipo de obra:</span>{" "}
                  {PROJECT_TYPES.find((t) => t.value === projectType)?.label ?? "—"}
                </li>
                <li>
                  <span className="font-medium">Plazo ofertas:</span>{" "}
                  {RESPONSE_DEADLINES.find((d) => d.value === responseDeadline)?.label ?? "—"}
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
          >
            Atrás
          </button>
          <div className="flex gap-2">
            {step < 3 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2)}
                className="rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00] disabled:pointer-events-none disabled:opacity-40"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canNext1 || !canNext2 || supplierGeo == null}
                className="rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00] disabled:pointer-events-none disabled:opacity-40"
              >
                Enviar solicitud de cotización
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
