import { AppContext } from "site/apps/site.ts";

export default async function loader(
  _props: unknown,
  _req: Request,
  ctx: AppContext,
) {
  const response = await ctx.invoke["google-slides"].loaders.authClient();

  return {
    response,
  };
}

export function Callback() {
  return (
    <div class="flex flex-col gap-4">
      <h1>Callback</h1>
    </div>
  );
}
