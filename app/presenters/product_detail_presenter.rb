class ProductDetailPresenter
  attr_reader :name, :description, :sizes, :colors, :materials

  def initialize
    @name = 'Nimble Mug'
    @description = 'Pre-order starting at 5:00 a.m. PDT  on 4.17.'
    @sizes = defined_sizes
    @colors = defined_colors
    @materials = defined_materials
  end

  private

  def defined_sizes
    {
      slug: "size_#{secure_number}",
      options: [
        { id: secure_number, value: '220', title: '220ml' },
        { id: secure_number, value: '350', title: '350ml' },
        { id: secure_number, value: '450', title: '450ml' }
      ]
    }
  end

  def defined_colors
    {
      slug: "color_#{secure_number}",
      placeholder: 'Choose a color',
      options: [
        { id: secure_number, value: '#20639b', title: 'Blue', bg: { color: '#20639b' } },
        { id: secure_number, value: '#3caea3', title: 'Green', bg: { color: '#3caea3' } },
        { id: secure_number, value: '#f6d55c', title: 'Yellow', bg: { color: '#f6d55c' } },
        { id: secure_number, value: '#ed553b', title: 'Orange', bg: { color: '#ed553b' } }
      ]
    }
  end

  def defined_materials
    {
      slug: "material_#{secure_number}",
      placeholder: 'Choose a material',
      options: [
        { id: secure_number, value: '0', title: 'Matte', bg: { image: '#' } },
        { id: secure_number, value: '0.5', title: 'Half Matte', bg: { image: '#' } },
        { id: secure_number, value: '1', title: 'Metallic', bg: { image: '#' } }
      ]
    }
  end

  def secure_number
    SecureRandom.hex(5)
  end
end
