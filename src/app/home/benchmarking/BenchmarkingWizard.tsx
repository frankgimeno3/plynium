"use client";

import { PLYNIUM_REGIONS } from "@/app/components/RotatingRegionLabel";
import React, { useCallback, useMemo, useState } from "react";

const STEPS = [
  { id: 1, title: "Región de destino" },
  { id: 2, title: "Categoría de producto" },
  { id: 3, title: "Volumen y tipo de proyecto" },
  { id: 4, title: "Parámetros adicionales" },
] as const;

const PRODUCT_CATEGORIES = [
  { value: "materials", label: "Materiales, morteros y aglomerantes" },
  { value: "structure", label: "Estructura (hormigón, acero, madera estructural)" },
  { value: "envelope", label: "Cerramientos, cubiertas e impermeabilización" },
  { value: "fenestration", label: "Carpintería, ventanas y fachadas ligeras" },
  { value: "installations", label: "Instalaciones (fontanería, climatización, electricidad)" },
  { value: "finishes", label: "Acabados, revestimientos y pinturas" },
  { value: "tools", label: "Herramientas, andamiaje y EPI" },
  { value: "machinery", label: "Maquinaria y equipos de obra" },
  { value: "glass", label: "Vidrio arquitectónico" },
  { value: "outdoor", label: "Urbanización, drenaje y obra exterior" },
  { value: "bim", label: "Software, BIM y digitalización" },
  { value: "other", label: "Otra categoría" },
] as const;

