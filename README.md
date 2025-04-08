<!-- @format -->

## 🧠 Challenges Faced

### 1. Preventing Double API Calls in Development

**Problem:**  
During development, `useEffect` was triggered twice due to React Strict Mode, causing duplicate API calls.

**Solution:**  
Used `useRef` to create a `hasFetched` flag, which ensures the thunk is only dispatched once:

```tsx
const hasFetched = useRef(false);

useEffect(() => {
  if (hasFetched.current) return;
  hasFetched.current = true;

  dispatch(gamesThunk());
}, []);
```

### 2. Displaying Loading Spinner Inside NativeSelect

**Problem:**  
Chakra UI's `NativeSelect` component does not natively support rendering a spinner or any loading indicator inside the dropdown while data is being fetched.

**Solution:**  
Wrapped the `NativeSelect` inside a `Box` with `position: relative`, and used `position: absolute` to overlay a custom `PlatformSpinner` component inside the dropdown field — aligned to the right:

```tsx
<Box width='240px' position='relative'>
  <NativeSelect.Root size='sm' width='100%'>
    <NativeSelect.Field placeholder='Select platform'>
      {!isLoading &&
        platforms?.results.map((result) => (
          <option key={result.id} value={result.slug}>
            {result.name}
          </option>
        ))}
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>

  {isLoading && (
    <Box position='absolute' right='10px' top='50%' transform='translateY(-50%)'>
      <PlatformSpinner />
    </Box>
  )}
</Box>
```

## ⚠️ Bug Fix: App Crashed on Specific Search Term (e.g., "GTA")

### ❌ Issue

The application crashed when the user searched for **"GTA"**.  
This issue did **not** occur with other search terms like **"WWE"**, **"Marvel"**, or **"Witcher"**.

### 🔍 Root Cause

Some games (e.g., GTA titles) returned platform data with `slug` values that were **not defined in the `iconMap`** used to render icons.  
This caused Chakra UI’s `<Icon>` component to receive an `undefined` value for the `as` prop, leading to a runtime error:

### ✅ Solution

A check was added to ensure that only valid icon components (those defined in `iconMap`) are rendered:

React.Children.only expected to receive a single React element child.

```tsx
{
  platformIcons?.map(({ platform }) => {
    const IconComponent = iconMap[platform.slug];
    if (!IconComponent) return null;

    return <Icon key={platform.id} as={IconComponent} color='gray.500' />;
  });
}
```

This prevents undefined values from being passed to the Chakra UI Icon component, fixing the crash.
