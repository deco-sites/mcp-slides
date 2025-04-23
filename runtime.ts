import type { Manifest } from "./manifest.gen.ts";
import type { Manifest as ManifestGoogleSlides } from "apps/google-slides/manifest.gen.ts";
import { proxy } from "@deco/deco/web";
export const invoke = proxy<Manifest & ManifestGoogleSlides>();