const ORDER_VOLUMES = [
  { value: "sample", label: "Muestra / prototipo / ensayo" },
  { value: "small", label: "Pedido puntual — volumen bajo (p. ej. un obra o lote único)" },
  { value: "medium", label: "Suministro recurrente — volumen medio" },
  { value: "large", label: "Gran volumen — varias obras o programación anual" },
  { value: "framework", label: "Acuerdo marco, licitación o contrato plurianual" },
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

type ExtraParam = { id: string; criterion: string; detail: string };

function newParam(): ExtraParam {
  return { id: crypto.randomUUID(), criterion: "", detail: "" };
}

export default function BenchmarkingWizard() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [categoryOther, setCategoryOther] = useState("");
  const [orderVolume, setOrderVolume] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [extraParams, setExtraParams] = useState<ExtraParam[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const canNext1 = region != null;
  const canNext2 = category != null && (category !== "other" || categoryOther.trim().length > 0);
  const canNext3 = orderVolume != null && projectType != null;
  const canSubmit = canNext1 && canNext2 && canNext3;

  const addParam = useCallback(() => {
    setExtraParams((prev) => [...prev, newParam()]);
  }, []);

  const updateParam = useCallback((id: string, field: keyof Pick<ExtraParam, "criterion" | "detail">, value: string) => {
    setExtraParams((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  }, []);

  const removeParam = useCallback((id: string) => {
    setExtraParams((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const goNext = () => setStep((s) => Math.min(4, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const summary = useMemo(() => {
    const cat = PRODUCT_CATEGORIES.find((c) => c.value === category);
    const vol = ORDER_VOLUMES.find((v) => v.value === orderVolume);
    const proj = PROJECT_TYPES.find((t) => t.value === projectType);
    return {
      region,
      categoryLabel: category === "other" ? categoryOther.trim() : cat?.label ?? "—",
      volumeLabel: vol?.label ?? "—",
      projectLabel: proj?.label ?? "—",
    };
  }, [region, category, categoryOther, orderVolume, projectType]);

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 pb-20 pt-36 text-gray-800 sm:pt-40">
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-[#DA6D00]">Solicitud registrada</h1>
          <p className="mt-4 leading-relaxed text-gray-700">
            Hemos recogido tu briefing de benchmark para productos de construcción. En una versión conectada a backend, aquí se
            enviaría la solicitud o se generaría el comparativo.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Región</dt>
              <dd className="text-gray-600">{summary.region}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Categoría</dt>
              <dd className="text-gray-600">{summary.categoryLabel}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Volumen / proyecto</dt>
              <dd className="text-gray-600">
                {summary.volumeLabel} · {summary.projectLabel}
              </dd>
            </div>
            {extraParams.filter((p) => p.criterion.trim() || p.detail.trim()).length > 0 && (
              <div>
                <dt className="font-medium text-gray-900">Parámetros adicionales</dt>
                <dd className="text-gray-600">
                  <ul className="mt-1 list-inside list-disc space-y-1">
                    {extraParams
                      .filter((p) => p.criterion.trim() || p.detail.trim())
                      .map((p) => (
                        <li key={p.id}>
                          <span className="font-medium">{p.criterion || "Criterio"}</span>
                          {p.detail.trim() ? `: ${p.detail}` : ""}
                        </li>
                      ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setRegion(null);
              setCategory(null);
              setCategoryOther("");
              setOrderVolume(null);
              setProjectType(null);
              setExtraParams([]);
            }}
            className="mt-8 rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00]"
          >
            Nuevo benchmark
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-36 text-gray-800 sm:pt-40">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#DA6D00] sm:text-4xl">Benchmark de producto</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 sm:text-base">
          Define en unos pasos el contexto de tu obra o suministro para comparar soluciones de construcción: dónde se destina el
          material, qué familia de producto te interesa, el alcance del pedido y los requisitos que deben cumplir los fabricantes
          o distribuidores.
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
            <legend className="text-lg font-semibold text-gray-900">¿En qué región se usará o entregará el producto?</legend>
            <p className="text-sm text-gray-600">Filtra proveedores y normativas aplicables (logística, marcas CE, clima, etc.).</p>
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
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-4">
            <legend className="text-lg font-semibold text-gray-900">¿Qué categoría de producto quieres comparar?</legend>
            <p className="text-sm text-gray-600">Agrupamos familias habituales en construcción e instalaciones.</p>
            <div className="max-h-[min(420px,50vh)] space-y-2 overflow-y-auto pr-1">
              {PRODUCT_CATEGORIES.map((c) => (
                <label
                  key={c.value}
                  className={`flex cursor-pointer items-start rounded-lg border-2 px-4 py-3 text-sm transition ${
                    category === c.value ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={c.value}
                    checked={category === c.value}
                    onChange={() => setCategory(c.value)}
                    className="mr-3 mt-0.5 h-4 w-4 shrink-0 accent-[#DA6D00]"
                  />
                  {c.label}
                </label>
              ))}
            </div>
            {category === "other" && (
              <input
                type="text"
                value={categoryOther}
                onChange={(e) => setCategoryOther(e.target.value)}
                placeholder="Describe la categoría (ej. señalización, composites, fachada ventilada…)"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#DA6D00] focus:ring-2 focus:ring-[#DA6D00]/30"
              />
            )}
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-6">
            <legend className="text-lg font-semibold text-gray-900">Volumen de pedido y tipo de proyecto</legend>
            <p className="text-sm text-gray-600">
              Esto ayuda a priorizar fabricantes que trabajan tu escala y el tipo de obra (residencial, industrial, infraestructura…).
            </p>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-800">Volumen o ritmo de compra previsto</p>
              <div className="space-y-2">
                {ORDER_VOLUMES.map((v) => (
                  <label
                    key={v.value}
                    className={`flex cursor-pointer items-start rounded-lg border-2 px-4 py-3 text-sm transition ${
                      orderVolume === v.value ? "border-[#DA6D00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderVolume"
                      value={v.value}
                      checked={orderVolume === v.value}
                      onChange={() => setOrderVolume(v.value)}
                      className="mr-3 mt-0.5 h-4 w-4 shrink-0 accent-[#DA6D00]"
                    />
                    {v.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-800">Tipo de proyecto u obra</p>
              <div className="space-y-2">
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
          </fieldset>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Parámetros adicionales del benchmark</h2>
            <p className="text-sm text-gray-600">
              Añade criterios técnicos o comerciales: plazos, certificaciones (CE, DIT, marcado CPR), sostenibilidad, servicio
              posventa, referencias en obra, etc.
            </p>
            {extraParams.length === 0 && (
              <p className="text-sm italic text-gray-500">Opcional. Puedes enviar sin parámetros extra o añadir los que necesites.</p>
            )}
            <ul className="space-y-4">
              {extraParams.map((p, i) => (
                <li key={p.id} className="rounded-lg border border-gray-200 bg-gray-50/80 p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Parámetro {i + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeParam(p.id)}
                      className="text-xs text-red-600 underline hover:text-red-800"
                    >
                      Quitar
                    </button>
                  </div>
                  <input
                    type="text"
                    value={p.criterion}
                    onChange={(e) => updateParam(p.id, "criterion", e.target.value)}
                    placeholder="Criterio (ej. reacción al fuego A2-s1,d0)"
                    className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#DA6D00] focus:ring-1 focus:ring-[#DA6D00]"
                  />
                  <textarea
                    value={p.detail}
                    onChange={(e) => updateParam(p.id, "detail", e.target.value)}
                    placeholder="Detalle o valor objetivo (ej. entrega máx. 6 semanas, EPD disponible)"
                    rows={2}
                    className="w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#DA6D00] focus:ring-1 focus:ring-[#DA6D00]"
                  />
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={addParam}
              className="rounded-md border-2 border-dashed border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#DA6D00] hover:text-[#DA6D00]"
            >
              + Añadir parámetro
            </button>

            <div className="mt-6 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
              <p className="font-medium text-gray-900">Resumen rápido</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>
                  <span className="font-medium">Región:</span> {summary.region ?? "—"}
                </li>
                <li>
                  <span className="font-medium">Categoría:</span> {summary.categoryLabel}
                </li>
                <li>
                  <span className="font-medium">Volumen:</span> {summary.volumeLabel}
                </li>
                <li>
                  <span className="font-medium">Proyecto:</span> {summary.projectLabel}
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
            {step < 4 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2) || (step === 3 && !canNext3)}
                className="rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00] disabled:pointer-events-none disabled:opacity-40"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-md bg-[#DA6D00] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#c25f00] disabled:pointer-events-none disabled:opacity-40"
              >
                Enviar benchmark
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
