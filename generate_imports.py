files = [f'b1 ({i}).jpeg' for i in range(1, 70)]
imports = []
array_items = []

for f in files:
    # Variable name: b1_1_jpeg
    var_name = f.replace(' ', '_').replace('(', '').replace(')', '').replace('.', '_')
    imports.append(f"import {var_name} from '../pages/bottle/{f}';")
    array_items.append(f"    {{ src: {var_name}, alt: 'Client Bottle' }},")

print('\n'.join(imports))
print('-----SPLIT-----')
print('\n'.join(array_items))
